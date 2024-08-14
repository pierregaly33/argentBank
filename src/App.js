import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import User from "./pages/User";
import { useSelector } from "react-redux";

function App() {
    const isAuth = useSelector((state) => state.auth.isAuth);
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/login" element={<Login />} />
                {!isAuth ? (
                    <Route path="/*" element={<Navigate to="/login" />} />
                ) : (
                    <Route path="/profile" element={<User />} />
                )}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
