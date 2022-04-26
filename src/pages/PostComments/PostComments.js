import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { postComment } from "../../service/User/api";
import HeaderUser from "../../components/HeaderUser";

const PostComments = () => {
  const params = useParams();
  const [postCommentData, setPostCommentData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setPostCommentData(await postComment({ postId: params.id }));
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <HeaderUser />
      {postCommentData.map((data, i) => {
        return (
          <ul key={i}>
            <li>
              <p>{data.name}</p>
              <p>{data.body}</p>
              <p>{data.email}</p>
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default PostComments;
