import { Routes, Route } from "react-router-dom";

import { HomePage, UserInfo, PostDetail, NoMatch } from "./pages";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="postdetail/:id" element={<PostDetail />} />
          <Route path="/userinfo" element={<UserInfo />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
