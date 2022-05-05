import { useState, useEffect } from "react";

import { userData } from "../../service/User/api";
import { userEmail } from "../../service/User/constants";
import "./styles.css";

const UserInfo = () => {
  const [user, setUser] = useState({});

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      let data = await userData(userEmail);

      if (data) {
        setUser(data[0]);
      } else {
        setLoading(true);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <main className="user-info">
        <h4>User Info</h4>

        {loading ? (
          <div style={{ color: "red" }}>Loading...</div>
        ) : (
          <>
            <p>
              <b>User Name:</b> <i>{user.name}</i>
            </p>
            <p>
              <b>Phone:</b> <i>{user.phone}</i>
            </p>
            <p>
              <b>Username:</b> <i>{user.username}</i>
            </p>
            <p>
              <b>Website:</b> <i>{user.website}</i>
            </p>
          </>
        )}
      </main>
    </>
  );
};

export default UserInfo;
