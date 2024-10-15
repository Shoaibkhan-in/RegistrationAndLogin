import { BrowserRouter, Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import Register from "./Register"
import Login from "./Login"
import Home from "./Home"
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/home" element={<Home />}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App