import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { comments } from "../../service/User/api";

const PostList = () => {
  const params = useParams();
  const [commentsData, setCommentsData] = useState([]);

  console.log(commentsData);

  useEffect(() => {
    const fetchData = async () => {
      setCommentsData(await comments({ postId: params.id }));
    };

    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <header>
        <h3>
          <Link to="/userinfo">{localStorage.getItem("username")} </Link>
          Hoşgeldiniz.
        </h3>
      </header>
      <main>
        <ul>
          {commentsData.map((data, i) => {
            return (
              <li key={i}>
                <div>{data.body}</div>
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
};

export default PostList;
