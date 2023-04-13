import React from 'react';

export interface SVGProps extends React.SVGProps<SVGSVGElement> {}

const Check = (props: SVGProps) => (
	<svg
		{...props}
		xmlns='http://www.w3.org/2000/svg'
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

const MoveUpDown = (props: SVGProps) => {
	const { className, fill } = props;
	return (
		<svg
			className={className || ''}
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth='1.25'
			viewBox='0 0 24 24'
		>
			<path stroke='none' d='M0 0h24v24H0z'></path>
			<path d='M16 9l-4-4-4 4h8' fill={fill}></path>
			<path d='M16 18l-4 4-4-4h8' fill={fill}></path>
			<line x1='6' y1='12' x2='18' y2='12'></line>
			<line x1='6' y1='15' x2='18' y2='15'></line>
		</svg>
	);
};

export { Check, DoubleCheck, MoveUpDown };
