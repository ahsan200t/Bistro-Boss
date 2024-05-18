/* eslint-disable react/prop-types */
const FoodCard = ({item}) => {
    const {name,image,price,recipe}=item;
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
          <button className="btn bg-slate-100 text-[#D99904] btn-outline border-0 border-b-4">Add To Card</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
