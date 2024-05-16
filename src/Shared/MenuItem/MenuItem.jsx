/* eslint-disable react/prop-types */

const MenuItem = ({item}) => {
   const {name,image,price,recipe}=item;
    return (
        <div className="flex space-x-4">
            <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[100px]" src={image} alt="" />
            <div>
                <p className="uppercase">{name} ------------</p>
                <p>{recipe}</p>
            </div>
            <p className="text-[#BB8506]">${price}</p>
            
        </div>
    );
};

export default MenuItem;