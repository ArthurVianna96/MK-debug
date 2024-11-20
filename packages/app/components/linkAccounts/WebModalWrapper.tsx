import { Box, Heading, VStack } from '@gluestack-ui/themed';
import MKConnect from '../moneyKitConnect/Connect';
import LinkedInstitutions from './LinkedInstitutions';

export default function LinkAccountsWebModalWrapper() {
	return (
		<VStack space="lg">
			<Box
				display="flex"
				$base-flexDirection="column"
				$md-flexDirection="row"
				$md-flexWrap="wrap"
				gap="$3"
			>
				<Heading flexBasis="49%">Your Linked Accounts</Heading>
				<MKConnect
					type="Secondary"
					buttonText={'link Institution'}
					buttonProps={{ flexBasis: '49%', minHeight: 40 }}
				/>
			</Box>
			<LinkedInstitutions />
		</VStack>
	);
}
