import { createIcon } from '@gluestack-ui/themed';
import { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';

export const StarIcon = createIcon({
	viewBox: '0 0 20 20',
	path: (
		<>
			<G clipPath="url(#clip0_2537_2158)">
				<G clipPath="url(#clip1_2537_2158)">
					<Path
						d="M6.075 15.875L10 13.525L13.925 15.9L12.875 11.45L16.325 8.45L11.775 8.05L10 3.85L8.225 8.025L3.675 8.425L7.125 11.425L6.075 15.875ZM3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z"
						fill="currentColor"
					/>
				</G>
			</G>
			<Defs>
				<ClipPath id="clip0_2537_2158">
					<Rect width="20" height="20" fill="white" />
				</ClipPath>
				<ClipPath id="clip1_2537_2158">
					<Rect
						width="20"
						height="20"
						fill="white"
						transform="translate(0 -1)"
					/>
				</ClipPath>
			</Defs>
		</>
	),
});
