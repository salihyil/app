import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { postComment } from "../../service/User/api";
import "./styles.css";

const PostComments = () => {
  const params = useParams();
  const [postCommentData, setPostCommentData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const commentData = await postComment({ postId: params.id });

      if (commentData) {
        setPostCommentData(commentData);
      } else {
        setLoading(true);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h3>Comments</h3>
      {loading ? (
        <div style={{ color: "red" }}>Loading...</div>
      ) : (
        <>
          {" "}
          <ul>
            {postCommentData.map((data, i) => {
              return (
                <li key={i}>
                  <h4>{data.name}</h4>
                  <blockquote className="pullquote">
                    {data.body}
                    <strong>&mdash; {data.email}</strong>
                  </blockquote>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </>
  );
};

export default PostComments;
