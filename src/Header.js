import React from "react";

const Header = (props) => {
/**
 * props.children será el componente <Search />
 */
	return (
		<div>
			<h1>Movies Ratings</h1>
			<div>
				{props.children}
			</div>
		</div>
	)
}

export default Header;