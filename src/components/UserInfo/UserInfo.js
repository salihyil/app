import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import { adminData } from "../../service/User/api";

const UserInfo = (props) => {
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
          <Link to="/userinfo">{props.userName || props.name} </Link>{" "}
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

UserInfo.propTypes = {
  userName: PropTypes.string.isRequired,
};

UserInfo.defaultProps = {
  name: "Leanne Graham",
};

export default UserInfo;
