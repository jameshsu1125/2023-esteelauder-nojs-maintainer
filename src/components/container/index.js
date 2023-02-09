import { memo, useContext, useEffect } from 'react';
import { Context, pageName } from '../../settings/config';
import { ACTION } from '../../settings/constant';

const Container = memo(({ children, onCopy }) => {
	const [context] = useContext(Context);
	useEffect(() => {}, []);

	return (
		<main className='flex w-full flex-1 justify-center'>
			<div className='w-full max-w-5xl bg-gray-100'>
				<div className='flex w-full flex-row items-center justify-between bg-primary p-3 text-base-100'>
					<span className='flex flex-row items-center text-xl'>
						<svg
							className='mr-1 h-6 w-6'
							fill='currentColor'
							viewBox='0 0 20 20'
							xmlns='http://www.w3.org/2000/svg'
							aria-hidden='true'
						>
							<path
								clipRule='evenodd'
								fillRule='evenodd'
								d='M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z'
							/>
						</svg>
						{pageName[context[ACTION.page]]}
					</span>
					<button className='btn-sm btn' type='button' onClick={onCopy}>
						copy
						<svg
							className='ml-1 h-4 w-4'
							fill='currentColor'
							viewBox='0 0 20 20'
							xmlns='http://www.w3.org/2000/svg'
							aria-hidden='true'
						>
							<path d='M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z' />
							<path d='M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z' />
						</svg>
					</button>
				</div>
				{children}
			</div>
		</main>
	);
});
export default Container;
