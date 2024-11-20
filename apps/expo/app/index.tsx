import { VStack } from '@gluestack-ui/themed';
import LinkAccountsScreen from 'app/screens/link-accounts/Screen';

import Constants from 'expo-constants';

export default function LinkAccounts() {
	return (
		<VStack flex={1} pt={Constants.statusBarHeight + 10} bg="white">
			<LinkAccountsScreen />
		</VStack>
	);
}
