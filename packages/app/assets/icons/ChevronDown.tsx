import { createIcon } from '@gluestack-ui/themed';
import { Path } from 'react-native-svg';

export const ChevronDownIcon = createIcon({
	viewBox: '0 0 30 30',
	path: (
		<>
			<Path
				d="M20.5 12L14.9486 18L9.5 12"
				stroke="currentColor"
				strokeWidth="2"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</>
	),
});
