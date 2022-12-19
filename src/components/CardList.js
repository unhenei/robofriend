import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
	const robotsCards = robots.map(robot => {
		return(
			<Card key={robot.id} id={robot.id} name={robot.name} job={robot.job} />
		)
	})
	return(
		<div className='flex flex-wrap' style={{'justifyContent':'flex-start'}}>
			{robotsCards}
		</div>
	)
}

export default CardList;