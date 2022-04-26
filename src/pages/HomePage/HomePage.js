import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

import { postList } from "../../service/User/api";
import HeaderUser from "../../components/HeaderUser";

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
      <main>
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
      <Outlet />
    </>
  );
};

export default HomePage;
