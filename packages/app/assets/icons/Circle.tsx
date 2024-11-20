import { createIcon } from '@gluestack-ui/themed';
import { Circle } from 'react-native-svg';

export const CircleIcon = createIcon({
	viewBox: '0 0 28 28',
	path: (
		<>
			<Circle cx="15" cy="14" r="12" stroke="currentColor" />
		</>
	),
});
