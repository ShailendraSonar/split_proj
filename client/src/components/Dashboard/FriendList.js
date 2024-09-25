import React from "react";
import { connect } from "react-redux";

const FriendList = props => {
  return (
    <ul>
  {/* Check if props.user.friends exists and has items */}
  {props.user.friends && props.user.friends.length > 0 ? (
    props.user.friends.map((value, index) => (
      <li key={index} className="friendlist">
        <i className="fas fa-user" />
        <span>{value}</span>
      </li>
    ))
  ) : (
    <li>No friends available</li>
  )}
</ul>
  );
};

const mapStateToProps = state => {
  console.log("state is  ", state);
  return {
    user: state.user
  };
};

const fn = connect(mapStateToProps);
export default fn(FriendList);
