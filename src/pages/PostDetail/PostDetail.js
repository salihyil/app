import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { postDetail } from "../../service/User/api";
import HeaderUser from "../../components/HeaderUser";

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
      <main>
        <h3>{postDetailData.title}</h3>
        <p>
          <Link to={`/postcomments/${postDetailData.id}`}>
            {postDetailData.body}
          </Link>
        </p>
      </main>
    </div>
  );
};

export default PostDetail;
