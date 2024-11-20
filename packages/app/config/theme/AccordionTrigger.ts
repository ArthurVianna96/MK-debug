import { createStyle } from '@gluestack-style/react';

export const AccordionTrigger = createStyle({
	width: '$full',
	py: '$5',
	px: '$4',
	flexDirection: 'row',
	justifyContent: 'space-between',
	alignItems: 'center',

	':active': {
		opacity: 0.6,
	},

	':hover': {
		opacity: 0.7,
	},

	_web: {
		outlineWidth: 0,
		':active': {
			opacity: 1,
		},
	},
	':disabled': {
		opacity: 0.4,
		_web: {
			cursor: 'not-allowed',
		},
	},
	':focusVisible': {
		_light: {
			bg: '$backgroundLight50',
		},
		_dark: {
			bg: '$backgroundDark900',
		},
	},
});
