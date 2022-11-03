import React from "react";

const Card = (props) => {
/**
 * Mostrará la información de cada película, es decir, el título, año e imagén
 */
	return (
		<React.Fragment>
			<p>{props.title}</p>
			<p>{props.year}</p>
			<img src={props.image}/>
		</React.Fragment>
	)
}

export default Card;