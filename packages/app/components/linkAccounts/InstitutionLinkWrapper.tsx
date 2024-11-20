import {
	Badge,
	BadgeText,
	HStack,
	Icon,
	Menu,
	MenuItem,
	MenuItemLabel,
	Pressable,
	Spinner,
	useToast,
	VStack,
} from '@gluestack-ui/themed';
import { MoreIcon, SyncIcon, TrashIcon } from 'app/assets/icons';
import { useMKConnect } from 'app/hooks/useMKConnect/useMKConnect';
import { AccountTypes, MappedAccounts } from 'app/types';
import { useState } from 'react';
import { Platform } from 'react-native';
import AccountTypeWrapper from './AccountTypeWrapper';
import InstitutionAvatar from './InstitutionAvatar';

interface InstitutionLinkWrapperProps {
	link_id: string;
	institution_id: string;
	institution_name: string;
	institution_avatar: string;
	state: string;
	error_code: string;
	accounts: MappedAccounts;
}

export default function InstitutionLinkWrapper({
	link_id,
	institution_avatar,
	institution_name,
	institution_id,
	accounts,
	state,
	error_code,
}: InstitutionLinkWrapperProps) {
	const toast = useToast();
	const { handleMKConnect } = useMKConnect(link_id);
	const [showConfirmDialog, setShowConfirmDialog] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	return (
		<VStack
			$web-height="fit-content"
			{...(Platform.OS === 'web'
				? { '$base-flexBasis': '100%', '$md-flexBasis': '49%' }
				: {})}
			borderWidth={1}
			borderColor="$smNeutral400"
			rounded="$sm"
		>
			<HStack
				bgColor="$smNeutral200"
				justifyContent="space-between"
				alignItems="center"
				p="$2"
			>
				<InstitutionAvatar
					name={institution_name}
					avatarUrl={institution_avatar}
				/>
				<HStack>
					{state === 'error' && error_code === 'auth_expired' && (
						<Badge action="error" variant="outline" rounded="$full">
							<BadgeText textTransform="capitalize">Auth Expired</BadgeText>
						</Badge>
					)}
					{isLoading ? (
						<Spinner />
					) : (
						<Menu
							placement="bottom right"
							selectionMode="single"
							trigger={({ ...triggerProps }) => {
								return (
									<Pressable {...triggerProps}>
										<Icon as={MoreIcon} h={25} w={25} />
									</Pressable>
								);
							}}
						>
							{state === 'error' && error_code === 'auth_expired' && (
								<MenuItem
									textValue="Relink Institution"
									onPress={handleMKConnect}
								>
									<Icon as={SyncIcon} mr="$2" />
									<MenuItemLabel>Relink Institution</MenuItemLabel>
								</MenuItem>
							)}
							<MenuItem
								textValue="Remove access"
								onPress={() => setShowConfirmDialog(true)}
							>
								<Icon as={TrashIcon} mr="$2" color="$semanticRed700" />
								<MenuItemLabel color="$semanticRed700">
									Remove access
								</MenuItemLabel>
							</MenuItem>
						</Menu>
					)}
				</HStack>
			</HStack>
			{Object.entries(accounts).map(([type, items]) => (
				<AccountTypeWrapper
					key={link_id + type}
					accounts={items}
					type={type as AccountTypes}
				/>
			))}
		</VStack>
	);
}
