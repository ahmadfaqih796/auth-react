// import logo from './logo.svg';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import PrivateRoute from "./middleware";
import Home from "./pages/user/Home";
import Login from "./pages/auth/Login";
import Missing from "./pages/Missing";
import LinkPage from "./pages/LinkPage";
import Unauthorized from "./pages/Unautorized";
import Editor from "./pages/landing/Editor";
import Lounge from "./pages/landing/Lounge";
import Admin from "./pages/admin/Admin";

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
        {/* <Route path="register" element={<Register />} /> */}
        <Route path="linkpage" element={<LinkPage />} />
        <Route path="unauthorized" element={<Unauthorized />} />

        <Route
          element={
            <PrivateRoute
              allowedRoles={[ROLES.User, ROLES.Admin, ROLES.Editor]}
            />
          }
        >
          <Route path="/" element={<Home />} />
        </Route>

        <Route element={<PrivateRoute allowedRoles={[ROLES.Editor]} />}>
          <Route path="editor" element={<Editor />} />
        </Route>

        <Route element={<PrivateRoute allowedRoles={[ROLES.Admin]} />}>
          <Route path="admin" element={<Admin />} />
        </Route>

        <Route
          element={<PrivateRoute allowedRoles={[ROLES.Editor, ROLES.Admin]} />}
        >
          <Route path="lounge" element={<Lounge />} />
        </Route>

        {/* catch all */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
