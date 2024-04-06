// import logo from './logo.svg';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import PrivateRoute from "./middleware";
import Home from "./pages/user/Home";
import Login from "./pages/auth/Login";

const ROLES = {
  User: 2001,
  Editor: 1984,
  Admin: 5150,
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="login" element={<Login />} />
        {/* <Route path="register" element={<Register />} />
      <Route path="linkpage" element={<LinkPage />} />
      <Route path="unauthorized" element={<Unauthorized />} /> */}

        <Route element={<PrivateRoute allowedRoles={[ROLES.User]} />}>
          <Route path="/" element={<Home />} />
        </Route>

        {/* catch all */}
        {/* <Route path="*" element={<Missing />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
