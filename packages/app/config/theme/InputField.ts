import { createStyle } from '@gluestack-style/react';

export const InputField = createStyle({
	width: '$full',
	height: '$full',
	paddingHorizontal: '$3',
	color: '$smNeutral900',
	props: {
		placeholderTextColor: '$smNeutral600',
	},
	_web: {
		cursor: 'text',
		':disabled': {
			cursor: 'not-allowed',
		},
	},

	':disabled': {
		color: '$smNeutral700',
	},
});
