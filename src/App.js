// import logo from './logo.svg';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        {/* <Route path="login" element={<Login />} /> */}
        {/* <Route path="register" element={<Register />} />
      <Route path="linkpage" element={<LinkPage />} />
      <Route path="unauthorized" element={<Unauthorized />} /> */}

        {/* catch all */}
        {/* <Route path="*" element={<Missing />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
