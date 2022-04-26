import React from "react";
import { Link } from "react-router-dom";
import PostDetails from "../PostDetails/PostDetails";

const PostList = () => {
  return (
    <div>
      <header>
        <h3>
          <Link to="/userinfo">{localStorage.getItem("username")} </Link>
          Hoşgeldiniz.
        </h3>
      </header>
      <PostDetails />
    </div>
  );
};

export default PostList;
