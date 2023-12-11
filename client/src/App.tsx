import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./_auth/AuthLayout";
import SignInForm from "./_auth/forms/SignInForm";
import SignUpForm from "./_auth/forms/SignUpForm";
import HomePage from "./_root/HomePage";
import ProfilePage from "./_root/ProfilePage";



function App() {
  

  return (
    <main className="flex h-screen">
    <BrowserRouter>
    <Routes>
      <Route element={<AuthLayout/>}>
      <Route path="/sign-in" element={<SignInForm/>}/>
      <Route path="/sing-up" element={<SignUpForm/>}/>
      </Route>
      <Route>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/profile/:userId" element={<ProfilePage/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </main>
  )
}

export default App;
