import React from 'react';

const InputBox = (props) => {
	let {id, type, label, placeholder} = props
	if (placeholder === undefined){
		placeholder = '';
	}
	return(
		<form className='ma2 pa3'  style={{display:'grid', 'gridTemplateColumns': '1fr 5fr', 'alignItems':'center'}}>
			<label className='f4'>{label}</label>
			<input 
				id={id}
				type={type} 
				placeholder={placeholder} 
				className='ma2 pa3 w5'>
			</input>
		</form>
	)
}

export default InputBox;