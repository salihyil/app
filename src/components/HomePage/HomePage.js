import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import PropTypes from "prop-types";

import { postList } from "../../service/User/api";

const HomePage = (props) => {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setPostData(await postList());
    };

    fetchData();
  }, []);

  return (
    <>
      <header>
        <h3>
          <Link to="/userinfo">{props.userName || props.name} </Link>
          Hoşgeldiniz.
        </h3>
      </header>
      <main>
        <h4>Post Listesi Başlıkları</h4>
        <ol>
          {postData.map((data, i) => {
            return (
              <li key={i}>
                <Link to="/postlist">{data.title}</Link>
              </li>
            );
          })}
        </ol>
      </main>
      <Outlet />
    </>
  );
};

HomePage.propTypes = {
  userName: PropTypes.string.isRequired,
};

HomePage.defaultProps = {
  name: "Leanne Graham",
};

export default HomePage;
