import "./App.css";
import FullCase from "./components/FullCase";
import FullOfficer from "./components/FullOfficer";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Messages from "./pages/Messages";
import Officers from "./pages/Officers";
import Register from "./pages/Register";
import Steal from "./pages/Steal";
import "./scss/style.scss";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" index element={<Main />} />
      <Route
        path="/cases"
        element={
          <ProtectedRoute>
            <Messages />
          </ProtectedRoute>
        }
      />
      <Route
        path="/officers"
        element={
          <ProtectedRoute>
            <Officers />
          </ProtectedRoute>
        }
      />
      <Route
        path="/officers/:id"
        element={
          <ProtectedRoute>
            <FullOfficer />
          </ProtectedRoute>
        }
      />
      <Route
        path="/cases/:id"
        element={
          <ProtectedRoute>
            <FullCase />
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/steal" element={<Steal />} />

      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
