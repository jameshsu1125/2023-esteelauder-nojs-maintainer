import { memo, useEffect } from 'react';

const Article = memo(({ children }) => {
	useEffect(() => {}, []);
	return <article className='w-full'>{children}</article>;
});
export default Article;
