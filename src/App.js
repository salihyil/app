import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Login, UserInfo, PostComments, PostDetail } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/postdetail/:id" element={<PostDetail />} />
        <Route path="/postcomments/:id" element={<PostComments />} />
        <Route path="/userInfo" element={<UserInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
