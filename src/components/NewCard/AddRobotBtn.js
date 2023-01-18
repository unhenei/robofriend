import React from 'react';

const AddRobotBtn = ({addRobot}) => {
	return(
		<div 
			className='tc pa3 f3 bg-red white w5 br3 hover-bg-dark-red'
			style={{margin:'auto'}}
			onClick={addRobot}>
			{'Add To List'}
		</div>
	)
}

export default AddRobotBtn;