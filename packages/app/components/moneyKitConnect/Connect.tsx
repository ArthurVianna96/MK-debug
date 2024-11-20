'use client';
import {
	AddIcon,
	Button,
	ButtonIcon,
	ButtonSpinner,
	ButtonText,
	useToast,
} from '@gluestack-ui/themed';
import { useMKConnect } from 'app/hooks/useMKConnect/useMKConnect';
import { ComponentProps } from 'react';

interface MKConnectProps {
	type?: 'CTA' | 'Secondary' | 'IconButton' | 'Relink';
	buttonText?: string;
	buttonProps?: ComponentProps<typeof Button>;
}

export default function MKConnect({
	type = 'CTA',
	buttonText,
	buttonProps,
}: MKConnectProps) {
	const toast = useToast();
	const { handleMKConnect, isLinking } = useMKConnect();

	const renderButton = () => {
		if (type === 'Secondary') {
			return (
				<>
					<ButtonIcon as={AddIcon} h={15} w={15} />
					<ButtonText>{buttonText}</ButtonText>
				</>
			);
		}
		if (type === 'IconButton') {
			return <ButtonIcon as={AddIcon} h={15} w={15} />;
		} else {
			return <ButtonText>{buttonText}</ButtonText>;
		}
	};
	return (
		<>
			<Button
				onPress={handleMKConnect}
				isDisabled={isLinking}
				{...(type === 'CTA'
					? { action: 'primary' }
					: type === 'Secondary'
					? { action: 'tertiary' }
					: { variant: 'link' })}
				{...buttonProps}
			>
				{isLinking ? <ButtonSpinner /> : renderButton()}
			</Button>
		</>
	);
}
