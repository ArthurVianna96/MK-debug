import { createIcon } from '@gluestack-ui/themed';
import { Path } from 'react-native-svg';

export const ChevronRightIcon = createIcon({
	viewBox: '0 0 30 30',
	path: (
		<>
			<Path
				d="M12 20.5L18 14.9486L12 9.5"
				stroke="currentColor"
				strokeWidth="2"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</>
	),
});
