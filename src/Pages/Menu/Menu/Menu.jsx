import { Helmet } from "react-helmet-async";
import Cover from "../../../Shared/Cover/Cover";
import saladImg from '../../../assets/menu/salad-bg.jpg'
import menuImg from '../../../assets/menu/banner3.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import useMenu from "../../../Hooks/UseMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
    const [menu]=useMenu()
    const desserts=menu.filter(item=> item.category==="dessert")
    const salads=menu.filter(item=> item.category==="salad")
    const soup=menu.filter(item=> item.category==="soup")
    const pizza=menu.filter(item=> item.category==="pizza")
    const offered=menu.filter(item=> item.category==="offered")
   
    return (
        <div>
            <Helmet>
                <title>
                    Bistro Boss/Menu
                </title>
            </Helmet>
            <Cover img={menuImg} title="Our Menu"></Cover>
            <SectionTitle 
            subHeading="Don't Miss"
            heading="Today's offer"
            ></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>
            <MenuCategory
            items={desserts}
            title="dessert"
            img={dessertImg}
            ></MenuCategory>
            <MenuCategory
            items={pizza}
            title="pizza"
            img={pizzaImg}
            ></MenuCategory>
            <MenuCategory
            items={salads}
            title="salads"
            img={saladImg}
            ></MenuCategory>
            <MenuCategory
            items={soup}
            title="soup"
            img={soupImg}
            ></MenuCategory>
           
        </div>
    );
};

export default Menu;