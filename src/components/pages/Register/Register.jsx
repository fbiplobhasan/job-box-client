import Lottie from "lottie-react";
import React, { useContext } from "react";
import lottieData from "../../../assets/Lottie/register.json";
import AuthContext from "../../../context/AuthContext/AuthContex";
import SocialLogin from "../../shared/SocialLogin";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const fname = form.fname.value;
    const lname = form.lname.value;
    const email = form.email.value;
    const password = form.password.value;
    const retypepassword = form.retypepassword.value;
    console.log(fname, lname, password, retypepassword);

    // if (password !== retypepassword) {
    //   alert("Passwords do not match!");
    //   return;
    // }

    // const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).+$/;
    // if (!passwordPattern.test(password)) {
    //   alert(
    //     "Password must have at least 1 uppercase, 1 lowercase, 1 number, and 1 special character."
    //   );
    //   return;
    // }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-2/4">
          <Lottie animationData={lottieData}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="ml-8 mt4 text-5xl font-bold">Register now!</h1>

          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">First Name</span>
              </label>
              <input
                type="text"
                name="fname"
                placeholder="First Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Last Name</span>
              </label>
              <input
                type="text"
                name="lname"
                placeholder="Last Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
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
                placeholder="Password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <span className="label-text">Retype Password</span>
              </label>
              <input
                type="password"
                name="retypepassword"
                placeholder="Retype password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6 space-y-4">
              <button className="btn btn-primary w-full">Register</button>
              <div className="divider">OR</div>
              <div className="flex justify-center">
                <SocialLogin>
                </SocialLogin>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
