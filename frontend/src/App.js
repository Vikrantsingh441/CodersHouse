import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Navigation from "./components/shared/Navigation/Navigation";
import Authenticate from "./pages/Authenticate/Authenticate";
import Activate from "./pages/Activate/Activate";
import Rooms from "./pages/Rooms/Rooms";
const isAuth = false;
const user = {
  activated: false,
};
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="" element={<GuestRoute />}>
            <Route path="/" exact element={<Home />} />
            <Route path="/authenticate" element={<Authenticate />} />
          </Route>

          <Route path="" element={<SemiProtectedRoute />}>
            <Route path="/activate" element={<Activate />} />
          </Route>

          <Route path="" element={<ProtectedRoute />}>
            <Route path="/rooms" element={<Rooms />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const GuestRoute = () => {
  return isAuth ? <Navigate to="/rooms" replace /> : <Outlet />;
};

const SemiProtectedRoute = () => {
  return !isAuth ? (
    <Navigate to="/" replace />
  ) : isAuth && !user.activated ? (
    <Outlet />
  ) : (
    <Navigate to="/rooms" replace />
  );
};

const ProtectedRoute = () => {
  return !isAuth ? (
    <Navigate to="/" replace />
  ) : isAuth && !user.activated ? (
    <Navigate to="/activate" replace />
  ) : (
    <Outlet />
  );
};

export default App;
