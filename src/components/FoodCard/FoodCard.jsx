import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


/* eslint-disable react/prop-types */
const FoodCard = ({item}) => {
    const {name,image,price,recipe, _id}=item;
    const {user}=useContext(AuthContext)
    const navigate=useNavigate();
    const location=useLocation();
    const axiosSecure=useAxiosSecure()

    const handleAddToCart=(food)=>{
      if(user && user.email){
        console.log(user.email, food)
        const cartItem={
          menuId: _id,
          email: user.email,
          name,
          image,
          price,
        }
        axiosSecure.post("/carts", cartItem)
        .then(res=>{
          console.log(res.data)
          if(res.data.insertedId){
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: `${name} Added to Your Cart`,
              showConfirmButton: false,
              timer: 1000
            });
          }
        })
      }else{
        Swal.fire({
          title: "You Are Not Logged In",
          text: "Please Login to Add to The cart",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, Login"
        }).then((result) => {
          if (result.isConfirmed) {
           navigate('/login', {state: {from: location}})
          }
        });
      }
    }
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          
        />
      </figure>
      <p className="bg-slate-900 text-white absolute right-0 mr-4 mt-4 px-2">${price}</p>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button onClick={()=> handleAddToCart(item)} className="btn bg-slate-100 text-[#D99904] btn-outline border-0 border-b-4">Add To Card</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
