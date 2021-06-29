import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
// import { connect } from "react-redux";
import { useDispatch } from "react-redux";

import * as actions from "../../../store/actions/index";

function Logout(props) {
  const dispatch = useDispatch();

  const onLogout = () => dispatch(actions.logout());

  // const { onLogout } = props;
  useEffect(() => {
    onLogout();
  }, [onLogout]);

  return <Redirect to="/" />;
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onLogout: () => dispatch(actions.logout()),
//   };
// };
//connect(null, mapDispatchToProps)
export default (Logout);
