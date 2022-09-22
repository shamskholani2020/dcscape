import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { config, base } from "../../axios";
const axios = require("axios");
export default function Prorducts() {
  const [products, setProducts] = useState([]);

  const getData = () => {
    axios.get(`${base}/products/admin/?name=`, config).then((res) => {
      console.log("Products Here");
      setProducts(res.data["docs"]);
    });
  };

  const deleteProduct = async (id) => {
    const res = await axios.delete(`${base}/products/admin/${id}`, config);
    if (res.data["message"] != null) {
      getData();
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="bg-gray-50 w-full h-full flex flex-col gap-5 justify-center items-start   p-5 md:p-20 ">
        {/* Header */}
        <div className="w-full bg-gray-200 h-20 rounded-md flex flex-row justify-between items-center px-4">
          <div className="flex flex-row items-center">
            <button
              className="
            px-4
            py-2
            bg-blue-100
            rounded-sm
            "
            >
              <Link to="/">Back</Link>
            </button>
            <div className="w-2"></div>
            <h1 className="text-lg font-meduim">Products</h1>
          </div>
          <button
            className="
            px-4
            py-2
            bg-blue-900
            rounded-md
            items-end
            text-white
            "
          >
            <Link to="/add-product">Add New Product</Link>
          </button>
        </div>

        {/* Products */}

        <div className="grid grid-cols-1 md:grid-cols-2  gap-10 w-full">
          {products.map((product) => (
            <ProductItem
              product={product}
              delete={() => {
                alert("You are deleting this product");
                deleteProduct(product["_id"]);
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}

const ProductItem = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="
            md:h-56
            font-semibold
             text-indigo-500 
             text-2xl 
             bg-white 
             rounded-2xl 
             shadow-sm  
             flex
             flex-col
             md:flex-row
             overflow-hidden
             text-ellipsis
            items-center
             "
      >
        <img
          className="
                    h-64
                    w-1/3
                    rounded-2xl
                    object-cover

                    "
          src={`${props.product["images"][0]}`}
          alt=""
        />

        <div className="flex flex-col items-start justify-start m-4">
          <h1
            className="
                        text-xl
                        text-black

                        "
          >
            {props.product["name"]}
          </h1>

          <p
            className="
                        text-sm
                        text-gray-400
                        mt-2
                        font-light
                        
                        "
          >
            {props.product["cate"]} - {props.product["designCate"]}
          </p>

          <div className="flex flex-row justify-around items-center text-center mt-5">
            {props.product["colors"].map((e) => (
              <div
                style={{
                  backgroundColor: `#${e}`,
                }}
                className={`w-7 h-7 rounded-lg mx-4`}
              ></div>
            ))}
            <div
              className={`w-7 h-7 rounded-lg mx-4 text-sm font-light text-gray-400`}
            >
              {props.product["sex"]}
            </div>
          </div>

          <div className="flex flex-row justify-between items-center w-full">
            <h1
              className="
                        text-xl
                        text-black
                        mt-5

                        "
            >
              {props.product["price"]} EGP
            </h1>
            <div
              className="
                        flex
                        flex-row
                        justify-around
                        items-center
                        "
            >
              <button
                onClick={() => {
                  navigate("/add-product", {
                    state: { product: props.product },
                  });
                }}
                className="py-2 px-4 bg-gray-500 rounded-md text-sm text-white m-2 font-light"
              >
                Edit
              </button>
              <button
                onClick={props.delete}
                className="py-2 px-4 bg-red-500 rounded-md text-sm text-white m-2 font-light"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
