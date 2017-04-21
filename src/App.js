import React, {Component} from 'react';
import Axios from 'axios';
import {Container, Button, Input} from 'rebass';
import "./vendor/normalize.css";
import "./vendor/react-progress-button.css";

import Profile from './components/Profile';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      stargazers_count: 0,
      username: '',
      minimum: '',
      limit: '',
      repoAndStars: {}
    }
  }

  search(event) {
    event.preventDefault();

    const fixRate = '?client_id=af7043cb24039e2213d7&client_secret=b3e51a9985bc7ccf444f969ce5c26ca4fd056092';
    //
    // Axios.get(`https://api.github.com/users/${this.state.username}${fixRate}`)
    //   .then(
    //     (res) => {
    //       this.setState(res.data);
    //     }
    //   )
    //   .catch(
    //     (err) => {
    //       this.setState({stargazers_count: 0});
    //       alert(err.response.data.message);
    //     }
    //   );

    Axios.get(`https://api.github.com/users/${this.state.username}/repos${fixRate}`)
      .then((res) => {

        let stars = 0;
        res.data.forEach((item) => {
          stars += item.stargazers_count;
        });

        res.data.sort((a, b) => {
          return b.stargazers_count - a.stargazers_count;
        });

        let repoAndStars = {};
        let num = 1;
        res.data.forEach((item) => {
          repoAndStars[`repoAndStar-${num++}`] = {name: item.name, stars: item.stargazers_count};
        });

        console.log(stars);

        this.setState({stargazers_count: stars, repoAndStars: repoAndStars});
      })
      .catch(
        (err) => {
          this.setState({stargazers_count: 0, repoAndStars: {}});
          alert(err.response.data.message);
        }
      );
  }

  render() {
    return (
      <div className="App">
        <Container>
          <link href="https://fonts.googleapis.com/css?family=Gruppo" rel="stylesheet"/>
          <div className="App-header">
            <img src="http://1.bp.blogspot.com/-b83JxdOhgs0/UJEao5fChXI/AAAAAAAAAKA/Qb15ZxQZR1Y/s1600/PatrickStar2.jpg" className="App-logo" alt="logo" />
            <h2>rstar</h2>
            <p className="App-intro">
              Show me the stars!
            </p>
          </div>

          <form className="user-info">
            <Input label="GitHub Account: " name="username" onChange={(event) => this.setState({username: event.target.value})} />
            <Input label="Minimum Stars: " name="minimum" onChange={(event) => this.setState({minimum: event.target.value})} />
            <Input label="Limit To: " name="limit" onChange={(event) => this.setState({limit: event.target.value})} />


            <Button style={{width: 250 + 'px'}} backgroundColor="primary" color="white" pill type="submit" onClick={(e) => this.search(e)}>Gaze!</Button>



          </form>

          <Profile stargazers_count={this.state.stargazers_count} repoAndStars={this.state.repoAndStars} />
        </Container>

      </div>
    );
  }
}

export default App;
