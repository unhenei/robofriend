import React from 'react';

const Card = ({id, name, job}) => {
	if (!id) {id = 1}
	return(
		<div id='cardContainer' className='pa3 w5 br3 ma2 tc bg-light-gray'>
			<img alt='robot' src={`https://robohash.org/${id}?size=200x200`}></img>
			<div id='roboInfo'>
				<div id='roboName' className='f3 fw6 ma2'>{name}</div>
				<div id='roboJob' className='f4 ma2'>{job}</div>
			</div>
		</div>
	)
}

export default Card;