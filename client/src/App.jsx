import React, { useState } from 'react'; // ✅ Import useState
import Navbar from './pages/navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      document.documentElement.classList.toggle('dark', newMode); // ✅ Ensure class toggle is correct
      return newMode;
    });
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Login darkMode={darkMode} toggleDarkMode={toggleDarkMode} />}
        />
        <Route
          path="/signup"
          element={<Signup darkMode={darkMode} toggleDarkMode={toggleDarkMode} />}
        />
        <Route path="/navbar" element={<Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />

      </Routes>
    </Router>
  );
}

export default App;
