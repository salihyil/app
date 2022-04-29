import { Routes, Route, Navigate } from "react-router-dom";

import { Layout, UserInfo, PostDetail } from "./pages";

const NoMatch = () => {
  return <p>There's nothing here: 404!</p>;
};

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("userEmail");

  if (!token) {
    return <Navigate to="/" replace />;
  }

  return children;
};

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route
          path="/postdetail/:id"
          element={
            <ProtectedRoute>
              <PostDetail />
            </ProtectedRoute>
          }
        />
        <Route
          path="/userinfo"
          element={
            <ProtectedRoute>
              <UserInfo />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
