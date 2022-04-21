import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Login from "./components/Login";
import HomePage from "./components/HomePage";
import UserInfo from "./components/UserInfo";
import PostList from "./components/PostList";

function App() {
  const [userName, setUserName] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login setUserName={setUserName} />} />
        <Route path="/home" element={<HomePage userName={userName} />} />
        <Route path="/postlist" element={<PostList userName={userName} />} />
        <Route path="/UserInfo" element={<UserInfo userName={userName} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
