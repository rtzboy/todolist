import { SVGProps } from './Check';

const CheckDoc = (props: SVGProps) => (
	<svg
		{...props}
		xmlns='http://www.w3.org/2000/svg'
		fill='none'
		viewBox='0 0 24 24'
		strokeWidth={1.5}
		stroke='currentColor'
		strokeLinecap='round'
		strokeLinejoin='round'
	>
		<path stroke='none' d='M0 0h24v24H0z'></path>
		<path d='M9.615 20H7a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v8M14 19l2 2 4-4M9 8h4M9 12h2'></path>
	</svg>
);

export default CheckDoc;
