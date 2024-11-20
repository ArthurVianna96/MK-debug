import { createIcon } from '@gluestack-ui/themed';
import { Path } from 'react-native-svg';

export const ChevronUpIcon = createIcon({
	viewBox: '0 0 30 30',
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
		</>
	),
});
