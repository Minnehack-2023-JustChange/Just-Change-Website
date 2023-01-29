import Layout from "./components/layout/Layout";
import { Routes, Route } from "react-router-dom";
import AccountPage from "./pages/account-page/account";
import HomePage from "./pages/home-page/home";


function App() {
  return (<Layout>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/account" element={<AccountPage />} />
      </Routes>
      </Layout>
  );
}

export default App;
