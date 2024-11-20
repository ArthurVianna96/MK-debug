import {
	Avatar,
	AvatarFallbackText,
	AvatarImage,
	HStack,
	Text,
} from '@gluestack-ui/themed';

interface InstitutionAvatarProps {
	name: string;
	avatarUrl: string;
}

export default function InstitutionAvatar({
	name,
	avatarUrl,
}: InstitutionAvatarProps) {
	return (
		<HStack alignItems="center" space="md">
			<Avatar
				bgColor="$white"
				w="$10"
				h="$10"
				borderRadius="$full"
				borderWidth="$1"
				borderColor="$smNeutral400"
				p="$0.5"
			>
				<AvatarFallbackText>{name}</AvatarFallbackText>
				<AvatarImage
					source={{ uri: avatarUrl }}
					alt={name}
					resizeMode="contain"
				/>
			</Avatar>
			<Text fontSize="$lg" fontFamily="$semibold">
				{name}
			</Text>
		</HStack>
	);
}
