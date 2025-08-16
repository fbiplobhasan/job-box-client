import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContex";

const SocialLogin = () => {
  const { logInWithGoogle } = useContext(AuthContext);

  const handleGoogleLogin = () => {
    logInWithGoogle()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <button onClick={handleGoogleLogin} className="btn">
        Google
      </button>
    </div>
  );
};

export default SocialLogin;
