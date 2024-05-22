import { FaGoogle } from "react-icons/fa6";
import UseAuth from "../../Hooks/UseAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const {googleLogin}=UseAuth();
    const axiosPublic=useAxiosPublic();
    const navigate=useNavigate()
    const handleGoogleLogin=()=>{
       googleLogin()
       .then(result=>{
        console.log(result.user)
        const userInfo={
            name: result.user?.displayName,
            email: result.user?.email
        }
        axiosPublic.post('/users', userInfo)
        .then(res=>{
            console.log(res.data)
            navigate("/")
        })
       })
    }
  return (
    <div>
      <div>
        <button onClick={handleGoogleLogin} className="text-orange-400">
        <FaGoogle></FaGoogle>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
