// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import myContext from "../../../context/data/myContext";

function AddProduct() {

  const context = useContext(myContext);
  const {products, setProducts, addProduct} = context;



  return (
    <div>
      <div className=" flex justify-center items-center h-screen">
        <div className=" bg-gray-800 px-10 py-10 rounded-xl ">
          <div className="">
            <h1 className="text-center text-white text-xl mb-4 font-bold">
              Add Product
            </h1>
          </div>
          <div>
            <input
              type="text"
              value={products.title}
              onChange={(e) => setProducts({...products, title: e.target.value})}
              name="title"
              className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Product title"
            />
          </div>
          <div>
            <input
              type="text"
              value={products.price}
              onChange={(e) => setProducts({...products, price: e.target.value})}
              name="price"
              className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Product price"
            />
          </div>
          <div>
            <input
              type="text"
              value={products.imageUrl}
              onChange={(e) => setProducts({...products, imageUrl: e.target.value})}
              name="imageurl"
              className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Product imageUrl"
            />
          </div>
          <div>
            <input
              type="text"
              value={products.category}
              onChange={(e) => setProducts({...products, category: e.target.value})}
              name="category"
              className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Product category"
            />
          </div>
          <div>
            <input
              name="description"
              value={products.description}
              onChange={(e) => setProducts({...products, description: e.target.value})}
              className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Product description"
            ></input>
          </div>
          <div>
            <input
              name="Xuất xứ"
              value={products.xuatXu}
              onChange={(e) => setProducts({...products, description: e.target.value})}
              className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Xuất xứ"
            ></input>
          </div>
          <div>
            <input
              name="Khối lượng"
              value={products.khoiLuong}
              onChange={(e) => setProducts({...products, description: e.target.value})}
              className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Khối lượng"
            ></input>
          </div>
          <div>
            <input
              name="Độ dày"
              value={products.doDay}
              onChange={(e) => setProducts({...products, description: e.target.value})}
              className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Độ dày"
            ></input>
          </div>
          <div>
            <input
              name="Chiều rộng"
              value={products.chieuRong}
              onChange={(e) => setProducts({...products, description: e.target.value})}
              className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Chiều rộng"
            ></input>
          </div>
          <div>
            <input
              name="Màu sắc"
              value={products.mauSac}
              onChange={(e) => setProducts({...products, description: e.target.value})}
              className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Màu sắc"
            ></input>
          </div>
          <div className=" flex justify-center mb-3">
            <button 
            onClick={addProduct}
            className=" bg-yellow-500 w-full text-black font-bold  px-2 py-2 rounded-lg">
              Add Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
