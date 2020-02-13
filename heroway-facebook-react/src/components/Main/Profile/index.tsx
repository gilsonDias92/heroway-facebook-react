import React from "react";
import * as ReactRedux from "react-redux";
import ReactRouter, {useHistory} from 'react-router';

import Typing from "./ProfileInfo/Typing";
import { IAppState } from "../../../redux/configureStore";

function ProfileSidebar() {
  const history = useHistory();

  const isTyping = ReactRedux.useSelector((state: IAppState) => {
    return state.profile.typing;
  });

  const user = ReactRedux.useSelector((state: IAppState) => {
    return state.github.user || {};
  });

  React.useEffect(() => {
    if (user.login === undefined) {
      history.push('/');
    }
     
  }, [user, history]);

  return (
    <div className="profile">
      <div className="profile-image">
        {isTyping === true ? <Typing /> : undefined}
        <div className="image-board">
          <img src={user.avatar_url} alt="Profile Image" />
        </div>
      </div>
      <div className="profile-name">
        <span>{user.login}</span>
      </div>
      <div className="profile-info">
        <div>
          <span>347</span>
          <span>Followers</span>
        </div>
        <div>
          <span>94</span>
          <span>Following</span>
        </div>
      </div>
    </div>
  );
}

export default ProfileSidebar;
