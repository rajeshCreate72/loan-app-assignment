import React, { useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";
import Alert from "@mui/material/Alert";
import moment from "moment";

import "./main.css";

function HomePage() {
    const [amount, setAmount] = useState(0);
    const [term, setTerm] = useState(1);
    const [date, setDate] = useState(moment().format("DD-MM-YYYY"));
    const [error, setError] = useState("");

    const handleClick = () => {
        if (amount <= 0) {
            setError("Set correct amount");
        } else if (date < moment().format("DD-MM-YYYY") || date === "") {
            setError("Set Correct date");
        } else if (term <= 0) {
            setError("Set correct term");
        } else {
            setError("");
        }
    };

    return (
        <div className="loan-form">
            <div className="loan-form-sub">
                <form
                    sx={{
                        color: "secondary.main",
                    }}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "start",
                        alignItems: "start",
                    }}
                >
                    <h3>Enter the loan details</h3>
                    <label
                        htmlFor="amount"
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            margin: "10px",
                        }}
                    >
                        Enter the amount:{" "}
                        <span>
                            <TextField
                                fullWidth
                                value={amount}
                                onChange={(e) => {
                                    const wholenumber = parseInt(e.target.value, 10);
                                    setAmount(wholenumber || 0);
                                }}
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
                                id="amount"
                                type="number"
                                label="Amount"
                                variant="outlined"
                                inputProps={{
                                    min: 0,
                                }}
                            ></TextField>
                        </span>
                    </label>
                    <label
                        htmlFor="term"
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            margin: "10px",
                        }}
                    >
                        Enter the term:{" "}
                        <span>
                            <TextField
                                fullWidth
                                value={term}
                                onChange={(e) => setTerm(e.target.value)}
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
                                id="term"
                                type="number"
                                label="Term"
                                variant="outlined"
                                inputProps={{
                                    min: 1,
                                }}
                            ></TextField>
                        </span>
                    </label>
                    <label
                        htmlFor="date"
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            margin: "10px",
                        }}
                    >
                        Enter the date:{" "}
                        <span>
                            <TextField
                                fullWidth
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                sx={{
                                    "& .MuiInputLabel-root": {
                                        color: "secondary.main", // Default label color
                                    },
                                    "& .MuiInputLabel-root.Mui-focused": {
                                        color: "white", // Label color when focused
                                    },
                                    "& .MuiInputBase-root input[type='date']::-webkit-calendar-picker-indicator": {
                                        backgroundColor: "#007BFF", // Calendar icon background color
                                        color: "white", // Change icon color
                                    },
                                    marginTop: "2rem",
                                    marginBottom: "2rem",
                                    marginLeft: "1rem",
                                }}
                                id="date"
                                type="date"
                                variant="outlined"
                                inputProps={{
                                    min: moment().format("YYYY-MM-DD"),
                                }}
                            ></TextField>
                        </span>
                    </label>
                </form>
            </div>
            <div className="loan-details">
                <h2>Amount : {"$" + " " + amount}</h2>
                <h2>Term: {term}</h2>
                <h2>Date: {date}</h2>
                <Button
                    variant="contained"
                    color="secondary"
                    sx={{ width: "200px", height: "50px" }}
                    onClick={handleClick}
                >
                    Get Loan
                </Button>
                {error && (
                    <Alert severity="info" id="info">
                        {error}
                    </Alert>
                )}
            </div>
        </div>
    );
}

export default HomePage;
