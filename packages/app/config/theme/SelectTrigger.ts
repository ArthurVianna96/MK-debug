import { createStyle } from '@gluestack-style/react';

export const SelectTrigger = createStyle({
	height: '$10',
	rounded: '$sm',
	borderWidth: '$1',
	flexDirection: 'row',
	alignItems: 'center',

	':hover': {
		opacity: 0.7,
	},

	':focus': {
		borderColor: '$primary700',
		borderWidth: '$2',
	},

	':disabled': {
		opacity: 0.4,
		':hover': {
			borderColor: '$backgroundLight300',
		},
	},

	_input: {
		py: 'auto',
		px: '$3',
		fontSize: '$sm',
		_web: {
			outlineWidth: 0,
			outline: 'none',
		},
	},
});
