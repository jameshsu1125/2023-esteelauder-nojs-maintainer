/* eslint-disable jsx-a11y/label-has-associated-control */
import CDNpath from 'lesca-cdn-path';
import { memo, useContext } from 'react';
import { Context, pageName } from '../../settings/config';
import { ACTION, CDN, PAGE } from '../../settings/constant';

const Nav = memo(() => {
	const [, setContext] = useContext(Context);

	const onCND = (e) => {
		const { checked } = e.target;
		CDNpath.config.mode = checked ? 'cdn' : 'localhost';
		setContext({ type: ACTION.cdn, state: { ...CDN, enabled: checked } });
	};

	return (
		<div className='h-screen w-60 bg-base-200 p-5'>
			<ul>
				{Object.values(PAGE).map((e) => (
					<li
						className='link flex w-full flex-row overflow-hidden text-ellipsis whitespace-nowrap underline-offset-4'
						key={e}
						data-link={e}
						onClick={(event) => {
							setContext({ type: ACTION.page, state: event.target.dataset.link });
						}}
						role='none'
					>
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
								d='M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z'
							/>
						</svg>

						{pageName[e]}
					</li>
				))}
			</ul>
			<div className='form-control mt-10'>
				<label className='label cursor-pointer'>
					<span className='label-text'>用官方圖片</span>
					<input type='checkbox' className='toggle' onChange={onCND} />
				</label>
			</div>
		</div>
	);
});
export default Nav;
