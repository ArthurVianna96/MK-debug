import { createIcon } from '@gluestack-ui/themed';
import { Circle } from 'react-native-svg';

export const MoreIcon = createIcon({
	viewBox: '0 0 30 30',
	path: (
		<>
			<Circle cx="15" cy="10" r="1.5" fill="currentColor" />
			<Circle cx="15" cy="15" r="1.5" fill="currentColor" />
			<Circle cx="15" cy="20" r="1.5" fill="currentColor" />
		</>
	),
});
