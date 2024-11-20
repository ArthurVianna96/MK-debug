import {
	Center,
	HStack,
	Heading,
	Icon,
	Pressable,
	Text,
	VStack,
} from '@gluestack-ui/themed';
import { ArrowLeftIcon } from 'app/assets/icons';
import { ComponentProps, ReactElement } from 'react';
import { useRouter } from 'solito/navigation';

interface AlternativeHeaderProps {
	title: string;
	subtitle?: string;
	subtitleElement?: ReactElement;
	rightIcon?: typeof ArrowLeftIcon;
	rightIconProps?: ComponentProps<typeof ArrowLeftIcon>;
	onRightIconPress?: () => void;
	onLeftIconPress?: () => void;
}

export default function AlternativeHeader({
	title,
	subtitle,
	subtitleElement,
	rightIcon,
	rightIconProps,
	onRightIconPress,
	onLeftIconPress,
}: AlternativeHeaderProps) {
	const { back } = useRouter();

	return (
		<HStack alignItems="center" justifyContent="space-between" px="$3">
			<Pressable onPress={onLeftIconPress || back}>
				<Icon as={ArrowLeftIcon} w="$8" h="$8" color="$smNeutral900" />
			</Pressable>
			<VStack space="xs" alignItems="center">
				<Heading
					fontFamily="$semibold"
					fontSize="$md"
					textTransform="uppercase"
					letterSpacing={0.8}
				>
					{title}
				</Heading>
				{subtitle && (
					<Text textAlign="center" fontSize="$sm" fontFamily="$semibold">
						{subtitle}
					</Text>
				)}
				{!subtitle && subtitleElement && subtitleElement}
			</VStack>

			{rightIcon && onRightIconPress ? (
				<Pressable onPress={onRightIconPress}>
					<Center w="$8" h="$8">
						<Icon
							as={rightIcon}
							color="$smNeutral900"
							w="$8"
							h="$8"
							{...rightIconProps}
						/>
					</Center>
				</Pressable>
			) : (
				<Pressable>
					<Icon as={ArrowLeftIcon} color="transparent" w="$8" h="$8" />
				</Pressable>
			)}
		</HStack>
	);
}
