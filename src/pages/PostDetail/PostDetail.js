import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchPostDetailAsync } from "../../store/postDetail/slice";

import Loading from "../../components/Loading";
import PostComments from "../PostComments";
import "./styles.css";

const PostDetail = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { postDetailData, loading, error } = useSelector(
    (state) => state.postDetail
  );

  useEffect(() => {
    dispatch(fetchPostDetailAsync(params.id));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <main className="detail-main">
        <h3>Post Detay Başlıkları post: {`${params.id}`}</h3>
        {loading ? (
          <Loading />
        ) : (
          <>
            <h4>{postDetailData.title}</h4>
            <p>{postDetailData.body}</p>
          </>
        )}
        {error ? <div style={{ color: "red" }}>{error}</div> : null}
      </main>
      <main className="comments-main">
        <PostComments />
      </main>
    </div>
  );
};

export default PostDetail;
