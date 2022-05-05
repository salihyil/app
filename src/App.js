import { useState } from "react";
import { Routes, Route, Navigate, Link } from "react-router-dom";

import { Layout, UserInfo, PostDetail } from "./pages";

const NoMatch = () => {
  return (
    <section>
      <p>There's nothing here: 404!</p>
      <Link to={`/`}>Go back to the homepage</Link>
    </section>
  );
};

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("userEmail");

  if (!token) {
    return <Navigate to="/" replace />;
  }

  return children;
};

function App() {
  const [userName, setUserName] = useState("");

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Layout userName={userName} setUserName={setUserName} />}
        />
        <Route
          path="postdetail/:id"
          element={
            <ProtectedRoute>
              <PostDetail userName={userName} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/userinfo"
          element={
            <ProtectedRoute>
              <UserInfo userName={userName} />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
