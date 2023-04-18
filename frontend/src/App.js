import { Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import Profile from "./pages/profile"
import Login from "./pages/login"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  )
}

export default App
