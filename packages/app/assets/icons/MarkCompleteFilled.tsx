import { createIcon } from '@gluestack-ui/themed';
import { Circle, Path } from 'react-native-svg';

export const MarkCompleteFilledIcon = createIcon({
	viewBox: '0 0 28 28',
	path: (
		<>
			<Circle cx="15" cy="14" r="12" fill="currentColor" />
			<Path
				d="M21.72 10.97L13.23 19.46L8.28003 14.48L9.63003 13.13L13.23 16.73L20.34 9.62L21.72 10.97Z"
				fill="white"
			/>
		</>
	),
});
