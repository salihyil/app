import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";

import { postDetail } from "../../service/User/api";

import PostComments from "../PostComments";
import "./styles.css";

const PostDetail = () => {
  const params = useParams();
  const [postDetailData, setPostDetailData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const postDtlData = await postDetail({ postId: params.id });
      if (postDtlData) {
        setPostDetailData(postDtlData);
        setError("");
      } else {
        setError("Post bulunamadı");
      }

      setLoading(false);
    };
    fetchData();

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
