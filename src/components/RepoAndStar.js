/**
 * Created by zichuange on 2017/4/21.
 */
import React, { Component } from 'react';

class RepoAndStar extends Component {
  render () {
    const { details } = this.props;

    return (
      <li className="repo-and-star">
        <span>
          { details.name } :
        </span>
        <span>
          { details.stars }
        </span>
      </li>
    )
  }
}

export default RepoAndStar;