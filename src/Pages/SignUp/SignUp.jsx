import { useContext } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const SignUp = () => {
  const axiosPublic=useAxiosPublic();
    const {createUser, updateUserProfile}=useContext(AuthContext)
    const navigate=useNavigate()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  
  const onSubmit = (data) => {
    createUser(data.email, data.password)
    .then(result=>{
        const loggedUser=result.user
        console.log(loggedUser);
        updateUserProfile(data.name, data.photoURL)
        .then(()=>{
          const userInfo={
            name: data.name,
            email: data.email
          }
          axiosPublic.post('/users',userInfo)
          .then(res=>{
            if(res.data.insertedId){
              reset()
              Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Account Created Successfully",
                showConfirmButton: false,
                timer: 1500
              });
              navigate('/')
            }
          })
          
            })
        .catch(error=>{
          console.log(error)
        })
    })
    
  };
  return (
    <>
      <Helmet>
        <title>Bistro Boss/Sign Up</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl font-bold text-center my-16">Sign Up now!</h1>
            <div className="divider">Sign Up With</div>
            <div className="text-center"><SocialLogin></SocialLogin></div>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoURL</span>
                </label>
                <input
                  type="text"
                  placeholder="PhotoURL"
                  className="input input-bordered"
                  {...register("PhotoURL", { required: true })}
                />
                {errors.name && (
                  <span className="text-red-600">PhotoURL is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 15,
                    pattern: /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <span className="text-red-600">Password is Required</span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-red-600">
                    Password Must Be 6 Characters
                  </span>
                )}
                {errors.password?.type === "maxLength" && (
                  <span className="text-red-600">
                    Password Must Be less then 15 Characters
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-red-600">
                    Password Must Be One UpperCase One LowerCase One Number and
                    One Special Characters
                  </span>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <p className="text-center mb-3">New Here?Please | <Link className="text-orange-400" to='/login'>Sign In</Link></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
