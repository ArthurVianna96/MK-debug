import { createStyle } from '@gluestack-style/react';

export const PopoverBackdrop = createStyle({
	':initial': {
		opacity: 0,
	},
	':animate': {
		opacity: 0.6,
	},
	':exit': {
		opacity: 0,
	},
	':transition': {
		type: 'spring',
		damping: 18,
		stiffness: 450,
		mass: 0.9,
		opacity: {
			type: 'timing',
			duration: 50,
			delay: 50,
		},
	},
	position: 'absolute',
	left: 0,
	top: 0,
	right: 0,
	bottom: 0,
	bg: '$smNeutral900',
	_dark: {
		bg: '$backgroundDark950',
	},
	_web: {
		cursor: 'default',
	},
});
