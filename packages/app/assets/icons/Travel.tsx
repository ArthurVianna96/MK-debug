import { createIcon } from '@gluestack-ui/themed';
import { Path } from 'react-native-svg';

export const TravelIcon = createIcon({
	viewBox: '0 0 22 22',
	path: (
		<>
			<Path
				d="M8.02081 20.1667V19.2042L9.85415 17.8292V12.0771L1.83331 14.4375V13.1083L9.85415 8.38751V2.97918C9.85415 2.65834 9.96491 2.38716 10.1864 2.16564C10.408 1.94411 10.6791 1.83334 11 1.83334C11.3208 1.83334 11.592 1.94411 11.8135 2.16564C12.035 2.38716 12.1458 2.65834 12.1458 2.97918V8.38751L20.1666 13.1083V14.4375L12.1458 12.0771V17.8292L13.9791 19.2042V20.1667L11 19.3188L8.02081 20.1667Z"
				fill="currentColor"
			/>
		</>
	),
});
