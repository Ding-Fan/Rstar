/**
 * Created by zichuange on 2017/3/20.
 */
import React, { Component } from 'react';
import RepoAndStar from './RepoAndStar';


import './Profile.css';

class Profile extends Component {


  render() {
    return (
      <div className="Profile">
        <p>
          It seems you have {this.props.stargazers_count} stars. They are:
        </p>
        <ul>
          {
            Object
              .keys(this.props.repoAndStars)
              .map(key => <RepoAndStar key={key} details={this.props.repoAndStars[key]} />)
          }
        </ul>
      </div>
    );
  }
}

export default Profile;
