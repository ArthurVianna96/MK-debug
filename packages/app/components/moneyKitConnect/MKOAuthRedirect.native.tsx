import { Button, ButtonText } from '@gluestack-ui/themed';
import { continueFlow } from '@moneykit/connect-react-native';
import { useURL } from 'app/contexts/UrlContext';
import { useEffect } from 'react';
import { useRouter } from 'solito/navigation';

export default function MKOAuthRedirect() {
	const url = useURL();
	const router = useRouter();

	useEffect(() => {
		const continueMKFlow = async (url: string) => {
			await continueFlow(url);
			router.replace('/', {
				experimental: {
					nativeBehavior: 'stack-replace',
					isNestedNavigator: true,
				},
			});
		};
		if (url) {
			continueMKFlow(url);
		}
	}, [url]);

	return (
		<Button onPress={() => router.replace('/', {})}>
			<ButtonText>Go Back To Link Accounts Page</ButtonText>
		</Button>
	);
}
