import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { postList } from "../../service/User/api";

import "./style.css";

const HomePage = () => {
  const [postListData, setPostListData] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log(loading);

  useEffect(() => {
    const fetchData = async () => {
      const listData = await postList();

      if (listData) {
        setPostListData(listData);
      } else {
        setLoading(true);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <main className="homepage">
        <h4>Post Listesi Başlıkları</h4>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <ol>
            {postListData.map((data, i) => {
              return (
                <li key={i}>
                  <Link to={`/postdetail/${data.id}`}>{data.title}</Link>
                </li>
              );
            })}
          </ol>
        )}
      </main>
    </>
  );
};

export default HomePage;
