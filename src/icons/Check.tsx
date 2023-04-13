import React from 'react';

interface SVGProps extends React.SVGProps<SVGSVGElement> {}

const Check = (props: SVGProps) => (
	<svg
		{...props}
		xmlns='http://www.w3.org/2000/svg'
		width='36'
		height='36'
		fill='none'
		stroke='currentColor'
		strokeLinecap='round'
		strokeLinejoin='round'
		strokeWidth='1.25'
		viewBox='0 0 24 24'
	>
		<path stroke='none' d='M0 0h24v24H0z'></path>
		<path d='M5 12l5 5L20 7'></path>
	</svg>
);

const DoubleCheck = (props: SVGProps) => (
	<svg
		{...props}
		xmlns='http://www.w3.org/2000/svg'
		width='36'
		height='36'
		fill='none'
		stroke='currentColor'
		strokeLinecap='round'
		strokeLinejoin='round'
		strokeWidth='1.25'
		viewBox='0 0 24 24'
	>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<path d='M7 12l5 5l10 -10'></path>
		<path d='M2 12l5 5m5 -5l5 -5'></path>
	</svg>
);

export { Check, DoubleCheck };
