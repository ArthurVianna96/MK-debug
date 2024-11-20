import { createIcon } from '@gluestack-ui/themed';
import { Path } from 'react-native-svg';

export const BusinessLoansIcon = createIcon({
	viewBox: '0 0 30 30',
	path: (
		<>
			<Path
				d="M25.8809 6.66071H19.2234V5.9113C19.2219 5.40687 19.0216 4.92336 18.666 4.56559C18.3104 4.20782 17.8281 4.00461 17.3237 4.00003H12.6763C12.4205 4.00071 12.1675 4.05255 11.9321 4.15249C11.6968 4.25243 11.4837 4.39845 11.3056 4.58197C11.1275 4.76548 10.988 4.98277 10.8951 5.22105C10.8023 5.45932 10.758 5.71377 10.765 5.9694V6.66071H4.1191C3.86658 6.66374 3.61713 6.71649 3.38499 6.81594C3.15286 6.91538 2.94258 7.05958 2.76618 7.2403C2.58978 7.42102 2.4507 7.63472 2.35689 7.86919C2.26308 8.10366 2.21638 8.35432 2.21945 8.60684V22.5493C2.21945 23.0577 2.42143 23.5453 2.78095 23.9048C3.14047 24.2644 3.62809 24.4663 4.13653 24.4663H5.12412V25.4539C5.12412 25.5988 5.18165 25.7377 5.28406 25.8401C5.38647 25.9425 5.52537 26 5.6702 26H8.49354C8.63736 25.9985 8.77477 25.9403 8.87592 25.838C8.97708 25.7358 9.03381 25.5978 9.03381 25.4539V24.478H21.5936V25.4539C21.5936 25.5978 21.6503 25.7358 21.7515 25.838C21.8526 25.9403 21.9901 25.9985 22.1339 26H24.934C25.0747 25.994 25.2077 25.9338 25.3052 25.8321C25.4026 25.7303 25.4569 25.5948 25.4568 25.4539V24.478H25.8577C26.1109 24.4787 26.3618 24.4293 26.5958 24.3326C26.8298 24.2359 27.0423 24.0938 27.2211 23.9144C27.3999 23.7351 27.5414 23.5221 27.6374 23.2878C27.7334 23.0535 27.7821 22.8025 27.7806 22.5493V8.60684C27.7836 8.35432 27.7369 8.10366 27.6431 7.86919C27.5493 7.63472 27.4102 7.42102 27.2338 7.2403C27.0574 7.05958 26.8471 6.91538 26.615 6.81594C26.3829 6.71649 26.1334 6.66374 25.8809 6.66071ZM12.1476 5.38846C12.2182 5.31688 12.3023 5.26 12.3951 5.22111C12.4878 5.18222 12.5873 5.1621 12.6879 5.1619H17.3354C17.5341 5.1619 17.7247 5.24085 17.8653 5.38139C18.0058 5.52194 18.0848 5.71255 18.0848 5.9113V6.66071H11.9617V5.93454C11.9502 5.73526 12.0169 5.53936 12.1476 5.38846ZM8.56906 25.4539C8.56986 25.4643 8.5685 25.4748 8.56507 25.4846C8.56163 25.4945 8.5562 25.5035 8.5491 25.5111C8.54201 25.5188 8.53341 25.5249 8.52385 25.529C8.51428 25.5332 8.50396 25.5353 8.49354 25.5353H5.70505C5.69463 25.5353 5.68431 25.5332 5.67475 25.529C5.66518 25.5249 5.65658 25.5188 5.64949 25.5111C5.64239 25.5035 5.63696 25.4945 5.63352 25.4846C5.63009 25.4748 5.62873 25.4643 5.62953 25.4539V24.478H8.58068L8.56906 25.4539ZM25.0095 25.4539C25.0103 25.4643 25.0089 25.4748 25.0055 25.4846C25.0021 25.4945 24.9966 25.5035 24.9895 25.5111C24.9824 25.5188 24.9738 25.5249 24.9643 25.529C24.9547 25.5332 24.9444 25.5353 24.934 25.5353H22.1339C22.1234 25.5353 22.1131 25.5332 22.1036 25.529C22.094 25.5249 22.0854 25.5188 22.0783 25.5111C22.0712 25.5035 22.0658 25.4945 22.0623 25.4846C22.0589 25.4748 22.0576 25.4643 22.0584 25.4539V24.478H25.0095V25.4539ZM26.6187 22.5493C26.6187 22.7496 26.5391 22.9416 26.3975 23.0833C26.2559 23.2249 26.0638 23.3045 25.8635 23.3045H4.1191C3.92184 23.2999 3.7342 23.2183 3.59632 23.0772C3.45844 22.9361 3.38126 22.7466 3.38132 22.5493V10.8376L12.502 15.2702V16.676H17.5329V15.2702L26.6187 10.8376V22.5493ZM16.9519 15.0668V16.1183H13.0481V15.0668H16.9519ZM26.6187 10.0301L17.4225 14.5091H12.5775L3.38132 10.0301V8.60684C3.38131 8.40601 3.46069 8.21331 3.60216 8.07076C3.74362 7.9282 3.9357 7.84735 4.13653 7.84582H25.8809C26.0787 7.85186 26.2663 7.9347 26.4041 8.07677C26.5418 8.21884 26.6188 8.40897 26.6187 8.60684V10.0301Z"
				fill="currentColor"
			/>
		</>
	),
});
