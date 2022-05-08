import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";

import { postComment } from "../../service/User/api";
import "./styles.css";

const PostComments = () => {
  const params = useParams();
  const [postCommentData, setPostCommentData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const commentData = await postComment({ postId: params.id });

      if (commentData) {
        setPostCommentData(commentData);
        setError("");
      } else {
        setError("Comments bulunamadı");
      }
      setLoading(false);
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h3>Comments</h3>
      {error ? <div style={{ color: "red" }}>{error}</div> : null}
      {loading ? (
        <Loading />
      ) : (
        <>
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
