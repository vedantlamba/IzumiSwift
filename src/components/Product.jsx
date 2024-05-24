import { useEffect } from "react";
import { colorPallete1 } from "../constants/Index";
import data from "../constants/show-data-2.json";


const Product = () => {
  return (
    <div className="flex flex-col h-full justify-center items-center mb-14">
      <h1
        style={{ color: colorPallete1[0].sakura1 }}
        className="font-light text-5xl tracking-wide max-sm:text-center mb-16 text-center"
      >
        Products
      </h1>
      <div className="products flex flex-wrap justify-center items-center">
        {data.map((element, index) => (
          <ProductItem
            key={index}
            image={element.imageURL}
            name={element.name}
            price={element.price}
            price2={element.price2}
          />
        ))}
      </div>
    </div>
  );
};

const ProductItem = ({ image, name, price,price2 }) => {
  return (
    <div className="flex flex-col w-full  lg:w-72 lg:h-72 p-5 box-border mb-24 transition duration-500 hover:scale-110 max-sm:hover:scale-105 cursor-pointer">
      <img className="rounded-md mb-3" src={image} alt="" />
      <div className="card-content">
        <a className="text-xl text-neutral-400" href="#">
          {name}
        </a>
        <div className="flex">
          <h3 className="text-neutral-500 text-[1rem] line-through mr-3 decoration-black" style={{color: colorPallete1[0].sakura1}}>$
            {price2}
          </h3>
          <h3 className="text-[1rem]">${price}</h3>
        </div>
      </div>
    </div>
  );
};

export default Product;
