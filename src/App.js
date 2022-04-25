import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import UserInfo from "./components/UserInfo";
import PostList from "./components/PostList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/postlist/:id" element={<PostList />} />
        <Route path="/UserInfo" element={<UserInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
