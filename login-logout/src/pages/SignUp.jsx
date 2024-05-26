import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../config/firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: email,
          firstname: firstname,
          lastname: lastname,
        });
      }
      console.log("User Created Successfully ");
      toast.success("User Created Successfully !!", { position: "top-center"});
    } catch (error) {
      console.log(error.message);
      toast.error("User Already Registered", { position: "bottom-center"});
    }
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Sign Up</h1>
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
            type="text"
            placeholder="First Name"
            name="firstname"
            onChange={(e) => setFirstname(e.target.value)}
            required
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="Last Name"
            name="lastname"
            onChange={(e) => setLastname(e.target.value)}
          />
          <br />
          <br />
          <input
            placeholder="Email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br /> <br />
          <input
            placeholder="Password"
            name="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br /> <br />
          <button type="submit">Sign Up</button>
          <br /> <br />
          <Link to="/signin"></Link>
        </form>
      </div>
    </>
  );
};

export default SignUp;
