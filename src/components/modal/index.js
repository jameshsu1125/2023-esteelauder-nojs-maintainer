import { memo, useCallback, useContext } from 'react';
import { Context } from '../../settings/config';
import { ACTION, MODAL_STATE } from '../../settings/constant';

const Modal = memo(() => {
	const [context, setContext] = useContext(Context);
	const { title, body, button, onClose } = context[ACTION.modal];

	const onClick = useCallback(() => {
		setContext({ type: ACTION.modal, state: { ...MODAL_STATE, enabled: false } });
		onClose();
	}, [setContext]);

	return (
		<div className='modal modal-open'>
			<div
				className='absolute left-0 top-0 h-full w-full cursor-pointer'
				onClick={onClick}
				role='none'
			/>
			<div className='modal-box relative'>
				<h3 className='text-lg font-bold'>{title}</h3>
				<div className='py-4'>{body}</div>
				<div className='modal-action'>
					<button className='btn' type='button' onClick={onClick}>
						{button}
					</button>
				</div>
			</div>
		</div>
	);
});
export default Modal;
