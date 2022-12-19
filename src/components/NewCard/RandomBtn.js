import React from 'react';

const RandomBtn = ({randomInfoGenerator}) => {
	return(
		<div 
			className='tc pa3 f4 bg-green white w4 br3 hover-bg-black'
			onClick={randomInfoGenerator}>
			{'Random'}
		</div>
	)
}

export default RandomBtn;