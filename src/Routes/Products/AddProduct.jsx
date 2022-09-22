import React, { useState, useEffect } from "react";
import { config, base } from "../../axios";
import { useNavigate } from "react-router";
import { useLocation } from "react-router";

import axios from "axios";
const AddProduct = () => {
  const location = useLocation();
  const model = location.state === null ? "" : location.state.product;

  const [sex, setSex] = useState("Men");
  const [colors, setColors] = useState();
  const [sizes, setSizes] = useState();
  var [res, setRes] = useState();

  const getCollections = () => {
    axios
      .get(`${base}/collection/admin`, config)
      .then((value) => {
        if (value.data.message === "Fetched Successfully") {
          var e = JSON.stringify(value.data["docs"][0]);

          setRes(JSON.parse(e));

          for (let i = 0; i < e.length; i++) {
            console.log("This is men");
            console.log(e["men"][i]["title"]);
          }
        }
      })
      .catch((err) => console.log(err));
    if (res != null) {
      console.log(res[sex.toLowerCase()]);
    }
  };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    var body = {
      name: e.target[0].value,
      nameAr: e.target[1].value,
      description: e.target[2].value,
      descriptionAr: e.target[3].value,
      price: e.target[4].value,
      images: [
        e.target[5].value,
        e.target[6].value,
        e.target[7].value,
        e.target[8].value,
      ],
      sex: sex.toLowerCase(),
      cate: e.target[10].value,
      cateAr: e.target[11].value,
      subcate: "",
      subcateAr: "",
      designCate: e.target[12].value,
      designCateAr: e.target[13].value,
      colors: colors,
      sizes: sizes,
      bgColor: e.target[6].value,
      quantity: e.target[17].value,
      keywords: [],
    };

    axios.post(`${base}/products/admin`, body, config).then((value) => {
      console.log(value.data);

      navigate("/products");
    });
  };
  const handleUpdate = (e) => {
    e.preventDefault();

    var body = {
      name: e.target[0].value,
      nameAr: e.target[1].value,
      description: e.target[2].value,
      descriptionAr: e.target[3].value,
      price: e.target[4].value,
      images: [
        e.target[5].value,
        e.target[6].value,
        e.target[7].value,
        e.target[8].value,
      ],
      sex: sex.toLowerCase(),
      cate: e.target[10].value,
      cateAr: e.target[11].value,
      subcate: "",
      subcateAr: "",
      designCate: e.target[12].value,
      designCateAr: e.target[13].value,
      colors: colors,
      sizes: sizes,
      bgColor: e.target[6].value,
      quantity: e.target[17].value,
      keywords: [],
    };

    axios
      .put(`${base}/products/admin/${model._id}`, body, config)
      .then((value) => {
        console.log(value.data);

        navigate("/products");
      });
  };

  useEffect(() => {
    getCollections();
  }, []);

  return (
    <form onSubmit={(e) => (model == "" ? handleSubmit(e) : handleUpdate(e))}>
      <div className="w-full bg-gradient-to-b from-indigo-900 to-indigo-500 flex justify-center items-center px-5">
        <div
          className="
            my-32
            w-full
            lg:w-1/2
            md:w-3/4
            p-2
            md:p-4
            rounded-md
            shadow-sm
            bg-white
            text-black
            flex
            flex-col
            justify-around
            items-start
            "
        >
          <h1 className="text-lg">Add New Product</h1>

          <p className="text-gray-400 font-light">this is temp</p>
          <div className="mt-1"></div>

          <TextField
            placeholder="Name"
            id="name"
            name="name"
            defaultValue={model.name}
          />
          <TextField
            placeholder="NameAr"
            id="nameAr"
            defaultValue={model.nameAr}
            name="nameAr"
          />
          <TextField
            placeholder="Description"
            id="description"
            name="description"
            defaultValue={model.description}
          />
          <TextField
            placeholder="DescriptionAr"
            id="descriptionAr"
            name="descriptionAr"
            defaultValue={model.descriptionAr}
          />
          <TextField
            placeholder="Price"
            id="price"
            type="number"
            name="price"
            defaultValue={model.price}
          />
          <h1 className="text-md mt-5">Images URL</h1>
          <div className="flex mt-5 md:flex-row flex-col justify-center items-center w-full gap-2">
            <div className="flex w-full flex-col gap-2">
              {model != "" ? (
                <img
                  className=" object-cover w-full h-52 rounded-lg"
                  src={model.images[0]}
                  alt=""
                />
              ) : null}
              <TextField
                placeholder="image"
                id="image"
                type="url"
                name="image-1"
                defaultValue={model.images != null ? model.images[0] : ""}
              />
            </div>
            <div className="flex w-full flex-col gap-2">
              {model != "" ? (
                <img
                  className=" object-cover w-full h-52 rounded-lg"
                  src={model.images[1]}
                  alt=""
                />
              ) : null}
              <TextField
                placeholder="image"
                id="image"
                type="url"
                name="image-2"
                defaultValue={model.images != null ? model.images[1] : ""}
              />
            </div>
            <div className="flex w-full flex-col gap-2">
              {model != "" ? (
                <img
                  className=" object-cover w-full h-52 rounded-lg"
                  src={model.images[2]}
                  alt=""
                />
              ) : null}
              <TextField
                placeholder="image"
                id="image"
                type="url"
                name="image-3"
                defaultValue={model.images != null ? model.images[2] : ""}
              />
            </div>
            <div className="flex w-full flex-col gap-2">
              {model != "" ? (
                <img
                  className=" object-cover w-full h-52 rounded-lg"
                  src={model.images[3]}
                  alt=""
                />
              ) : null}
              <TextField
                placeholder="image"
                id="image"
                type="url"
                name="image-4"
                defaultValue={model.images != null ? model.images[3] : ""}
              />
            </div>
          </div>

          <Dropdown
            children={["Men", "Women", "Kids", "Babies"]}
            name="sex"
            defaultValue={model.sex}
            placeholder="sex"
            onChange={(v) => {
              setSex(v.target.value);
              if (res != null) {
              }
            }}
          />

          <div className="flex flex-col md:flex-row justify-center items-center gap-5 w-full">
            {/* Men Category */}

            {sex === "Men" ? (
              <Dropdown
                defaultValue={model.cate}
                children={[
                  "BASICS",
                  "SUITS",
                  "SHIRTS",
                  "T-SHIRTS",
                  "POLO SHIRTS",
                  "TROUSERS",
                  "JEANS",
                  "JACKETS",
                  "HOODIES I SWEATSHIRTS",
                  "KNITWEAR",
                  "OVERSHIRTS",
                  "BLAZERS",
                  "GILETS",
                  "SHOES",
                  "BAGS I BACKPACKS",
                  "ACCESSORIES",
                ]}
                placeholder="category"
                name="cate"
              />
            ) : null}
            {sex === "Men" ? (
              <Dropdown
                defaultValue={model.cateAr}
                children={[
                  "بيزك",
                  "بدل",
                  "قمصان",
                  "تي-شيرت",
                  "تيشرت بولو",
                  "بنطلون",
                  "جينز",
                  "جاكيت",
                  "سويت شيرت و هوديز",
                  "تريكو",
                  "اغطية",
                  "بليزر",
                  "سترات",
                  "احذية",
                  "شنط",
                  "اكسسورات",
                ]}
                placeholder="categoryAr"
                name="cateAr"
              />
            ) : null}
            {/* Women */}
            {sex === "Women" ? (
              <Dropdown
                defaultValue={model.cate}
                children={[
                  "BASICS",
                  "COATS | TRENCH COATS",
                  "PUFFER JACKETS",
                  "BLAZERS",
                  "JACKETS | OVERSHIRTS",
                  "WAISTCOATS | GILETS",
                  "DRESSES | JUMPSUITS",
                  "SHIRTS",
                  "T-SHIRTS",
                  "TOPS",
                  "KNITWEAR",
                  "JEANS",
                  "TROUSERS",
                  "SKIRTS",
                  "SHORTS | SKORTS",
                  "SWEATSHIRTS",
                  "SUITS",
                  "SHOES",
                  "BAGS",
                  "ACCESSORIES",
                  "BEAUTY",
                ]}
                placeholder="category"
                name="cate"
              />
            ) : null}
            {sex === "Women" ? (
              <Dropdown
                defaultValue={model.cateAr}
                children={[
                  "بيزك",
                  "معاطف | معطف واقي من المطر",
                  "جاكيتات ريش",
                  "تي-شيرت",
                  "بليزر",
                  "جاكيتات | الأغطية",
                  "فيسترات | جيليت",
                  "فساتين | جمبسوت",
                  "قمصان",
                  "تي-شيرت",
                  "توبس",
                  "تريكو",
                  "جينز",
                  "بنطلون",
                  "التنانير",
                  "شورتات | سكورتس",
                  "البدل",
                  "الاحذية",
                  "الشنط",
                  "الاكسسورات",
                  "الجمال",
                ]}
                placeholder="categoryAr"
                name="cateAr"
              />
            ) : null}

            {/*Kids */}

            {sex === "Kids" ? (
              <Dropdown
                defaultValue={model.cate}
                children={[
                  "BASICS",
                  "SUITS",
                  "SHIRTS",
                  "T-SHIRTS",
                  "TROUSERS",
                  "JEANS",
                  "JACKETS",
                  "GILETS",
                  "SHOES",
                  "BAGS I BACKPACKS",
                  "ACCESSORIES",
                ]}
                placeholder="category"
                name="cate"
              />
            ) : null}
            {sex === "Kids" ? (
              <Dropdown
                defaultValue={model.cateAr}
                children={[
                  "بيزك",
                  "بدل",
                  "قمصان",
                  "تي-شيرت",
                  "بنطلون",
                  "جينز",
                  "جاكيت",
                  "سترات",
                  "احذية",
                  "شنط",
                  "اكسسورات",
                ]}
                placeholder="categoryAr"
                name="cateAr"
              />
            ) : null}

            {/*Babies */}

            {sex === "Babies" ? (
              <Dropdown
                defaultValue={model.cate}
                children={[
                  "BASICS",
                  "SUITS",
                  "SHIRTS",
                  "T-SHIRTS",
                  "TROUSERS",
                  "JEANS",
                  "JACKETS",
                  "GILETS",
                  "SHOES",
                  "BAGS I BACKPACKS",
                  "ACCESSORIES",
                ]}
                placeholder="category"
                name="cate"
              />
            ) : null}
            {sex === "Babies" ? (
              <Dropdown
                defaultValue={model.cateAr}
                children={[
                  "بيزك",
                  "بدل",
                  "قمصان",
                  "تي-شيرت",
                  "بنطلون",
                  "جينز",
                  "جاكيت",
                  "سترات",
                  "احذية",
                  "شنط",
                  "اكسسورات",
                ]}
                placeholder="categoryAr"
                name="cateAr"
              />
            ) : null}

            {res != null ? (
              <Dropdown
                defaultValue={model.designCate}
                title={res[sex.toLowerCase()]}
                placeholder="designCate"
                name="designCate"
              />
            ) : null}

            {res != null ? (
              <Dropdown
                defaultValue={model.designCateAr}
                titleAr={res[sex.toLowerCase()]}
                placeholder="designCateAr"
                name="designCateAr"
              />
            ) : null}
          </div>
          <Dropdown
            defaultValue={model.colors}
            colors={[
              { title: "White", value: "FFFFFF" },
              { title: "Black", value: "000000" },
              { title: "Gray", value: "888889" },
              { title: "Yellow", value: "F8f9f0" },
              { title: "Red", value: "12ee23" },
            ]}
            isColors={true}
            placeholder="colors"
            name="colors"
            multiple
            onChange={(e) => {
              var options = e.target.options;
              var value = [];
              for (var i = 0, l = options.length; i < l; i++) {
                if (options[i].selected) {
                  value.push(options[i].value);
                }
              }
              setColors(value);
            }}
          />
          <Dropdown
            defaultValue={model.sizes}
            children={[
              "Small",
              "Medium",
              "Large",
              "X-Large",
              "2X",
              "3X",
              "4X",
              "5X",
              "6X",
            ]}
            placeholder="sizes"
            name="sizes"
            multiple
            onChange={(e) => {
              var options = e.target.options;
              var value = [];
              for (var i = 0, l = options.length; i < l; i++) {
                if (options[i].selected) {
                  value.push(options[i].value);
                }
              }
              setSizes(value);
            }}
          />
          <TextField
            defaultValue={model.bgColor}
            placeholder="bgColor"
            id="bgColor"
            type="color"
            name="bgColor"
            multiple
          />
          <TextField
            defaultValue={model.quantity}
            placeholder="Quantity"
            id="quantity"
            type="number"
            name="quantity"
          />

          <input
            type="submit"
            className="w-full h-12 mt-5 bg-indigo-600 text-white rounded-md shadow-sm"
            value="Save"
          />
          <button
            className="
          w-full
          h-12
          bg-gray-200
          text-gray-500
          mt-2

          "
            onClick={() => {
              navigate("/");
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddProduct;
const TextField = (props) => {
  return (
    <>
      <input
        defaultValue={props.defaultValue}
        type={`${props.type}`}
        required
        className="
                w-full
                h-12
                mt-5
                bg-gray-100
                px-2
                "
        id={`${props.id}`}
        placeholder={`${props.placeholder}`}
        name={props.name}
      />
    </>
  );
};

const Dropdown = (props) => {
  var titles = [];
  var titlesAr = [];
  if (props.title != null) {
    props.title.forEach((e) => {
      titles.push(e["title"]);
    });
  }
  if (props.titleAr != null) {
    props.titleAr.forEach((e) => {
      titlesAr.push(e["titleAr"]);
    });
  }
  return (
    <>
      <select
        defaultValue={props.defaultValue}
        required
        name={props.name}
        id={props.id}
        onChange={props.onChange}
        multiple={props.multiple}
        placeholder={props.placeholder}
        className={`
                w-full
                ${props.multiple ? "h-32" : "h-12"} 
                mt-5
                bg-gray-100
                px-2
                `}
      >
        {props.title != null
          ? titles.map((e) => <option>{e}</option>)
          : props.titleAr != null
          ? titlesAr.map((e) => <option>{e}</option>)
          : props.isColors
          ? props.colors.map((e) => (
              <option value={e["value"]}>{e["title"]}</option>
            ))
          : props.children.map((e) => <option>{e}</option>)}
      </select>
    </>
  );
};
