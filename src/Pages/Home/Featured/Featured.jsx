import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './featured.css'
const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-16">
            <div>
            <SectionTitle
            subHeading="Check it out"
            heading="FEATURED ITEM"
            ></SectionTitle>
            </div>
            <div className="md:flex justify-center bg-slate-400 opacity-40 items-center gap-6 px-36 pb-20 pt-12">
               <div>
               <img src={featuredImg} alt="" />
               </div>
               <div className="">
                <p>May 20, 2024</p>
                <p className="uppercase">where can i get some?</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum ad labore ipsa incidunt quos facilis molestias nemo deserunt aliquam reiciendis.</p>
                <button className="btn btn-outline border-0 border-b-4">Order Now</button>
               </div>
            </div>
        </div>
    );
};

export default Featured;