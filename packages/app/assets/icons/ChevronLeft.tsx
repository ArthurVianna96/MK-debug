import { createIcon } from '@gluestack-ui/themed';
import { Path } from 'react-native-svg';

export const ChevronLeftIcon = createIcon({
	viewBox: '0 0 30 30',
	path: (
		<>
			<Path
				d="M18 20.5L12 14.9486L18 9.5"
				stroke="currentColor"
				strokeWidth="2"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</>
	),
});
