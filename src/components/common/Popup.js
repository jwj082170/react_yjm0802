function Popup(props) {
	return (
		<aside className='popup'>
			<div className='con'></div>
			<span
				className='close'
				onClick={() => props.setOpen(false)}>
				close
			</span>
		</aside>
	);
}

export default Popup;
