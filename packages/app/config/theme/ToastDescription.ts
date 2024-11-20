import { createStyle } from '@gluestack-style/react';

export const ToastDescription = createStyle({
	color: '$smNeutral900',
	fontFamily: '$regular',
	_dark: {
		color: '$textDark200',
	},
	props: {
		size: 'sm',
	},
});
