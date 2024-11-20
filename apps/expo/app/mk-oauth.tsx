import { Center } from '@gluestack-ui/themed';
import MKOAuthRedirect from 'app/components/moneyKitConnect/MKOAuthRedirect';

import Constants from 'expo-constants';
export default function MoneyKitOAuthRedirectPage() {
	return (
		<Center flex={1} pt={Constants.statusBarHeight + 10} bg="white">
			<MKOAuthRedirect />
		</Center>
	);
}
