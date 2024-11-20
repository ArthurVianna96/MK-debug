import {
	CircleIcon,
	HStack,
	Icon,
	Pressable,
	Text,
	VStack,
} from '@gluestack-ui/themed';
import { ChevronDownIcon, ChevronUpIcon } from 'app/assets/icons';
import { AccountTypes, MappedAccount } from 'app/types';
import { useState } from 'react';

interface AccountTypeWrapperProps {
	type: AccountTypes;
	accounts: MappedAccount[];
}

export default function AccountTypeWrapper({
	type,
	accounts,
}: AccountTypeWrapperProps) {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggleDrawer = () => setIsOpen((prev) => !prev);

	const handleRenderAccounts = () => {
		if (!isOpen) {
			return null;
		}

		return (
			<>
				{accounts.map((account, idx) => (
					<HStack
						alignItems="center"
						space="xs"
						key={account.account_id}
						px="$2"
						py="$3"
						borderTopWidth={1}
						borderTopColor="$smNeutral400"
					>
						<Text
							fontFamily="$semibold"
							fontSize="$sm"
							textTransform="capitalize"
						>
							{account.name}
						</Text>
						<Icon as={CircleIcon} h={5} w={5} />
						<Text fontSize="$sm">{account.account_mask}</Text>
					</HStack>
				))}
			</>
		);
	};

	const hasAccounts = accounts.length > 0;

	if (!hasAccounts) {
		return null;
	}

	return (
		<VStack borderTopWidth={1} borderTopColor="$smNeutral400">
			<Pressable onPress={handleToggleDrawer}>
				<HStack
					justifyContent="space-between"
					alignItems="center"
					px="$2"
					py="$3"
				>
					<Text color="$smBlue700" fontFamily="$semibold">
						{type}
					</Text>
					<Icon as={isOpen ? ChevronUpIcon : ChevronDownIcon} h={25} w={25} />
				</HStack>
			</Pressable>
			{handleRenderAccounts()}
		</VStack>
	);
}
