import React from 'react';
import InputBox from './InputBox'

const InfoForm = () => {
	return(
		<div>
			<InputBox id={'newId'} type={'text'} label={'ID:   '} placeholder = {'Enter Anything To Get A New Look'} />
			<InputBox id={'newName'} type={'text'} label={'Name: '} />
			<InputBox id={'newJob'} type={'text'} label={'Job:  '} />
		</div>
	)
}

export default InfoForm;