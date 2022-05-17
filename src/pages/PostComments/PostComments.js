import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Loading from "../../components/Loading";
import "./styles.css";
import { pendingPostComment } from "../../store/postComment/slice";

const PostComments = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const { postCommentData, loading, error } = useSelector(
    (state) => state.postComment
  );

  useEffect(() => {
    dispatch(pendingPostComment(params.id));
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
