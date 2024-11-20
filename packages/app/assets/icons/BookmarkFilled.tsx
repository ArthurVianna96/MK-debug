import { createIcon } from '@gluestack-ui/themed';
import { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';

export const BookmarkFilledIcon = createIcon({
	viewBox: '0 0 30 30',
	path: (
		<>
			<G clipPath="url(#clip0_2731_1695)">
				<G clipPath="url(#clip1_2731_1695)">
					<Path
						d="M7.5 25V8.27356C7.5 7.7081 7.70192 7.22948 8.10577 6.83769C8.50962 6.4459 9.00297 6.25 9.58581 6.25H20.4142C20.997 6.25 21.4904 6.4459 21.8942 6.83769C22.2981 7.22948 22.5 7.7081 22.5 8.27356V25L15 21.8786L7.5 25Z"
						fill="black"
					/>
				</G>
			</G>

			<Defs>
				<ClipPath id="clip0_2731_1695">
					<Rect
						width="20"
						height="20"
						fill="white"
						transform="translate(5 5)"
					/>
				</ClipPath>
				<ClipPath id="clip1_2731_1695">
					<Rect
						width="30"
						height="30"
						fill="white"
						transform="translate(0 -2)"
					/>
				</ClipPath>
			</Defs>
		</>
	),
});
