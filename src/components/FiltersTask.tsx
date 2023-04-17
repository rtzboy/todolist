import { Dispatch, SetStateAction } from 'react';
import { FiltersType } from '../types/TodoTasksTypes';

type FiltersTaskProps = {
	filterTasks: FiltersType;
	setFilterTasks: Dispatch<SetStateAction<FiltersType>>;
};

const FiltersTask = ({ filterTasks, setFilterTasks }: FiltersTaskProps) => {
	return (
		<div className='flex items-center justify-evenly'>
			{filterButtons.map(filButton => (
				<button
					key={filButton.id}
					onClick={() => {
						setFilterTasks(filButton.typeButton);
					}}
					className={`${
						filterTasks === filButton.typeButton ? 'bg-neutral-600' : 'bg-neutral-800'
					} rounded-lg px-4 py-1 text-sm transition-all duration-500`}
				>
					{filButton.name}
				</button>
			))}
		</div>
	);
};

const filterButtons: { id: number; name: string; typeButton: FiltersType }[] = [
	{ id: 1, name: 'All', typeButton: 'allTask' },
	{ id: 2, name: 'Active', typeButton: 'activeTask' },
	{ id: 3, name: 'Completed', typeButton: 'completedTask' }
];

export default FiltersTask;
