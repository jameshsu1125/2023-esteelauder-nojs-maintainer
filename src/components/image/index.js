import Path from 'lesca-cdn-path';
import { Children, cloneElement, useMemo } from 'react';

// const Image = memo(({ src }) => <img src={Path.path(src)} alt='' />);
// export default Image;

const Image = ({ children, src }) => {
	const style = useMemo(() => ({ backgroundImage: `url(${Path.path(src)})` }), [src]);

	return Children.map(children, (child) => cloneElement(child, { ...child.props, style }));
};
export default Image;
