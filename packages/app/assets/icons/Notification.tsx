import { createIcon } from '@gluestack-ui/themed';
import { Path } from 'react-native-svg';

export const NotificationIcon = createIcon({
	viewBox: '0 0 30 30',
	path: (
		<Path
			d="M6.66666 22.2917V20.7292H8.85416V12.7604C8.85416 11.3021 9.28384 10.0043 10.1432 8.86719C11.0026 7.73004 12.1354 7.01389 13.5417 6.71875V5.96354C13.5417 5.56424 13.6849 5.23438 13.9713 4.97396C14.2578 4.71354 14.6007 4.58334 15 4.58334C15.3993 4.58334 15.7422 4.71354 16.0286 4.97396C16.3151 5.23438 16.4583 5.56424 16.4583 5.96354V6.71875C17.8646 7.01389 19.0017 7.73004 19.8698 8.86719C20.7378 10.0043 21.1719 11.3021 21.1719 12.7604V20.7292H23.3333V22.2917H6.66666ZM15 25.4167C14.4444 25.4167 13.9583 25.2127 13.5417 24.8047C13.125 24.3967 12.9167 23.9063 12.9167 23.3333H17.0833C17.0833 23.9063 16.8793 24.3967 16.4713 24.8047C16.0634 25.2127 15.5729 25.4167 15 25.4167ZM10.4167 20.7292H19.6094V12.7604C19.6094 11.4757 19.1667 10.3819 18.2812 9.47917C17.3958 8.57639 16.3108 8.125 15.026 8.125C13.7413 8.125 12.6519 8.57639 11.7578 9.47917C10.8637 10.3819 10.4167 11.4757 10.4167 12.7604V20.7292Z"
			fill="currentColor"
		/>
	),
});