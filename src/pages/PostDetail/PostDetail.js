import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { postDetail } from "../../service/User/api";
import HeaderUser from "../../components/HeaderUser";
import PostComments from "../PostComments";
import "./styles.css";

const PostDetail = () => {
  const params = useParams();
  const [postDetailData, setPostDetailData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      setPostDetailData(await postDetail({ postId: params.id }));
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <HeaderUser />
      <main className="detail-main">
        <h3>Post Detay Başlıkları</h3>
        <h4>{postDetailData.title}</h4>
        <p>{postDetailData.body}</p>
      </main>
      <main className="comments-main">
        <PostComments />
      </main>
    </div>
  );
};

export default PostDetail;
