import copy from 'copy-to-clipboard';
import CDNpath from 'lesca-cdn-path';
import Fetcher, { contentType, formatType } from 'lesca-fetcher';
import {
	forwardRef,
	lazy,
	Suspense,
	useContext,
	useImperativeHandle,
	useMemo,
	useReducer,
	useRef,
} from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOMServer from 'react-dom/server';
import Minifier from 'string-minify';
import Strip from 'strip-comments';
import Container from '../components/container';
import Nav from '../components/nav';
import { Context, initialState, reducer } from '../settings/config';
import { ACTION, PAGE } from '../settings/constant';
import '../settings/global.less';

CDNpath.install(process.env.cdn);
CDNpath.config.mode = 'localhost';

Fetcher.install({
	hostUrl: './',
	contentType: contentType.JSON,
	formatType: formatType.string,
});

const Pages = forwardRef((_, ref) => {
	const [context] = useContext(Context);
	const page = context[ACTION.page];
	const elementRef = useRef();

	const Page = useMemo(() => {
		const [target] = Object.values(PAGE).filter((data) => data === page);
		const Element = lazy(() => import(`.${target}/`));
		elementRef.current = <Element />;

		if (target) {
			return (
				<Suspense fallback='loading'>
					<Element />
				</Suspense>
			);
		}
		return '';
	}, [context]);

	useImperativeHandle(ref, () => ({
		getChildren() {
			return elementRef.current;
		},
	}));

	return <div className='max-h-screen'>{Page}</div>;
});

const App = () => {
	const [state, setState] = useReducer(reducer, initialState);
	const value = useMemo(() => [state, setState], [state]);
	const pagesRef = useRef();

	const onCopy = () => {
		const node = pagesRef.current.getChildren();
		const html = ReactDOMServer.renderToString(node);
		const minifierString = Minifier(Strip(html));
		const cssLink =
			'<link href="https://www.esteelauder.com.tw/media/export/cms_2.0/SPP/2023_crystal_lip/index.css" rel="stylesheet">';
		if (copy(cssLink + minifierString)) {
			alert('已經複製到剪貼簿');
		}
	};

	return (
		<Context.Provider {...{ value }}>
			<div className='flex w-full'>
				<Nav />
				<Container onCopy={onCopy}>
					<Pages ref={pagesRef} />
				</Container>
			</div>
		</Context.Provider>
	);
};

createRoot(document.getElementById('app')).render(<App />);
