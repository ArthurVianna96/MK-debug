'use client';
import { Button, ButtonText } from '@gluestack-ui/themed';
import moneykit from '@moneykit/connect';
import { useRouter } from 'solito/navigation';

export default function MKOAuthRedirect() {
	const mk = new moneykit();
	if (window) {
		mk.continue(window.location.href, (exchangeableToken, institution) => {
			console.log(exchangeableToken, institution);
		});
	}

	const router = useRouter();

	return (
		<Button onPress={() => router.push('/link-accounts')}>
			<ButtonText>Go Back To Link Accounts Page</ButtonText>
		</Button>
	);
}
