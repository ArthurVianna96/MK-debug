import {
	ConnectConfiguration,
	presentLinkFlow,
} from '@moneykit/connect-react-native';
import { SuccessPayload } from '@moneykit/connect-react-native/src/Connect.types';
import * as Linking from 'expo-linking';
import { useState } from 'react';
import { Platform } from 'react-native';

const BASE_URL = 'https://api.moneykit.com';

const authToken =
	'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImtpZCI6ImY2MklzemFxZzJ5MTlWUnltRXV2REhMMlNWZk9CcHlJYnpka1NfSmhnbU0ifQ.eyJzdWIiOiJzYW5kYm94XzA5MzVhODg0NzQwMDJlYjZjNDM4IiwiYXVkIjpbImh0dHBzOi8vYXBpLm1vbmV5a2l0LmNvbSJdLCJjdXN0b21lciI6eyJuYW1lIjoiU3VwZXJtb25leSJ9LCJhcHBfaWQiOiJhcHBfQ2hlNVZFOFJTdkJ4WUZoWlV0TExkYSIsIm1vZGUiOiJzYW5kYm94IiwiaXNfdHJpYWwiOnRydWUsInNjb3BlIjoiaW5zdGl0dXRpb25zOnJlYWQgbGluazpkYXRhOnJlYWQgbGluazpkYXRhOnJlZnJlc2ggbGluazpkZWxldGUgbGlua19zZXNzaW9uOmNyZWF0ZSIsImlzcyI6Imh0dHBzOi8vYXBpLm1vbmV5a2l0LmNvbSIsImV4cCI6MTczMjEwNzEzNiwiaWF0IjoxNzMyMTAzNTM2fQ.Phk-x8wW_zs0bz-wJRasqFv56mi6D5y7RVo9-jRUvGk';

const USER_ID = 123456;

export const useMKConnect = (linkId?: string) => {
	const [isLinking, setIsLinking] = useState(false);

	let redirectUrl = Linking.createURL('mk-oauth');

	const CreateLinkSessionTokenService = async ({
		userId,
		redirectUrl,
		existingLinkId,
	}: {
		userId: number;
		redirectUrl: string;
		existingLinkId?: string;
	}): Promise<string> => {
		const body = {
			connect_features: { duplicate_institution_warning: true },
			customer_user: {
				id: userId,
			},

			redirect_uri: redirectUrl,
			link_tags: [`debug:create_link`],
			settings: {
				products: {
					transactions: {
						prefetch: true,
						extend_history: true,
						required: true,
						reason: 'create your budget and financial insights',
					},
					investments: {
						prefetch: true,
					},
				},
			},
			...(existingLinkId ? { existing_link_id: existingLinkId } : {}),
		};
		const options = {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${authToken}`,
				'content-type': 'application/json',
			},
			body: JSON.stringify(body),
		};

		const linkSessionResponse = await fetch(
			`${BASE_URL}/link-session`,
			options
		);
		const { link_session_token } = await linkSessionResponse.json();
		return link_session_token;
	};

	const ExchangeTokenService = async ({
		exchangeableToken,
	}: {
		exchangeableToken: string;
	}) => {
		const body = { exchangeable_token: exchangeableToken };
		const options = {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${authToken}`,
				'content-type': 'application/json',
			},
			body: JSON.stringify(body),
		};

		const exchangeTokenResponse = await fetch(
			`${BASE_URL}/link-session/exchange-token`,
			options
		);
		const { link_id } = await exchangeTokenResponse.json();
		return link_id;
	};

	const onSuccessLink = async (payload: SuccessPayload) => {
		if (Platform.OS === 'android') {
			if (payload.token) {
				const linkId = await ExchangeTokenService({
					exchangeableToken: (payload.token as unknown as string) || '',
				});
				console.log(linkId);
			}
		} else {
			if (payload.token?.value) {
				const linkId = await ExchangeTokenService({
					exchangeableToken: payload.token?.value || '',
				});
				console.log(linkId);
			}
		}
	};

	const presentMoneyKit = (linkSessionToken: string) => {
		const config: ConnectConfiguration = {
			linkSessionToken,
			onSuccess(payload) {
				onSuccessLink(payload);
			},
			onExit(error) {
				error && console.log('Exit: ', error);
			},
			onEvent(event) {
				console.log('Event: ', event);
			},
		};
		presentLinkFlow(config);
	};

	const startLink = async (params: {
		userId: number;
		redirectUrl: string;
		existingLinkId?: string;
	}) => {
		const linkSession = await CreateLinkSessionTokenService(params);
		if (linkSession) {
			presentMoneyKit(linkSession);
		} else {
			console.error('Failed to present Moneykit');
		}
	};

	const handleMKConnect = async () => {
		setIsLinking(true);
		await startLink({
			userId: USER_ID,
			redirectUrl: redirectUrl || '',
			existingLinkId: linkId,
		});
		setIsLinking(false);
	};

	return {
		handleMKConnect,
		isLinking,
	};
};
