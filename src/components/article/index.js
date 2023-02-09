import { memo } from 'react';
import './style.less';

const Article = memo(({ children }) => (
	<article className='article w-full select-none'>{children}</article>
));
export default Article;
