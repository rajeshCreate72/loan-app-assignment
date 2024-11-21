import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authUser } from "../api/users";
import { Button } from "@mui/material";

function ProtectedRoute({ children }) {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    //validate the token
    const validateUser = async () => {
        try {
            const response = await authUser();
            setUser(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleLogout = (event) => {
        event.preventDefault();
        localStorage.removeItem("token");
        navigate("/login");
    };

    const redirectToProfilePage = () => {
        navigate(`/user/${user._id}`);
    };

    //If token exist token will be validated by "getValidUser()"
    useEffect(() => {
        if (localStorage.getItem("token")) {
            validateUser();
        } else {
            navigate("/login");
        }
    }, []);

    return (
        <>
            <nav>
                <Button
                    variant="contained"
                    color="secondary"
                    sx={{ marginLeft: "5px", marginRight: "5px" }}
                    onClick={() => navigate("/")}
                >
                    Home
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    sx={{ marginLeft: "5px", marginRight: "5px" }}
                    onClick={redirectToProfilePage}
                >
                    Profile
                </Button>
                <Button
                    varient="contained"
                    sx={{ backgroundColor: "#D2122E", marginLeft: "5px", marginRight: "5px", color: "white" }}
                    onClick={handleLogout}
                >
                    Logout
                </Button>
            </nav>
            <div>{children}</div>
        </>
    );
}

export default ProtectedRoute;
