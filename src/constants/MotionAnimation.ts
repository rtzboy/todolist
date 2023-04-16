export const SVGFadeIn = (duration: number) => ({
	hidden: { pathLength: 0 },
	visible: { pathLength: 1, transition: { duration } }
});

export const taskList = (delay: number) => ({
	hidden: {
		transition: {
			when: 'afterChildren'
		}
	},
	visible: {
		transition: {
			when: 'beforeChildren',
			staggerChildren: delay
		}
	}
});

export const taskItem = () => ({
	hidden: { scale: 0.8, opacity: 0, x: 200 },
	visible: { scale: 1, opacity: 1, x: 0, transition: { type: 'spring' } }
});

export const exitTaskItem = () => ({
	scale: 0.8,
	opacity: 0,
	x: 200,
	transition: { duration: 0.5 }
});
