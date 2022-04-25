import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

import { postList } from "../../service/User/api";

const HomePage = () => {
  const [postData, setPostData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setPostData(await postList());
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      <header>
        <h3>
          <Link to="/userinfo">{localStorage.getItem("username")} </Link>
          Hoşgeldiniz.
        </h3>
      </header>
      <main>
        <h4>Post Listesi Başlıkları</h4>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <ol>
            {postData.map((data, i) => {
              return (
                <li key={i}>
                  <Link to={`/postlist/${data.id}`}>{data.title}</Link>
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
