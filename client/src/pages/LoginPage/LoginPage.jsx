import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { loginUser } from "../../api/users";
import { Message } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function LognPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const values = { email, password };
            const response = await loginUser(values);

            if (response.success) {
                localStorage.setItem("token", response.token);
                window.location.href = "/";
            } else {
                navigate("/login");
            }
        } catch (error) {
            Message.error(error);
        }
    };

    return (
        <div>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="email">
                    Enter email:
                    <span>
                        <TextField
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            sx={{
                                "& .MuiInputLabel-root": {
                                    color: "secondary.main", // Default label color
                                },
                                "& .MuiInputLabel-root.Mui-focused": {
                                    color: "secondary.main", // Label color when focused
                                },
                                marginTop: "2rem",
                                marginBottom: "2rem",
                                marginLeft: "1rem",
                            }}
                            id="email"
                            type="text"
                            label="Email"
                            variant="outlined"
                        ></TextField>
                    </span>
                </label>
                <label htmlFor="password">
                    Enter password:
                    <span>
                        <TextField
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            sx={{
                                "& .MuiInputLabel-root": {
                                    color: "secondary.main", // Default label color
                                },
                                "& .MuiInputLabel-root.Mui-focused": {
                                    color: "secondary.main", // Label color when focused
                                },
                                marginTop: "2rem",
                                marginBottom: "2rem",
                                marginLeft: "1rem",
                            }}
                            id="password"
                            type="password"
                            label="Password"
                            variant="outlined"
                        ></TextField>
                    </span>
                </label>
                <Button type="submit" variant="contained" color="secondary" sx={{ width: "200px", height: "50px" }}>
                    Login
                </Button>
            </form>
        </div>
    );
}

export default LognPage;
