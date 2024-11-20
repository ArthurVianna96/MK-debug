import { createStyle } from '@gluestack-style/react';

export const Input = createStyle({
	height: '$10',
	rounded: '$sm',
	borderWidth: '$1',
	flexDirection: 'row',
	alignItems: 'center',
	':focus': {
		borderWidth: '$2',
	},

	':disabled': {
		opacity: 0.6,
	},

	':hover': {
		opacity: 0.7,
	},

	_input: {
		_web: {
			outlineWidth: 0,
			outline: 'none',
		},
	},

	variants: {
		variant: {
			outline: {
				borderColor: '$smBlue500',
				backgroundColor: '$smBlue100',
				':disabled': {
					borderColor: '$smNeutral400',
					backgroundColor: '$smNeutral100',
					color: '$smNeutral600',
				},
				':invalid': {
					borderColor: '$semanticRed400',
				},
			},
			lightOutline: {
				borderColor: '$smNeutral400',
				backgroundColor: 'white',
				':disabled': {
					borderColor: '$smNeutral400',
					backgroundColor: '$smNeutral100',
					color: '$smNeutral600',
				},
				':invalid': {
					borderWidth: 2,
					borderColor: '$semanticRed400',
				},
				':focus': {
					borderColor: '$smBlue700',
					borderWidth: 2,
					':hover': {
						borderColor: '$primary700',
					},
				},
			},
		},
	},

	defaultProps: {
		size: 'md',
	},
});
