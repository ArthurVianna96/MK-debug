import { createStyle } from '@gluestack-style/react';

export const ToastTitle = createStyle({
	fontFamily: '$bold',
	props: {
		size: 'md',
	},
	color: '$smNeutral900',
	_dark: {
		color: '$textDark50',
	},
});
