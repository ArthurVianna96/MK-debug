import { createStyle } from '@gluestack-style/react';

export const TextareaInput = createStyle({
	color: '$smNeutral900',
	textAlignVertical: 'top',
	flex: 1,
	props: {
		// @ts-ignore
		multiline: true,
		placeholderTextColor: '$smNeutral600',
	},
	_dark: {
		color: '$textDark50',
		props: {
			placeholderTextColor: '$textDark400',
		},
	},
	_web: {
		cursor: 'text',
		':disabled': {
			cursor: 'not-allowed',
		},
	},
});
