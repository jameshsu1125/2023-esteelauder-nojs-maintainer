import { memo } from 'react';

const Article = memo(({ children }) => (
	<article className='article pointer-events-none w-full max-w-[1366px] select-none'>
		{children}
	</article>
));
export default Article;
