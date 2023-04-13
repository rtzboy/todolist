import { Check, DoubleCheck } from './icons/Check';

const App = () => {
	return (
		<div className='max-w-md mx-auto p-5 shadow-sm font-roboto mt-5'>
			<h1 className='text-2xl mb-5'>Todo List</h1>
			<p className='mb-5'>Get things done, one task at a time.</p>
			<form className='flex mb-5 gap-1'>
				<input
					type='text'
					className='flex-grow border-b-2 border-b-gray-500 px-3 py-1 outline-none tracking-wide'
				/>
				<button className='px-2 py-1 bg-blue-500 text-white' type='submit'>
					Add
				</button>
			</form>
			<ul className='flex flex-col '>
				<li className='flex py-2 border-b-2  border-b-slate-300'>
					<span className='text-gray-500'>
						<Check className='h-6' />
					</span>
					todo1
				</li>
				<li className='flex py-2 border-b-2  border-b-slate-300'>
					<span className='text-green-500'>
						<DoubleCheck className='h-6' />
					</span>
					todo2
				</li>
			</ul>
		</div>
	);
};

export default App;
