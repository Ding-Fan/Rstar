/**
 * Created by zichuange on 2017/3/20.
 */
import React, { Component } from 'react';


import './Profile.css';

class Profile extends Component {


  render() {
    return (
      <div className="Profile">
        <p>
          It seems you have {this.props.stargazers_count} stars.
        </p>
      </div>
    );
  }
}

export default Profile;
