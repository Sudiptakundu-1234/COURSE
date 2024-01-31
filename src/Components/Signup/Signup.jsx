import React from "react";
import { useForm } from "react-hook-form";

function SignUp() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Do something with the form data
  };

  return (
    <>
      <h2>Sign Up Form</h2>
      <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <label>Email</label>
        <input
          type="email"
          name="email"
          ref={register({ required: "Email is required" })}
        />
        {errors.email && <p>{errors.email.message}</p>}

        <label>Password</label>
        <input
          type="password"
          name="password"
          ref={register({ required: "Password is required" })}
        />
        {errors.password && <p>{errors.password.message}</p>}

        <span>
          <input type="checkbox" name="remember" ref={register} />
          <label>Remember Me</label>
        </span>

        <button type="submit" className="btn">
          Sign Up
        </button>
      </form>
    </>
  );
}

export default SignUp;
