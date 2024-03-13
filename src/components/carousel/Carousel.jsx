// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import Slider from "react-slick";
import myContext from "../../context/data/myContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel() {
  const context = useContext(myContext);
  const { mode } = context;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    <div className="container px-5 py-8 md:py-16 mx-auto">

        {/* Dây Đai */}
      <div className="lg:w-1/2 w-full mb-2 lg:mb-10 mt-5">
        <h1
          className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"
          style={{ color: mode === "dark" ? "white" : "" }}
        >
          Dòng sản phẩm: Dây Đai
        </h1>
        <div className="h-1 w-20 bg-pink-600 rounded"></div>
      </div>
      <Slider {...settings} className="">
        {/* item_1 */}
        <div>
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
                src="https://www.daydaidonggoi.vn/wp-content/uploads/2022/03/day-dai-pp.png"
                alt="dây đai"
              />
            </div>
            <div className="p-5 border-t-2">
              <h1
                className="title-font text-center text-lg font-medium text-gray-900 mb-3"
                style={{ color: mode === "dark" ? "white" : "" }}
              >
                Dây đai nhựa PP
              </h1>
            </div>
          </div>
        </div>
        {/* item_2 */}
        <div>
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
                src="https://vattudonghang.com/wp-content/uploads/2022/09/day-dai-nhua-pet-16mm.jpg"
                alt="dây đai"
              />
            </div>
            <div className="p-5 border-t-2">
              <h1
                className="title-font text-center text-lg font-medium text-gray-900 mb-3"
                style={{ color: mode === "dark" ? "white" : "" }}
              >
                Dây đai PET CARO
              </h1>
            </div>
          </div>
        </div>
        {/* item_3 */}
        <div>
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
                src="https://bientue.vn/upload/product/600x600/1/day-dai-nhua-pp-12mm-cho-may-ban-tu-dongtasmapp12mmx06mmx2500mzolta-6463.jpg"
                alt="dây đai"
              />
            </div>
            <div className="p-5 border-t-2">
              <h1
                className="title-font text-center text-lg font-medium text-gray-900 mb-3"
                style={{ color: mode === "dark" ? "white" : "" }}
              >
                Dây đai nhựa PP đóng thùng
              </h1>
            </div>
          </div>
        </div>
        {/* item_4 */}
        <div>
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
                src="https://www.daydaidonggoi.vn/wp-content/uploads/2022/03/day-dai-nhua-pp-mau-den-1-600x600.jpg"
                alt="dây đai"
              />
            </div>
            <div className="p-5 border-t-2">
              <h1
                className="title-font text-center text-lg font-medium text-gray-900 mb-3"
                style={{ color: mode === "dark" ? "white" : "" }}
              >
                Dây đai nhựa màu đen
              </h1>
            </div>
          </div>
        </div>
        {/* item_5 */}
        <div>
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
                src="https://www.daydaidonggoi.vn/wp-content/uploads/2022/03/day-dai-nhua-pp-mau-do-1.jpg"
                alt="dây đai"
              />
            </div>
            <div className="p-5 border-t-2">
              <h1
                className="title-font text-center text-lg font-medium text-gray-900 mb-3"
                style={{ color: mode === "dark" ? "white" : "" }}
              >
                Dây đai nhựa PP màu đỏ
              </h1>
            </div>
          </div>
        </div>
        {/* item_6 */}
        <div>
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
                src="https://www.daydaidonggoi.vn/wp-content/uploads/2022/03/day-dai-nhua-PP-mau-xanh-2-600x600.jpg"
                alt="dây đai"
              />
            </div>
            <div className="p-5 border-t-2">
              <h1
                className="title-font text-center text-lg font-medium text-gray-900 mb-3"
                style={{ color: mode === "dark" ? "white" : "" }}
              >
                Dây đai nhựa PP màu xanh
              </h1>
            </div>
          </div>
        </div>
      </Slider>
        {/* Dây Đai */}

        {/* Pallet */}
      <div className="lg:w-1/2 w-full mb-2 lg:mb-10 mt-14">
        <h1
          className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"
          style={{ color: mode === "dark" ? "white" : "" }}
        >
          Dòng sản phẩm: Pallet Gỗ
        </h1>
        <div className="h-1 w-20 bg-pink-600 rounded"></div>
      </div>
      <Slider {...settings} className="">
        {/* item_1 */}
        <div>
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
                src="https://palletgoduyminh.com/watermark/product/540x540x1/upload/product/5-6451.png"
                alt="pallet"
              />
            </div>
            <div className="p-5 border-t-2">
              <h1
                className="title-font text-center text-lg font-medium text-gray-900 mb-3"
                style={{ color: mode === "dark" ? "white" : "" }}
              >
                Pallet Gỗ Tràm 1
              </h1>
            </div>
          </div>
        </div>
        {/* item_2 */}
        <div>
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
                src="https://palletgoduyminh.com/watermark/product/540x540x1/upload/product/z371629295428542d1f12f569ee997f1e4bf4364074712-1613-2419.jpg"
                alt="pallet"
              />
            </div>
            <div className="p-5 border-t-2">
              <h1
                className="title-font text-center text-lg font-medium text-gray-900 mb-3"
                style={{ color: mode === "dark" ? "white" : "" }}
              >
                Pallet Gỗ Tràm 2
              </h1>
            </div>
          </div>
        </div>
        {/* item_3 */}
        <div>
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
                src="https://palletgoduyminh.com/watermark/product/540x540x1/upload/product/4-4104.png"
                alt="pallet"
              />
            </div>
            <div className="p-5 border-t-2">
              <h1
                className="title-font text-center text-lg font-medium text-gray-900 mb-3"
                style={{ color: mode === "dark" ? "white" : "" }}
              >
                Pallet Gỗ Tràm 3
              </h1>
            </div>
          </div>
        </div>
        {/* item_4 */}
        <div>
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
                src="https://bao50kg.com/wp-content/uploads/2022/06/1-1-600x450.jpg"
                alt="pallet"
              />
            </div>
            <div className="p-5 border-t-2">
              <h1
                className="title-font text-center text-lg font-medium text-gray-900 mb-3"
                style={{ color: mode === "dark" ? "white" : "" }}
              >
                Pallet Gỗ Tràm 4
              </h1>
            </div>
          </div>
        </div>
        {/* item_5 */}
        <div>
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
                src="https://i.ibb.co/Vpw0T2G/thung-go.jpg"
                alt="dây đai"
              />
            </div>
            <div className="p-5 border-t-2">
              <h1
                className="title-font text-center text-base font-medium text-gray-900 mb-3"
                style={{ color: mode === "dark" ? "white" : "" }}
              >
                Thùng Gỗ - gia công theo yêu cầu
              </h1>
            </div>
          </div>
        </div>
        {/* item_6 */}
        <div>
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
                src="https://i.ibb.co/YNhkdZs/pallet-go-thong.jpg"
                alt="dây đai"
              />
            </div>
            <div className="p-5 border-t-2">
              <h1
                className="title-font text-center text-lg font-medium text-gray-900 mb-3"
                style={{ color: mode === "dark" ? "white" : "" }}
              >
                Pallet Gỗ Thông
              </h1>
            </div>
          </div>
        </div>
      </Slider>
        {/* Pallet */}

        {/* Màng PE */}
      <div className="lg:w-1/2 w-full mb-2 lg:mb-10 mt-14">
        <h1
          className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"
          style={{ color: mode === "dark" ? "white" : "" }}
        >
          Dòng sản phẩm: Màng PE
        </h1>
        <div className="h-1 w-20 bg-pink-600 rounded"></div>
      </div>
      <Slider {...settings} className="">
        {/* item_1 */}
        <div>
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
                src="https://tuigoihang.vn/wp-content/uploads/2023/02/mang-chit-pe-trang-25cm-gia-si.jpg"
                alt="pe"
              />
            </div>
            <div className="p-5 border-t-2">
              <h1
                className="title-font text-center text-lg font-medium text-gray-900 mb-3"
                style={{ color: mode === "dark" ? "white" : "" }}
              >
                PE Màng Chít
              </h1>
            </div>
          </div>
        </div>
        {/* item_2 */}
        <div>
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
                src="https://maxwellvn.com/wp-content/uploads/2020/09/h%C3%ACnh-2-8.jpg"
                alt="pe"
              />
            </div>
            <div className="p-5 border-t-2">
              <h1
                className="title-font text-center text-lg font-medium text-gray-900 mb-3"
                style={{ color: mode === "dark" ? "white" : "" }}
              >
                PE Đỏ
              </h1>
            </div>
          </div>
        </div>
        {/* item_3 */}
        <div>
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
                src="https://minhkhoipvc.com/wp-content/uploads/2023/09/mang-pe-mau-den-35kg-boc-hang-tai-ha-noi-1.jpg"
                alt="pe"
              />
            </div>
            <div className="p-5 border-t-2">
              <h1
                className="title-font text-center text-lg font-medium text-gray-900 mb-3"
                style={{ color: mode === "dark" ? "white" : "" }}
              >
                PE Đen
              </h1>
            </div>
          </div>
        </div>
        {/* item_4 */}
        <div>
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
                src="https://bizweb.dktcdn.net/thumb/1024x1024/100/429/571/products/tantaiplastics-com-mang-pe-lot-san-3.jpg?v=1626081495557"
                alt="pallet"
              />
            </div>
            <div className="p-5 border-t-2">
              <h1
                className="title-font text-center text-lg font-medium text-gray-900 mb-3"
                style={{ color: mode === "dark" ? "white" : "" }}
              >
                PE Trải Sàn
              </h1>
            </div>
          </div>
        </div>
        {/* item_5 */}
        <div>
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
                src="https://tcstar.com.vn/images/stories/virtuemart/product/dm_20230403113227_001.jpg"
                alt="dây đai"
              />
            </div>
            <div className="p-5 border-t-2">
              <h1
                className="title-font text-center text-lg font-medium text-gray-900 mb-3"
                style={{ color: mode === "dark" ? "white" : "" }}
              >
                PE Xanh
              </h1>
            </div>
          </div>
        </div>
      </Slider>
        {/* Màng PE */}

        {/* Màng PE */}
      <div className="lg:w-1/2 w-full mb-2 lg:mb-10 mt-14">
        <h1
          className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"
          style={{ color: mode === "dark" ? "white" : "" }}
        >
          Dòng sản phẩm: Hỗ Trợ
        </h1>
        <div className="h-1 w-20 bg-pink-600 rounded"></div>
      </div>
      <Slider {...settings} className="">
        {/* item_1 */}
        <div>
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
                src="https://www.daydaidonggoi.vn/wp-content/uploads/2022/03/bo-dung-cu-dong-dai-trung-quoc.jpg"
                alt="pe"
              />
            </div>
            <div className="p-5 border-t-2">
              <h1
                className="title-font text-center text-lg font-medium text-gray-900 mb-3"
                style={{ color: mode === "dark" ? "white" : "" }}
              >
                Bộ dụng cụ đóng đai nhựa TQ
              </h1>
            </div>
          </div>
        </div>
        {/* item_2 */}
        <div>
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
                src="https://www.daydaidonggoi.vn/wp-content/uploads/2022/03/dung-cu-dong-dai-nhua-pcx-600x600.jpg"
                alt="pe"
              />
            </div>
            <div className="p-5 border-t-2">
              <h1
                className="title-font text-center text-lg font-medium text-gray-900 mb-3"
                style={{ color: mode === "dark" ? "white" : "" }}
              >
                Dụng cụ đóng đai nhựa
              </h1>
            </div>
          </div>
        </div>
        {/* item_3 */}
        <div>
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
                src="https://www.daydaidonggoi.vn/wp-content/uploads/2022/03/may-dong-dai-khi-nen-aqd25-600x600.jpg"
                alt="pe"
              />
            </div>
            <div className="p-5 border-t-2">
              <h1
                className="title-font text-center text-lg font-medium text-gray-900 mb-3"
                style={{ color: mode === "dark" ? "white" : "" }}
              >
                Dụng cụ đóng đai khí nén
              </h1>
            </div>
          </div>
        </div>
        {/* item_4 */}
        <div>
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
                src="https://www.daydaidonggoi.vn/wp-content/uploads/2022/03/may-dong-dai-tu-dong-600x600.jpg"
                alt="pallet"
              />
            </div>
            <div className="p-5 border-t-2">
              <h1
                className="title-font text-center text-lg font-medium text-gray-900 mb-3"
                style={{ color: mode === "dark" ? "white" : "" }}
              >
                Máy đóng đai tự động
              </h1>
            </div>
          </div>
        </div>
        {/* item_5 */}
        <div>
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
                src="https://www.daydaidonggoi.vn/wp-content/uploads/2022/03/bam-ghim-thung-carton-600x600.jpg"
                alt="dây đai"
              />
            </div>
            <div className="p-5 border-t-2">
              <h1
                className="title-font text-center text-lg font-medium text-gray-900 mb-3"
                style={{ color: mode === "dark" ? "white" : "" }}
              >
                Bấm ghim thùng carton
              </h1>
            </div>
          </div>
        </div>
      </Slider>
        {/* Màng PE */}
    </div>
  );
}

export default Carousel;
