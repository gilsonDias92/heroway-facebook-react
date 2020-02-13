import React from "react";
import * as ReactRedux from "react-redux";
import { useHistory } from "react-router-dom";

import "./style.css";
import { getGitHubUser } from "../../../redux/reducers/github";
import { IAppState } from "../../../redux/configureStore";

function Login() {
  const [inputValue, setInputValue] = React.useState("gilsonDias92");
  const dispatch = ReactRedux.useDispatch();
  const history = useHistory();

  const gitHubState = ReactRedux.useSelector((state: IAppState) => {
    return state.github;
  });

  React.useEffect(() => {
    if (gitHubState.user !== null) {
      history.push("/feed");
    }
  }, [gitHubState, history]);

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  function handleClick() {
    const reduxAction = getGitHubUser(inputValue);
    dispatch(reduxAction);
  }

  return (
    <div className="login">
      <div className="login-box">
        <input
          defaultValue="gilsonDias92"
          className="github-input"
          type="text"
          placeholder="Digite seu usuário do Github"
          onChange={handleChange}
        />
        <button className="github-button" onClick={handleClick} disabled={gitHubState.isFetching}>
          {gitHubState.isFetching === true ? "Carregando..." : "Entrar"}
        </button>

        {gitHubState.isEmpty === true ? "Não há usuários" : undefined}
        {gitHubState.hasErrors === true ? "Algo deu errado..." : undefined}
      </div>
    </div>
  );
}

export default Login;
