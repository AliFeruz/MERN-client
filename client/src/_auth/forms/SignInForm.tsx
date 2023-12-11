import React from 'react'

const SignInForm = () => {
  const login = async (values, onSubmitProps) => {
    const loggedInResponse = await fetch(
        "http://localhost:8080/auth/login",
        {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(values),
        }
    );
    const loggedIn = await loggedInResponse.json();
    onSubmitProps.resetForm();
    if (loggedIn) {
        dispatch(
            setLogin({
                user: loggedIn.user,
                token: loggedIn.token,
            })
        );
        navigate("/")
    }
};
  return (
    <div>
      SignInForm
    </div>
  )
}

export default SignInForm
