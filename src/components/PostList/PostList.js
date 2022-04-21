import React from "react";
import { Link } from "react-router-dom";

const PostList = ({ userName }) => {
  return (
    <div>
      <header>
        <h3>
          <Link to="/userinfo">{userName} </Link>Hoşgeldiniz.
        </h3>
      </header>
      <main>
        <ul>
          <Link to="/postdetails">
            <li>Post Listeler</li>
          </Link>
          <li>Post Listeler</li>
          <li>Post Listeler</li>
        </ul>
      </main>
    </div>
  );
};

export default PostList;
