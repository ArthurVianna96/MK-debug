import { createIcon } from '@gluestack-ui/themed';
import { G, Mask, Path, Rect } from 'react-native-svg';

export const EditIcon = createIcon({
	viewBox: '0 0 30 30',
	path: (
		<>
			<Mask
				id="mask0_1632_19419"
				maskUnits="userSpaceOnUse"
				x="3"
				y="3"
				width="24"
				height="24"
			>
				<Rect x="3" y="3" width="24" height="24" fill="#D9D9D9" />
			</Mask>
			<G mask="url(#mask0_1632_19419)">
				<Path
					d="M7.5 22.5V19.4424L16.4346 10.527L19.473 13.5654L10.5577 22.5H7.5ZM8.99997 21.0001H9.89997L17.3654 13.5654L16.4346 12.6346L8.99997 20.1001V21.0001ZM20.4826 12.5231L17.4442 9.50393L18.9173 8.03088C19.1006 7.83728 19.3307 7.74305 19.6077 7.74818C19.8846 7.75332 20.1147 7.84755 20.298 8.03088L21.9365 9.66929C22.1198 9.85262 22.2147 10.0802 22.2211 10.352C22.2275 10.6238 22.139 10.8565 21.9557 11.0501L20.4826 12.5231Z"
					fill="currentColor"
				/>
			</G>
		</>
	),
});
