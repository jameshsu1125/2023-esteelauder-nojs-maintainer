import Fetcher from 'lesca-fetcher';
import { useState } from 'react';

const useStyleString = (path = './index.css') => {
	const [state, setState] = useState();
	const fetch = async () => {
		setState(false);
		const res = await Fetcher.get(path);
		setState(res);
	};
	return [state, fetch];
};
export default useStyleString;
