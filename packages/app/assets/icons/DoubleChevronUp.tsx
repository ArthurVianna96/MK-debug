import { createIcon } from '@gluestack-ui/themed';
import { Path } from 'react-native-svg';

export const DoubleChevronUpIcon = createIcon({
	viewBox: '0 0 30 38',
	path: (
		<>
			<Path
				d="M20.5 18L14.9486 12L9.5 18"
				stroke="currentColor"
				strokeWidth="2"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<Path
				d="M20.5 26L14.9486 20L9.5 26"
				stroke="currentColor"
				strokeWidth="2"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</>
	),
});
