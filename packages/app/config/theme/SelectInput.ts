import { createStyle } from '@gluestack-style/react';

export const SelectInput = createStyle({
	flex: 1,
	height: '$full',
	pointerEvents: 'none',
	color: '$smNeutral900',
	props: {
		placeholderTextColor: '$smNeutral600',
	},

	_web: {
		width: '$full',
		cursor: 'text',
		':disabled': {
			cursor: 'not-allowed',
		},
	},

	':disabled': {
		color: '$smNeutral700',
	},
});
