import { useState } from "react";
import prodect from "./assets/product.png";
import starfilli from "./assets/starfilli.png";
import starfillii from "./assets/starfillii.png";
import starfilliii from "./assets/starfilliii.png";
import starfilliv from "./assets/starfilliv.png";
import starfillv from "./assets/starfillv.png";
import CartItems from "./components/CartItems";
import heart from "./assets/heart.png";

const App = () => {
  const [selectedColor, setSelectedColor] = useState("purple");
  const [quantity, setQuantity] = useState(0);
  const [open, setOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState("S");

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrease = () => {
    setQuantity((prevQuantity) => (prevQuantity > 0 ? prevQuantity - 1 : 0));
  };

  const handleClick = () => {
    setOpen(!open);
  };


  return (
    <main className="w-[1920px] h-[1014px] bg-[#FFFFFF] pt-[120px] pl-[300px] pr-[300px] gap-[92px]">
      <div className="flex w-full h-[720px] gap-[60px]">
        {/* left side image */}
        <img
          src={prodect}
          alt=""
          className="w-[630px] h-[721px] rounded-[4px]"
        />
        {/* right side text */}
        <div className="ml-[60px] mt-[91px]">
          {/* Heading div */}
          <div className="w-[477px] h-[68px] flex items-center">
            <h1 className="text-[#364A63] text-[40px] font-bold leading-[44px] font-primary tracking-[-1.2px]">
              Classy Modern Smart watch
            </h1>
          </div>
          {/* Rating div */}
          <div className="flex gap-8">
            <div className="flex">
              <img src={starfilli} alt="" />
              <img src={starfillii} alt="" />
              <img src={starfilliii} alt="" />
              <img src={starfilliv} alt="" />
              <img src={starfillv} alt="" />
            </div>
            <p className="font-primary font-normal text-[14px] leading-[23.1px] text-[#8091A7]">
              (2 Reviews)
            </p>
          </div>
          {/* product-tag div */}
          <div className="flex items-center gap-[5px] pt-5">
            <p className="text-[#8091A7] font-primary font-normal text-[20px] leading-[30px] line-through w-[62px] h-[30px]">
              $99.00
            </p>
            <p className="text-[#6576FF] font-primary font-bold text-[24px] leading-[30px] w-[76px] h-[30px]">
              $79.00
            </p>
          </div>
          {/* product-excerpt text div */}
          <div className="pt-[20px] pr-[4px] gap-[8px]">
            <p className="w-[626px] h-[90px] font-primary font-normal text-[18px] leading-[30px] text-[#8091A7]">
              I must explain to you how all this mistaken idea of denouncing
              praising pain was born, and I will give you a complete account of
              the system, and expound the actual teaching.
            </p>
          </div>
          {/* product-meta div */}
          <div className="pt-[20px] pr-[4px] flex gap-[43px]">
            <div className="w-[46px] h-[47px]">
              <p className="w-[30px] h-[24px] font-primary font-normal text-[14px] leading-[23.1px] text-[#8091A7]">
                Type
              </p>
              <h3 className="w-[46px] h-[23px] font-primary font-bold text-[16px] leading-[23px] text-[#364A63]">
                Watch
              </h3>
            </div>
            <div className="w-[131px] h-[46px]">
              <p className="w-[93px] h-[24px] font-primary font-normal text-[14px] leading-[23.1px] text-[#8091A7]">
                Model Number
              </p>
              <h3 className="w-[131px] h-[23px] font-primary font-bold text-[16px] leading-[23px] text-[#364A63]">
                Forerunner 290XT
              </h3>
            </div>
          </div>
          {/* color div */}
          <div className="w-[630px] h-[74px] pt-[20px] flex gap-[10px]">
            <div
              onClick={() => handleColorChange("purple")}
              className={`flex w-[24px] h-[24px] items-center justify-center rounded-full border-[2px] cursor-pointer ${
                selectedColor === "purple"
                  ? "border-[#816BFF]"
                  : "border-[#E0E0E0]"
              }`}
            >
              <span className="w-[16px] h-[16px] rounded-full bg-[#816BFF]" />
            </div>
            <div
              onClick={() => handleColorChange("green")}
              className={`flex w-[24px] h-[24px] items-center justify-center rounded-full border-[2px] cursor-pointer ${
                selectedColor === "green"
                  ? "border-[#1FCEC9]"
                  : "border-[#E0E0E0]"
              }`}
            >
              <span className="w-[16px] h-[16px] rounded-full bg-[#1FCEC9]" />
            </div>
            <div
              onClick={() => handleColorChange("sky")}
              className={`flex w-[24px] h-[24px] items-center justify-center rounded-full border-[2px] cursor-pointer ${
                selectedColor === "sky"
                  ? "border-[#4B97D3]"
                  : "border-[#E0E0E0]"
              }`}
            >
              <span className="w-[16px] h-[16px] rounded-full bg-[#4B97D3]" />
            </div>
            <div
              onClick={() => handleColorChange("chai")}
              className={`flex w-[24px] h-[24px] items-center justify-center rounded-full border-[2px] cursor-pointer ${
                selectedColor === "chai"
                  ? "border-[#3B4747]"
                  : "border-[#E0E0E0]"
              }`}
            >
              <span className="w-[16px] h-[16px] rounded-full bg-[#3B4747]" />
            </div>
          </div>
          {/* size div */}
          <div className="w-[630px] h-[86px] pt-[20px] gap-[10px]">
            <h3 className="w-[82px] h-[20px] font-primary font-bold text-[18px] leading-[20px] text-[#364A63]">
              Wrist Size
            </h3>
            {/* all size button */}
            <div className="w-[339px] h-[36px] gap-[12px] flex pt-[10px]">
              {/* short button */}
              <div
                onClick={() => handleSizeChange("S")}
                className={`w-[73px] h-[36px] flex items-center justify-center border-[1px] rounded-[3px] cursor-pointer ${
                  selectedSize === "S" ? "border-[#816BFF]" : "border-[#DBDFEA]"
                }`}
              >
                <p
                  className={`${
                    selectedSize === "S" ? "text-[#816BFF]" : "text-black"
                  }`}
                >
                  S <span className="text-slate-400">$69</span>
                </p>
              </div>
              {/* medium button */}
              <div
                onClick={() => handleSizeChange("M")}
                className={`w-[73px] h-[36px] flex items-center justify-center border-[1px] rounded-[3px] cursor-pointer ${
                  selectedSize === "M" ? "border-[#816BFF]" : "border-[#DBDFEA]"
                }`}
              >
                <p
                  className={`${
                    selectedSize === "M" ? "text-[#816BFF]" : "text-black"
                  }`}
                >
                  M <span className="text-slate-400">$79</span>
                </p>
              </div>
              {/* large button */}
              <div
                onClick={() => handleSizeChange("L")}
                className={`w-[73px] h-[36px] flex items-center justify-center border-[1px] rounded-[3px] cursor-pointer ${
                  selectedSize === "L" ? "border-[#816BFF]" : "border-[#DBDFEA]"
                }`}
              >
                <p
                  className={`${
                    selectedSize === "L" ? "text-[#816BFF]" : "text-black"
                  }`}
                >
                  L <span className="text-slate-400">$89</span>
                </p>
              </div>
              {/* xtera large button */}
              <div
                onClick={() => handleSizeChange("XL")}
                className={`w-[73px] h-[36px] flex items-center justify-center border-[1px] rounded-[3px] cursor-pointer ${
                  selectedSize === "XL"
                    ? "border-[#816BFF]"
                    : "border-[#DBDFEA]"
                }`}
              >
                <p className={`${selectedSize === "XL" ? "text-[#816BFF]" : "text-black"}`}>
                  XL <span className="text-slate-400">$99</span>
                </p>
              </div>
            </div>
          </div>
          {/* product meta div */}
          <div className="w-[630px] h-[56px] pt-[20px] flex gap-[12px]">
            {/* input items */}
            <form className="w-[130px] h-[36px] rounded-[4px] border-[#DBDFEA] flex">
              {/* sub items */}
              <span
                onClick={handleDecrease}
                className="w-[42px] h-[30px] border-[0.5px] border-[#DBDFEA] pr-[8px] pl-[8px] text-2xl text-center flex items-center text-slate-500 cursor-pointer"
              >
                -
              </span>
              <p className="w-[42px] h-[30px] border-[0.5px] border-[#DBDFEA] justify-center text-xl text-center flex items-center text-slate-500">
                {quantity}
              </p>
              {/* sum items */}
              <span
                onClick={handleIncrease}
                className="w-[42px] h-[30px] border-[0.5px] border-[#DBDFEA] pr-[8px] pl-[8px] text-2xl text-center flex items-center text-slate-500 cursor-pointer"
              >
                +
              </span>
            </form>
            {/* button items */}
            <button
              className="w-[105px] h-[36px] rounded-[3px] bg-[#6576FF] text-white"
              onClick={handleClick}
            >
              Add to Cart
            </button>
            {/* heart items */}
            <div
              className={`flex items-center justify-center cursor-pointer text-[#6576FF]`}
            >
              <img src={heart} alt="heart" />
            </div>
          </div>
        </div>
      </div>
      {/* checkout button */}
      <div className="h-[82px] w-full flex items-center justify-center gap-[12px] pt-[140px]">
        <button className="w-[139px] h-[42px] rounded-[20px] flex gap-[10px] bg-[#FFBB5A] items-center justify-center">
          <h4 className="text-[#364A63] w-[62px] h-[20px] font-primary font-bold text-[14px] leading-[20px] tracking-[0.26px]">
            Checkout
          </h4>
          <span className="w-[19px] h-[20px] bg-[#FFFFFF] flex gap-[8px] items-center justify-center rounded-[5px] font-primary font-bold text-[12px] leading-[16px] tracking-[0.26px]">
            2
          </span>
        </button>
      </div>
      {/* Open Cart Page */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="bg-white w-[651px] h-[480px] rounded-[20px] p-[44px] gap-[16px] relative">
            <CartItems />
          </div>
        </div>
      )}
    </main>
  );
};

export default App;
