import { useState, useEffect } from "react";

import HeaderUser from "../../components/HeaderUser";

import { adminData } from "../../service/User/api";
import "./styles.css";

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
      <HeaderUser />
      <main className="user-info">
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
