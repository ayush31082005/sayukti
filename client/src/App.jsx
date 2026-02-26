import { useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainRoutes from "./routes/MainRoutes";

const App = () => {
  const location = useLocation();

  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && <Header />}
      <MainRoutes />
      {!isAdminRoute && <Footer />}
    </>
  );
};

export default App;