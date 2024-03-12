// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import myContext from "../../context/data/myContext";
import {
  FormControl,
  RadioGroup,
  FormLabel,
  FormControlLabel,
  Radio,
} from "@mui/material";

function ProductCard() {
  const context = useContext(myContext);
  const { mode, product, searchkey, filterType, setFilterType } = context;
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-8 md:py-16 mx-auto ">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-10">
          <h1
            className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"
            style={{ color: mode === "dark" ? "white" : "" }}
          >
            Các dòng sản phẩm
          </h1>
          <div className="h-1 w-20 bg-pink-600 rounded"></div>
        </div>

        <div className="product_placement flex">
          {/* ô filter */}

          <div className="filter_button lg:w-1/4">
            <FormControl>
              <FormLabel
                style={{ color: mode === "dark" ? "white" : "" }}
                id="demo-controlled-radio-buttons-group"
              >
                Tìm kiếm nhanh:
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
              >
                <FormControlLabel
                  style={{ color: mode === "dark" ? "white" : "" }}
                  value="dây đai"
                  control={<Radio />}
                  label="Dây đai"
                />
                <FormControlLabel
                  style={{ color: mode === "dark" ? "white" : "" }}
                  value="pallet"
                  control={<Radio />}
                  label="Pallet"
                />
                <FormControlLabel
                  style={{ color: mode === "dark" ? "white" : "" }}
                  value="khác"
                  control={<Radio />}
                  label="Khác"
                />
              </RadioGroup>
            </FormControl>
          </div>

          {/* ô sản phẩm */}
          <div className="flex flex-wrap -m-4">
            {product
              .filter((obj) => obj.title.toLowerCase().includes(searchkey))
              .filter((obj) => obj.category.toLowerCase().includes(filterType))
              .map((item, index) => {
                const { title, price, imageUrl, id } = item;
                return (
                  <div
                    onClick={() =>
                      (window.location.href = `/productinfo/${id}`)
                    }
                    key={index}
                    className="p-4 md:w-1/4  drop-shadow-lg "
                  >
                    <div
                      className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-gray-200 border-opacity-60 rounded-2xl overflow-hidden"
                      style={{
                        backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                        color: mode === "dark" ? "white" : "",
                      }}
                    >
                      <div className="flex justify-center cursor-pointer">
                        <img
                          className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out"
                          src={imageUrl}
                          alt="blog"
                        />
                      </div>
                      <div className="p-5 border-t-2">
                        {/* <h2
                      className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      E-Bharat
                    </h2> */}
                        <h1
                          className="title-font text-lg font-medium text-gray-900 mb-3"
                          style={{ color: mode === "dark" ? "white" : "" }}
                        >
                          {title}
                        </h1>
                        {/* <p className="leading-relaxed mb-3">{item.description.}</p> */}
                        <p
                          className="leading-relaxed mb-3"
                          style={{ color: mode === "dark" ? "white" : "" }}
                        >
                          {price}
                        </p>
                        {/* <div className=" flex justify-center">
                      <button
                        type="button"
                        className="focus:outline-none text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2"
                      >
                        Add To Cart
                      </button>
                    </div> */}
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductCard;
