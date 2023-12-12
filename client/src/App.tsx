import { Route, Routes } from "react-router-dom";
import SignInFrom from "./pages/_auth/SignInFrom";
import SignUpForm from "./pages/_auth/SignUpForm";
import HomePage from "./pages/_root/HomePage";
import ProfilePage from "./pages/_root/ProfilePage";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <main className="flex h-scren">
      <Routes>
        <Route path="/sign-in" element={<SignInFrom/>}/>
        <Route path="/sign-up" element={<SignUpForm/>}/>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/profile/:id" element={<ProfilePage/>}/>
      </Routes>
      <Toaster/>
    </main>
  )
}

export default App;
