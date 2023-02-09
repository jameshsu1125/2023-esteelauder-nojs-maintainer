import CDNpath from 'lesca-cdn-path';
import { memo, useContext, useMemo } from 'react';
import Article from '../../components/article';
import { Context } from '../../settings/config';
import { ACTION } from '../../settings/constant';

const PinkDesireCrystalClearLipBalm = memo(() => {
	const [context] = useContext(Context);
	const cdn = context[ACTION.cdn];

	const image = useMemo(() => CDNpath.path('./421215163b3ef3678c155.85887205.jpg'), [cdn]);

	return (
		<main className='flex w-full justify-center'>
			<div className='w-full max-w-5xl'>
				<div className='w-full'>
					<h1>粉嫩慾望晶透潤唇膏(抓五屏)</h1>
					<Article>
						<img src={image} alt='' />
					</Article>
				</div>
			</div>
		</main>
	);
});
export default PinkDesireCrystalClearLipBalm;
