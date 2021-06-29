import React, { useEffect } from "react";
// import { connect } from "react-redux";

import { useDispatch , useSelector } from "react-redux";
import Order from "../../components/Order/Order";
import axios from "../../axios-orders";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import * as actions from "../../store/actions/index";
import Spinner from "../../components/UI/Spinner/Spinner";

function Orders(props) {

  const dispatch = useDispatch();

  const orders = useSelector(state => state.order.orders);
  const  loading = useSelector(state => state.order.loading);
  const token = useSelector(state => state.auth.token);
  const  userId = useSelector(state => state.auth.userId);

  const onFetchOrders = (token, userId) =>
  dispatch(actions.fetchOrders(token, userId));

  useEffect(() => {
    onFetchOrders(token,userId);
  }, [onFetchOrders]);

  // eslint-disable-next-line no-unused-vars
  let ordersProcessing = <Spinner />;
  if (!loading) {
    ordersProcessing = orders.map((order) => (
      <Order
        key={order.id}
        ingredients={order.ingredients}
        price={order.price}
      />
    ));
  }
  return <div>{orders}</div>;
}

// const mapStateToProps = (state) => {
//   return {
//     orders: state.order.orders,
//     loading: state.order.loading,
//     token: state.auth.token,
//     userId: state.auth.userId,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onFetchOrders: (token, userId) =>
//       dispatch(actions.fetchOrders(token, userId)),
//   };
// };
//connect(
//   mapStateToProps,
//   mapDispatchToProps
// )
export default (withErrorHandler(Orders, axios));
