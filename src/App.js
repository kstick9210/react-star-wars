import React, {Component} from 'react';
import './App.css';
import {getAllStarships} from './services/sw-api';
import {Route, Switch, Link} from 'react-router-dom';
import StarshipPage from './pages/StarshipPage';

class App extends Component {
  state = {
    starships: []
  }

  async componentDidMount() {
    const starships = await getAllStarships();
    console.log(starships)
    this.setState({starships: starships.results})
  }

  getStarship = (idx) => {
    return this.state.starships[idx]
  }

  render() {
    return(
      <div>
        <header className="App-header">Star Wars Starships</header>
        <Switch>
          <Route exact path="/" render={() =>
            <div className="App-main">
                {this.state.starships.map((starship, idx) =>
                  <Link
                    className="App-link App-card"
                    key={starship.name}
                    to={{
                      pathname: `/starship`,
                      state: starship
                    }}
                  >
                  {starship.name}
                  </Link>
                )}
              </div>
            }>
          </Route>
          <Route path="/starship" render={({location}) =>
            <StarshipPage 
              location={location}
            />
          }>
          </Route>
        </Switch>
      </div>
    )
  }
}

export default App;
