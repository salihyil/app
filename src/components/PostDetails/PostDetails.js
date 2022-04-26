import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { comments } from "../../service/User/api";

const PostDetails = () => {
  const params = useParams();
  const [commentsData, setCommentsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setCommentsData(await comments({ postId: params.id }));
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
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
  );
};

export default PostDetails;
