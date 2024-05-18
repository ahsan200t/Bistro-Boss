import { useContext, useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";
const Login = () => {
    const [disable,setDisable]=useState(true)
    const {signIn}=useContext(AuthContext)
  const captchaRef = useRef();
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email,password)
    .then(result=>{
        const user=result.user;
        console.log(user)
    })
  };
  const handleValidateCaptcha = () => {
   const user_captcha_value=captchaRef.current.value;
  if(validateCaptcha(user_captcha_value)){
    setDisable(false)
  }else{
    setDisable(true)
  }
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content md:w-2/3 lg:flex">
        <div className="text-center">
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card md:w-2/3 max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl font-bold text-center my-10">Login now!</h1>
          <form onSubmit={handleLogin} className="card-body">
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
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input
                ref={captchaRef}
                type="text"
                name="captcha"
                placeholder="type the text above"
                className="input input-bordered"
                required
              />
              <button
                onClick={handleValidateCaptcha}
                className="btn btn-outline mt-2 btn-success btn-xs"
              >
                Validate
              </button>
            </div>
            <div className="form-control mt-6">
              <input disabled={disable} className="btn btn-primary" type="submit" value="Login" />
            </div>
          </form>
          <p className="text-center mb-3">New Here? <Link to='/signup'>Create an Account</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
