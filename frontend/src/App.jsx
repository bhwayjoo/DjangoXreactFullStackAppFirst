// eslint-disable-next-line no-unused-vars
import react from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/Home";
import NoteFound from "./pages/NoteFound";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
function Logout() {
  localStorage.clear();
  return <Navigate to="/login" />;
}
function RegisterAndLogLogout() {
  localStorage.clear();
  return <Register />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<RegisterAndLogLogout />} />
        <Route path="*" element={<NoteFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
