import React from 'react';

const InputBox = (props) => {
	let {type, label, placeholder} = props
	if (placeholder === undefined){
		placeholder = '';
	}
	return(
		<form className='ma2 pa3'>
			<label className='f4'>{label}</label>
			<input 
				type={type} 
				placeholder={placeholder} 
				className='ma2 pa3 w5'>
			</input>
		</form>
	)
}

export default InputBox;