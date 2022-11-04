import React from 'react';
import InputBox from './InputBox'

const InfoForm = () => {
	return(
		<div>
			<InputBox type={'text'} label={'ID:   '} placeholder = {'Type Anything To Get A New Look'} />
			<InputBox type={'text'} label={'Name: '} />
			<InputBox type={'text'} label={'Job:  '} />
		</div>
		// <form className='db'>
		// 	<label>ID: </label>
		// 	<input type='text' placeholder='Type Anything To Get A New Look'></input>
		// 	<label>ID: </label>
		// 	<input></input>
		// 	<label>ID: </label>
		// 	<input></input>
		// </form>
	)
}

export default InfoForm;