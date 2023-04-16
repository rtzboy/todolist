export const SVGFadeIn = (duration: number) => ({
	hidden: { pathLength: 0 },
	visible: { pathLength: 1, transition: { duration } }
});

export const taskFadeIn = () => ({
	hidden: { x: 100, opacity: 0, scale: 0.7 },
	visible: { x: 0, opacity: 1, scale: 1, transition: { duration: 1 } }
});

export const ulParent = (delay: number) => ({
	visible: {
		transition: {
			when: 'beforeChildren',
			staggerChildren: delay
		}
	},
	hidden: {
		transition: {
			when: 'afterChildren'
		}
	}
});
