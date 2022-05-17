import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import Loading from "../../components/Loading";
import "./style.css";
import { pendingPostList } from "../../store/postList/slice";

const HomePage = () => {
  const dispatch = useDispatch();
  const { loading, postListData, error } = useSelector(
    (state) => state.postList
  );

  useEffect(() => {
    dispatch(pendingPostList());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <main className="homepage">
        <h4>Post Listesi Başlıkları</h4>
        {loading ? (
          <Loading />
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
        {error ? <div style={{ color: "red" }}>{error}</div> : null}
      </main>
    </>
  );
};

export default HomePage;
