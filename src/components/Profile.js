/**
 * Created by zichuange on 2017/3/20.
 */
import React, { Component } from 'react';
import RepoAndStar from './RepoAndStar';
import { Panel, PanelHeader, PanelFooter } from 'rebass';


import './Profile.css';

class Profile extends Component {





  render() {
    if (this.props.stargazers_count) {
      return (
        <div className="Profile">
          <Panel>
            <PanelHeader>
              It seems you have {this.props.stargazers_count} stars. They are:
            </PanelHeader>
              <ol>
                {
                  Object
                    .keys(this.props.repoAndStars)
                    .map(key => <RepoAndStar key={key} details={this.props.repoAndStars[key]} />)
                }
              </ol>
            <PanelFooter>

            </PanelFooter>
          </Panel>
        </div>
      );
    } else {
      return (
        <p style={{textAlign: "center"}}>Nothing to show.</p>
      );
    }
  }
}

export default Profile;
