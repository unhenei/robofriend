import React from 'react';

const SubmitBtn = ({createNewRobot}) => {
	return(
		<div 
			className='tc pa3 ma2 f4 bg-blue white w4 br3 hover-bg-dark-blue'
			onClick={createNewRobot}>
			{'Submit'}
		</div>
	)
}

export default SubmitBtn;