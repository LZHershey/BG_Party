import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import AuthForm from "./components/AuthForm";
import Home from "./components/Home";
import { me } from "./store";
import PrefForm from "./components/PrefForm";
import GameList from "./components/GameList";
import FriendList from "./components/FriendList";
import PartyList from "./components/PartyList";
import PartyForm from "./components/PartyForm";
import SinglePartyDetails from "./components/SinglePartyDetails";

class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    const { isLoggedIn } = this.props;

    return (
      <div>
        {isLoggedIn ? (
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/update-preferences" component={PrefForm} />
            <Route path="/game-library" component={GameList} />
            <Route path="/friends" component={FriendList} />
            <Route path="/parties" component={PartyList} />
            <Route path="/new-party" component={PartyForm} />
            <Route path="/party/:partyId" component={SinglePartyDetails} />
            <Redirect to="/home" />
          </Switch>
        ) : (
          <Switch>
            <Route path="/" exact>
              <AuthForm formName="login" displayName="Login" />
            </Route>
            <Route path="/login">
              <AuthForm formName="login" displayName="Login" />
            </Route>
            <Route path="/signup">
              <AuthForm formName="signup" displayName="Sign Up" />
            </Route>
          </Switch>
        )}
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(me());
    },
  };
};

export default withRouter(connect(mapState, mapDispatch)(Routes));
