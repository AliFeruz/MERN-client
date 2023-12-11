import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./scenes/homePage";
import LoginPage from "./scenes/loginPage";
import ProfilePage from "./scenes/profilePage";


function App() {
  

  return (
    <main className="app">
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<LoginPage/>}/>
    <Route path="/home" element={<HomePage/>}/>
    <Route path="/profile/:userId" element={<ProfilePage/>}/>
    </Routes>
    </BrowserRouter>
    </main>
  )
}

export default App
