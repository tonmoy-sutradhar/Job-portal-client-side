import React, { useContext } from "react";
import AuthContext from "../../Context/AuthContext";
import Lottie from "lottie-react";
import loginLottie from "../../assets/Lottie/login.json";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const SignIn = () => {
  const { signUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const path = location?.state || "/";

  const handleSignIn = (e) => {
    e.preventDefault();

    const from = e.target;
    const email = from.email.value;
    const password = from.password.value;

    // Password validation
    // const passwordRegex =
    //   /(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z@$!%*?&]{6,}/;

    signUser(email, password)
      .then((userCredential) => {
        const result = userCredential.user;
        console.log(result.email);
        const user = { email: email };

        axios.post("http://localhost:5000/jwt", user).then((res) => {
          console.log(res.data);
        });
        navigate(path);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });

    const registerData = {
      email,
      password,
    };
    console.log(registerData);
  };
  return (
    <div className="hero  min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-96">
          <Lottie animationData={loginLottie}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSignIn} className="card-body">
            <h1 className="text-5xl text-blue-500 font-bold">Login now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
