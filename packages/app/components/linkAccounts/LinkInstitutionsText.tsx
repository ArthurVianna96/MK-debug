import { Text, VStack } from '@gluestack-ui/themed';

export default function LinkInstitutionsText() {
	return (
		<VStack space="lg">
			<Text
				textTransform="uppercase"
				color="$smNeutral700"
				fontFamily="$semibold"
				fontSize="$md"
				letterSpacing={1}
			>
				Connect you accounts
			</Text>
			<Text fontFamily="$semibold" fontSize="$md">
				Give us a better financial picture
			</Text>
		</VStack>
	);
}
