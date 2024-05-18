import { useState } from "react";
import Cover from "../../../Shared/Cover/Cover";
import useMenu from "../../../Hooks/UseMenu";
import orderCover from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
const Order = () => {
    const categories=['salad', 'pizza', 'dessert', 'soup', ]
    const {category}=useParams()
    const initialsIndex=categories.indexOf(category)
    const [tabIndex,setTabIndex]=useState(initialsIndex)
    const [menu]=useMenu();
    const desserts=menu.filter(item=> item.category==="dessert")
    const salads=menu.filter(item=> item.category==="salad")
    const soup=menu.filter(item=> item.category==="soup")
    const pizza=menu.filter(item=> item.category==="pizza")
    const drinks=menu.filter(item=> item.category==="drinks")
  return (
    <div>
        <Helmet>
                <title>
                    Bistro Boss/Order Food
                </title>
            </Helmet>
      <Cover img={orderCover} title="OUR SHOP"></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Dessert</Tab>
          <Tab>Soup</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel>
          <OrderTab items={salads}></OrderTab>
        </TabPanel>
        <TabPanel><OrderTab items={pizza}></OrderTab></TabPanel>
        <TabPanel><OrderTab items={desserts}></OrderTab></TabPanel>
        <TabPanel><OrderTab items={soup}></OrderTab></TabPanel>
        <TabPanel><OrderTab items={drinks}></OrderTab></TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
