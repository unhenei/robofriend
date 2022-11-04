import React from 'react';

const SubmitBtn = ({createNewRobot}) => {
	return(
		<div 
			className='tc ma3 pa3 f3 bg-green white w4 br3 hover-bg-dark-green'
			onClick={createNewRobot}>
			Submit
		</div>
	)
}

export default SubmitBtn;