import { useState, useEffect } from "react"
import { Link } from "react-router-dom";

import { adminData } from "../../service/User/api";

const UserInfo = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      let data = await adminData();

      setData(data[0]);
    };

    fetchData();
  }, []);

  return (
    <>
      <header>
        <h3>
          <Link to="/userinfo">{localStorage.getItem("username")} </Link>{" "}
          Hoşgeldiniz.
        </h3>
      </header>
      <main>
        <h4>User Info</h4>

        <p>
          <b>User Name:</b> <i>{data.name}</i>
        </p>
        <p>
          <b>Phone:</b> <i>{data.phone}</i>
        </p>
        <p>
          <b>Username:</b> <i>{data.username}</i>
        </p>
        <p>
          <b>Website:</b> <i>{data.website}</i>
        </p>
      </main>
    </>
  );
};

export default UserInfo;
