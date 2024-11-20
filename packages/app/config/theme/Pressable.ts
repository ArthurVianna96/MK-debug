import { createStyle } from '@gluestack-style/react';

export const Pressable = createStyle({
	':active': {
		opacity: 0.6,
	},

	':hover': {
		opacity: 0.7,
	},

	_web: {
		':focusVisible': {
			outlineWidth: '2px',
			outlineColor: '$primary700',
			outlineStyle: 'solid',
			_dark: {
				outlineColor: '$primary300',
			},
		},

		':active': {
			opacity: 1,
		},
	},
});
