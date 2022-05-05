import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { postDetail } from "../../service/User/api";

import PostComments from "../PostComments";
import "./styles.css";

const PostDetail = () => {
  const params = useParams();
  const [postDetailData, setPostDetailData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const postDtlData = await postDetail({ postId: params.id });

      if (postDtlData) {
        setPostDetailData(postDtlData);
      } else {
        setLoading(true);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <main className="detail-main">
        <h3>Post Detay Başlıkları post: {`${params.id}`}</h3>
        {loading ? (
          <div style={{ color: "red" }}>Loading...</div>
        ) : (
          <>
            <h4>{postDetailData.title}</h4>
            <p>{postDetailData.body}</p>
          </>
        )}
      </main>
      <main className="comments-main">
        <PostComments />
      </main>
    </div>
  );
};

export default PostDetail;
