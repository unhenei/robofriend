import React from 'react';

const AddRobotBtn = ({addRobot}) => {
	return(
		<div 
			className='tc ma3 pa3 f3 bg-red white w5 br3 hover-bg-dark-red'
			onClick={addRobot}>
			Add To List
		</div>
	)
}

export default AddRobotBtn;