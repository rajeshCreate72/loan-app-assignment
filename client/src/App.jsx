import { useState } from "react";
import { ThemeProvider, CssBaseline, IconButton } from "@mui/material";
import { LightMode, DarkMode } from "@mui/icons-material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lightTheme, darkTheme } from "./themes/themes.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import RegisterPage from "./pages/RegisterPage/RegisterPage.jsx";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import ProfilePage from "./pages/ProfilePage/ProfilePage.jsx";

import "./App.css";

function App() {
    const [isDarkMode, setIsDarkMode] = useState(true);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <CssBaseline />
            <div className="theme-switcher">
                <IconButton onClick={toggleTheme} color="inherit">
                    {isDarkMode ? <LightMode /> : <DarkMode />}
                </IconButton>
            </div>
            <main>
                <Router>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <ProtectedRoute>
                                    <HomePage />
                                </ProtectedRoute>
                            }
                        ></Route>
                        <Route
                            path="/user/:id"
                            element={
                                <ProtectedRoute>
                                    <ProfilePage />
                                </ProtectedRoute>
                            }
                        ></Route>
                        <Route path="/register" element={<RegisterPage />}></Route>
                        <Route path="/login" element={<LoginPage />}></Route>
                    </Routes>
                </Router>
            </main>
        </ThemeProvider>
    );
}

export default App;
