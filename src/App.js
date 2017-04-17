import React, {Component} from 'react';
import Axios from 'axios';
import "./vendor/normalize.css";
import ProgressButton from 'react-progress-button';
import "./vendor/react-progress-button.css";

import Profile from './components/Profile';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      stargazers_count: 0,
      username: '',
      minimum: '',
      limit: '',
      buttonState: ''
    }
  }

  search(event) {
    event.preventDefault();

    const fixRate = '?client_id=af7043cb24039e2213d7&client_secret=b3e51a9985bc7ccf444f969ce5c26ca4fd056092';

    Axios.get(`https://api.github.com/users/${this.username.value}${fixRate}`)
      .then(
        (res) => {
          this.setState(res.data);
          this.setState({buttonState: 'success'});
        }
      )
      .catch(
        (err) => {
          this.setState({stargazers_count: 0});
          this.setState({buttonState: 'error'});
          alert(err.response.data.message);
        }
      );

    Axios.get(`https://api.github.com/users/${this.username.value}/repos`)
      .then((res) => {

        let stars = 0;
        res.data.forEach((item) => {
          stars += item.stargazers_count;
        });
        console.log(stars);

        this.setState({stargazers_count: stars});
      });
  }

  render() {
    return (
      <div className="App">
        <link href="https://fonts.googleapis.com/css?family=Gruppo" rel="stylesheet"/>
        <div className="App-header">
          <img src="http://1.bp.blogspot.com/-b83JxdOhgs0/UJEao5fChXI/AAAAAAAAAKA/Qb15ZxQZR1Y/s1600/PatrickStar2.jpg" className="App-logo" alt="logo" />
          <h2>rstar</h2>
          <p className="App-intro">
            Show me the stars!
          </p>
        </div>

        <form className="user-info">
          <div className="input-group">
            <label>
              <span> GitHub Account: &nbsp;</span>
              <input name="username" ref={(input) => this.username = input }/>
            </label>

          </div>

          <div className="input-group">
            <label>
              <span> Minimum Stars: &nbsp;</span>
              <input name="minimum" ref={(input) => this.minimum = input }/>
            </label>
          </div>

          <div className="input-group">
            <label>
              <span> Limit To: &nbsp;</span>
              <input name="limit" ref={(input) => this.limit = input }/>
            </label>
          </div>

          {/*<div className="btn-container">*/}
             {/*/!*reference:  https://github.com/mathieudutour/react-progress-button *!/*/}
            {/*<ProgressButton type="submit" onClick={(e) => this.search(e)} state={this.state.buttonState}>*/}
              {/*Stargazer*/}
            {/*</ProgressButton>*/}
          {/*</div>*/}

          <div className="btn">
            <button type="submit" onClick={(e) => this.search(e)}>GO!</button>
          </div>


        </form>

        <Profile stargazers_count={this.state.stargazers_count} />
      </div>
    );
  }
}

export default App;
