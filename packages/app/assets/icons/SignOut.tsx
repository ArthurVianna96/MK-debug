import { createIcon } from '@gluestack-ui/themed';
import { G, Mask, Path, Rect } from 'react-native-svg';

export const SignOutIcon = createIcon({
	viewBox: '0 0 30 30',
	path: (
		<>
			<Mask
				id="mask0_338_29667"
				maskUnits="userSpaceOnUse"
				x="3"
				y="3"
				width="24"
				height="24"
			>
				<Rect x="3" y="3" width="24" height="24" fill="#D9D9D9" />
			</Mask>
			<G mask="url(#mask0_338_29667)">
				<Path
					d="M14.25 16V6.4231H15.75V16H14.25ZM15 23.5C13.8308 23.5 12.7308 23.2769 11.7 22.8307C10.6693 22.3846 9.76798 21.7756 8.99618 21.0038C8.2244 20.232 7.61543 19.3307 7.16928 18.3C6.72311 17.2692 6.50003 16.1692 6.50003 15C6.50003 13.7372 6.76542 12.5446 7.29621 11.4221C7.82697 10.2997 8.56671 9.33078 9.51541 8.5154L10.5596 9.55962C9.75321 10.2199 9.12501 11.025 8.67501 11.975C8.22501 12.925 8.00001 13.9333 8.00001 15C8.00001 16.9333 8.68334 18.5833 10.05 19.95C11.4167 21.3167 13.0667 22 15 22C16.95 22 18.6042 21.3167 19.9625 19.95C21.3208 18.5833 22 16.9333 22 15C22 13.9333 21.7792 12.925 21.3375 11.975C20.8958 11.025 20.2635 10.2199 19.4404 9.55962L20.4846 8.5154C21.4397 9.33078 22.1811 10.2997 22.7086 11.4221C23.2362 12.5446 23.5 13.7372 23.5 15C23.5 16.1692 23.2769 17.2692 22.8307 18.3C22.3846 19.3307 21.7782 20.232 21.0115 21.0038C20.2449 21.7756 19.3461 22.3846 18.3154 22.8307C17.2846 23.2769 16.1795 23.5 15 23.5Z"
					fill="currentColor"
				/>
			</G>
		</>
	),
});