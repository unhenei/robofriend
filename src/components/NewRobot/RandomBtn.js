import React from 'react';

const RandomBtn = ({randomInfoGenerator}) => {
	return(
		<div 
			className='tc ma3 pa3 f3 bg-blue white w4 br3 hover-bg-black'
			onClick={randomInfoGenerator}>
			Random
		</div>
	)
}

export default RandomBtn;