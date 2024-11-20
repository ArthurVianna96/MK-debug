import moneykit, {
	LinkedInstitution,
	LinkExitError,
	moneyui,
	type Theme,
} from '@moneykit/connect';
import { gluestackUIConfig } from 'app/config/gluestack-ui.config';
import { useState } from 'react';

const SMTheme: Theme = {
	...moneyui,
	colors: {
		...moneyui.colors,
		accent: gluestackUIConfig.tokens.colors.smBlue700,
	},
	components: {
		...moneyui.components,
		button: {
			...moneyui.components.button,
			inheritInstitutionColor: false,
		},
		progressSpinner: {
			...moneyui.components.progressSpinner,
			color: gluestackUIConfig.tokens.colors.smBlue700,
		},
	},
};

const ExchangeTokenService = async ({
	exchangeableToken,
	userId,
}: {
	exchangeableToken: string;
	userId: number;
}) => {};

const CreateLinkSessionTokenService = async ({
	userId,
	redirectUrl,
	existingLinkId,
}: {
	userId: number;
	redirectUrl: string;
	existingLinkId?: string;
}): Promise<string> => {
	return '';
};

export const useMKConnect = (linkId?: string) => {
	const [isLinking, setIsLinking] = useState(false);

	const onSuccessLink = async (
		exchangeableToken: string,
		institution: LinkedInstitution,
		userId: number,
		callback: Function
	) => {
		const linkId = await ExchangeTokenService({ exchangeableToken, userId });
		return callback();
	};

	const onError = (error: LinkExitError | null) => {
		console.error(error);
	};

	const startLink = async (params: {
		userId: number;
		redirectUrl: string;
		existingLinkId?: string;
	}) => {
		const linkSession = await CreateLinkSessionTokenService(params);
		if (linkSession) {
			const mk = new moneykit({ theme: SMTheme });

			if (linkId) {
				mk.relink(linkSession), (error: LinkExitError | null) => onError(error);
			} else {
				mk.link(
					linkSession,
					(exchangeableToken: string, institution: LinkedInstitution) =>
						onSuccessLink(exchangeableToken, institution, params.userId, () =>
							console.log(institution)
						),
					(error: LinkExitError | null) => onError(error)
				);
			}
		} else {
		}
	};

	const handleMKConnect = async () => {
		setIsLinking(true);
		await startLink({
			userId: 12345,
			redirectUrl: `${process.env.NEXTAUTH_URL as string}/mk-oauth`,
			existingLinkId: linkId,
		});
		setIsLinking(false);
	};

	return {
		handleMKConnect,
		isLinking,
	};
};
