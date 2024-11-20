'use client';

import { VStack } from '@gluestack-ui/themed';
import AlternativeHeader from 'app/components/alternativeHeader/AlternativeHeader';
import LinkAccountsWebModalWrapper from 'app/components/linkAccounts/WebModalWrapper';
import MobileScreenContainer from 'app/components/mobileScreenContainer/MobileScreenContainer';
import WebScreenContainer from 'app/components/webScreenContainer/WebScreenContainer';

export default function LinkAccountsScreen() {
	return (
		<>
			<MobileScreenContainer>
				<AlternativeHeader title="LINKED ACCOUNTS" />
				<VStack pt="$8" px="$5">
					<LinkAccountsWebModalWrapper />
				</VStack>
			</MobileScreenContainer>

			<WebScreenContainer>
				<LinkAccountsWebModalWrapper />
			</WebScreenContainer>
		</>
	);
}
