import React from "react";
import Card from "./Card";
import Ratings from "./Ratings";

const Movies = () => {
/**
 * Desplegará un componente <Card /> por cada uno de los resultados de la búsqueda,
 * así como el componente de <Ratings />
 */
	return (
		<React.Fragment>
			<Ratings ratings={null} />
			<Card title={null} year={null} image={null}/>
		</React.Fragment>
	)
}

export default Movies;