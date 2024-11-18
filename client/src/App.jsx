import { useState } from 'react'
import { ThemeProvider, CssBaseline, IconButton } from '@mui/material';
import {LightMode, DarkMode} from "@mui/icons-material"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lightTheme, darkTheme } from './themes/themes.jsx';
function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <CssBaseline />
      <div style={{ padding: '1rem' }}>
        <IconButton onClick={toggleTheme} color="inherit">
          {isDarkMode ? <LightMode /> : <DarkMode />}
        </IconButton>
      </div>
    </ThemeProvider>
  )
}

export default App
