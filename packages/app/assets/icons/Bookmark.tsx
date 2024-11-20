import { createIcon } from '@gluestack-ui/themed';
import { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';

export const BookmarkIcon = createIcon({
	viewBox: '0 0 30 30',
	path: (
		<>
			<G clipPath="url(#clip0_2731_1636)">
				<G clipPath="url(#clip1_2731_1636)">
					<Path
						d="M7.5 25V8.27356C7.5 7.7081 7.70192 7.22948 8.10577 6.83769C8.50962 6.4459 9.00297 6.25 9.58581 6.25H20.4142C20.997 6.25 21.4904 6.4459 21.8942 6.83769C22.2981 7.22948 22.5 7.7081 22.5 8.27356V25L15 21.8786L7.5 25ZM9.23075 22.4254L15 20.0187L20.7693 22.4254V8.27356C20.7693 8.18744 20.7323 8.10849 20.6583 8.03672C20.5843 7.96496 20.503 7.92908 20.4142 7.92908H9.58581C9.49705 7.92908 9.41567 7.96496 9.34169 8.03672C9.26773 8.10849 9.23075 8.18744 9.23075 8.27356V22.4254Z"
						fill="currentColor"
					/>
				</G>
			</G>
			<Defs>
				<ClipPath id="clip0_2731_1636">
					<Rect
						width="20"
						height="20"
						fill="white"
						transform="translate(5 5)"
					/>
				</ClipPath>
				<ClipPath id="clip1_2731_1636">
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
