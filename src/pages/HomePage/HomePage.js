import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { postList } from "../../service/User/api";
import HeaderUser from "../../components/HeaderUser";
import "./style.css";

const HomePage = () => {
  const [postListData, setPostListData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setPostListData(await postList());
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      <HeaderUser />
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
