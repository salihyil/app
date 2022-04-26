import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Login, UserInfo, PostDetail } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/postdetail/:id" element={<PostDetail />} />
        <Route path="/userInfo" element={<UserInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
