import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Repodisplaypages from "../pages/Repodisplaypages";
import Error404page from "../pages/Error404page";
import Errorboundarypage from "../pages/Errorboundarypage";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/errorboundary" element={<Errorboundarypage />} />
        <Route path="/repos/:name" element={<Repodisplaypages />} />
        <Route path="*" element={<Error404page />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
