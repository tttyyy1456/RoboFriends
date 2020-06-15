import React from 'react';

class Card extends React.Component{

	render(){
		const name = this.props.name;
		const email = this.props.email;
		return(
			<div className='tc  dib br3 pa3 ma2 grow bw2 shadow-5'>
				<img alt='robo' src={`https://robohash.org/${this.props.id}?300x300`}/>
				<div>
					<h2>{name}</h2>
					<p>{email}</p>
				</div>
			</div>
			)
	}
}

export default Card;