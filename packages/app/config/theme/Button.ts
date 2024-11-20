import { createStyle } from '@gluestack-style/react';

export const Button = createStyle({
	px: '$5',
	h: '$11',
	borderRadius: '$sm',
	flexDirection: 'row',
	justifyContent: 'center',
	alignItems: 'center',
	gap: '$3',

	_text: {
		fontFamily: '$bold',
		fontSize: '$sm',

		_web: {
			fontSize: '$md',
		},
	},

	_icon: {
		props: {
			width: '$7',
			height: '$7',
		},
	},

	_web: {
		h: '$12',
		':focusVisible': {
			outlineWidth: '$0.5',
			outlineColor: '$primary700',
			outlineStyle: 'solid',
			_dark: {
				outlineColor: '$primary300',
			},
		},
	},

	':disabled': {
		cursor: 'not-allowed',
	},

	variants: {
		action: {
			primary: {
				bg: '$ctaColorPrimary500',

				borderBottomWidth: '$2',
				borderBottomColor: '$ctaBorderColor',

				':hover': {
					bg: '$ctaColorPrimary600',
				},

				':active': {
					bg: '$ctaColorPrimary700',
				},

				_text: {
					color: '$smNeutral900',
				},

				_icon: {
					color: '$smNeutral900',
				},

				_spinner: {
					props: {
						color: '$smNeutral900',
					},
				},

				':disabled': {
					bg: '$smNeutral100',
					borderBottomWidth: 0,
					_text: {
						color: '$smNeutral700',
					},
					_icon: {
						color: '$smNeutral700',
					},
					_spinner: {
						props: {
							color: '$smNeutral700',
						},
					},
				},
			},
			secondary: {
				bg: '$smBlue700',

				':hover': {
					bg: '$smBlue800',
				},

				':active': {
					bg: '$smBlue900',
				},

				_text: {
					color: '$white',
				},
				_icon: {
					color: '$white',
				},

				_spinner: {
					props: {
						color: '$white',
					},
				},

				':disabled': {
					opacity: 0.8,
					_text: {
						color: '$white',
					},
					_icon: {
						color: '$white',
					},
					_spinner: {
						props: {
							color: '$white',
						},
					},
				},
			},
			tertiary: {
				bg: 'transparent',
				borderColor: '$smBlue700',
				borderWidth: '$1',

				':hover': {
					bg: '$smBlue50',
				},

				':active': {
					bg: '$smBlue100',
				},

				_text: {
					color: '$smBlue700',
				},
				_icon: {
					color: '$smBlue700',
				},
				_spinner: {
					props: {
						color: '$smBlue700',
					},
				},
				':disabled': {
					bg: '$smNeutral100',
					borderWidth: '$1',
					borderColor: '$smNeutral600',
					_text: {
						color: '$smNeutral600',
					},
					_icon: {
						color: '$smNeutral600',
					},
					_spinner: {
						props: {
							color: '$smNeutral600',
						},
					},
				},
			},
			muted: {
				bg: '$smBlue100',

				':hover': {
					bg: '$smBlue200',
				},

				':active': {
					bg: '$smBlue50',
				},

				':disabled': {
					bg: '$smNeutral100',
					borderWidth: '$1',
					borderColor: '$smNeutral600',
					_text: {
						color: '$smNeutral600',
					},
					_icon: {
						color: '$smNeutral600',
					},
					_spinner: {
						props: {
							color: '$smNeutral600',
						},
					},
				},

				_text: {
					color: '$smBlue700',
				},

				_icon: {
					color: '$smBlue700',
				},

				_spinner: {
					props: {
						color: '$smBlue700',
					},
				},
			},
			delete: {
				bg: 'transparent',
				borderColor: '$semanticRed700',
				borderWidth: '$1',

				':hover': {
					bg: '$semanticRed50',
				},

				':active': {
					bg: '$semanticRed100',
				},

				_text: {
					color: '$semanticRed700',
				},

				_icon: {
					color: '$semanticRed700',
				},

				_spinner: {
					props: {
						color: '$semanticRed700',
					},
				},
			},
			primaryOutline: {
				bg: '$white',

				borderWidth: '$1',
				borderColor: '$smNeutral400',

				':hover': {
					bg: '$smBlue700',
				},

				_text: {
					color: '$smNeutral900',
					':hover': {
						color: '$white',
					},
				},

				_icon: {
					color: '$smNeutral900',
				},

				_spinner: {
					props: {
						color: '$smNeutral900',
					},
				},
			},
			outline: {
				bg: '$white',

				borderWidth: '$1',
				borderColor: '$smNeutral400',

				':hover': {
					bg: '$smNeutral400',
				},

				_text: {
					color: '$smNeutral900',
				},

				_icon: {
					color: '$smNeutral900',
				},

				_spinner: {
					props: {
						color: '$smNeutral900',
					},
				},
			},
		},

		variant: {
			link: {
				px: '$0',
				h: '$6',
				bg: 'transparent',
				borderBottomWidth: 0,
				_text: {
					color: '$smBlue700',
				},
				_icon: {
					color: '$smBlue700',
				},
				_spinner: {
					props: {
						color: '$smBlue700',
					},
				},

				':hover': {
					bg: 'transparent',
					_text: {
						textDecorationLine: 'underline',
					},
				},
				':active': {
					bg: 'transparent',
					_text: {
						textDecorationLine: 'underline',
					},
				},
			},
		},

		size: {
			xs: {
				px: '$3.5',
				h: '$8',
				_icon: {
					props: {
						size: '2xs',
					},
				},
				_text: {
					props: {
						size: 'xs',
					},
				},
			},
			sm: {
				px: '$4',
				h: '$11',
				_text: {
					fontSize: '$sm',
				},
			},
			md: {},
			lg: {
				px: '$6',
				h: '$11',
				_icon: {
					props: {
						size: 'md',
					},
				},
				_text: {
					props: {
						size: 'lg',
					},
				},
			},
			xl: {
				px: '$7',
				h: '$12',
				_icon: {
					props: {
						size: 'lg',
					},
				},
				_text: {
					props: {
						size: 'xl',
					},
				},
			},
		},
	},
	compoundVariants: [],

	props: {
		action: 'primary',
	},
});
