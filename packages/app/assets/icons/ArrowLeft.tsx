import { createIcon } from '@gluestack-ui/themed';
import { Path } from 'react-native-svg';

export const ArrowLeftIcon = createIcon({
	viewBox: '0 0 30 30',
	path: (
		<>
			<Path
				d="M15 22.6153L7.38464 15L15 7.38464L16.0692 8.43847L10.2576 14.25H22.6153V15.75H10.2576L16.0692 21.5615L15 22.6153Z"
				fill="currentColor"
			/>
		</>
	),
});
