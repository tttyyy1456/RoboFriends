import React from 'react';

const Card = (props) =>{
		const name = props.name;
		const email = props.email;
		return(
			<div className='tc  dib br3 pa3 ma2 grow bw2 shadow-5'>
				<img alt='robo' src={`https://robohash.org/${props.id}?300x300`}/>
				<div>
					<h2>{name}</h2>
					<p>{email}</p>
				</div>
			</div>
			)
	
}

export default Card;