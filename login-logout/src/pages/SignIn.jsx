import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { auth } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log( "User Logged In Successfully")
      navigate("/home");
      toast.success("User Logged In Successfully !!", { position: "top-center"});
    } catch (error) {
      console.log(error.message);
      toast.error("Invalid Credentials", { position: "bottom-center" });
    }
  }; 

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Sign In</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          width: "100vw",
        }}
      >
        <form action="" style={{ textAlign: "center" }} onSubmit={handleSubmit}>
          <input
            placeholder="Email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br /> <br />
          <input
            placeholder="Password"
            name="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br /> <br />
          <button onClick={handleSubmit} type="submit">
            Sign In
          </button>
          <br /> <br />
          {/* Add a link to SignUp page */}
          <Link to="/signup">Don't have an account? Sign Up</Link>
        </form>
      </div>
    </>
  );
};

export default SignIn;
