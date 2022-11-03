import React from "react";
import Header from "./Header";
import Movies from "./Movies";
import Search from "./Search";

class App extends React.Component {
/**
 * En este componente haremos la llamada a la API. Contendrá <Header />, <Search />
 * y <Movies />
 */
  constructor(props) {
    super(props);
    this.state = {
      searchValue: null,
      moviesResults: null,
      ratings: null,
    };
  }

  render() {
    return (
      <React.Fragment>
        <Header>
          <Search />
        </Header>
        <Movies data={this.state.moviesResults} />
      </React.Fragment>
    )
  }
}

export default App;