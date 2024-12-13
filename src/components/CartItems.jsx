import { useState } from "react";
import pici from "../assets/pici.png";
import picii from "../assets/picii.png";
import piciii from "../assets/piciii.png";


const CartItems = () => {
  const [shopping, setShopping] = useState(false);
  const [isOpen, setIsOpen] = useState();
  const handleShopping = () => {
    setShopping(shopping);
  };

  const handleCheckout = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <h2 className="w-[94px] h-[24px] font-primary font-bold text-[22px] leading-[24px] text-[#364A63]  flex gap-[10px]">
        Your Cart
      </h2>
      {/* price table */}
      <div className="pt-[20px]">
        <table className="w-full">
          <thead className="w-[563px] h-[36px] border-[#DBDFEA] border-b-[1px]">
            <tr>
              <th className="w-[278px] h-[24px] text-start font-primary font-normal text-[14px] leading-[23.1px] text-[#8091A7]">
                Item
              </th>
              <th className="w-[62px] h-[24px] font-primary font-normal text-[14px] leading-[23.1px] text-center text-[#8091A7]">
                Color
              </th>
              <th className="text-[#8091A7] font-primary font-normal text-[14px] leading-[23.1px] text-center w-[69px] h-[24px]">
                Size
              </th>
              <th className="text-[#8091A7] font-primary font-normal text-[14px] leading-[23.1px] text-center w-[59px] h-[24px]">
                Qnt
              </th>
              <th className="text-[#8091A7] font-primary font-normal text-[14px] leading-[23.1px] w-[91px] h-[24px] text-end">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            {/* first items*/}
            <tr className="border-b-[1px] mt-[16px] w-[563px] h-[52px] text-start">
              <td className="flex items-center gap-[8px] w-[278px] h-[36px] pt-[16px]">
                <img
                  src={pici}
                  alt=""
                  className="w-[36.64px] h-[41.79px] pt-[3.21px] pb-[3.21px]"
                />
                <p className="font-primary font-normal text-[14px] leading-[23.1px] text-[#364A63]">
                  Classy Modern Smart watch
                </p>
              </td>
              <td className="w-[62px] h-[24px] font-primary font-normal text-[14px] leading-[23.1px] text-[#364A63] text-center">
                Black
              </td>
              <td className="w-[69px] h-[24px]">
                <p className="font-primary font-semibold text-[14px] leading-[23.1px] text-center text-[#364A63]">
                  XL
                </p>
              </td>
              <td>
                <p className="font-primary font-semibold text-[14px] leading-[23.1px] text-center text-[#364A63]">
                  1
                </p>
              </td>
              <td>
                <p className="font-primary font-semibold text-[14px] leading-[23.1px] text-end text-[#364A63]">
                  $99.00
                </p>
              </td>
            </tr>
            {/* second items */}
            <tr className="border-b-[1px] w-[563px] mt-[16px] h-[52px] text-start">
              <td className="flex items-center gap-[8px] w-[278px] h-[36px] pt-[16px]">
                <img
                  src={picii}
                  alt=""
                  className="w-[36.64px] h-[41.79px] pt-[3.21px] pb-[3.21px]"
                />
                <p className="font-primary font-normal text-[14px] leading-[23.1px] text-[#364A63]">
                  Classy Modern Smart watch
                </p>
              </td>
              <td className="w-[62px] h-[24px] font-primary font-normal text-[14px] leading-[23.1px] text-[#364A63] text-center">
                Purple
              </td>
              <td className="w-[69px] h-[24px]">
                <p className="font-primary font-semibold text-[14px] leading-[23.1px] text-center text-[#364A63]">
                  L
                </p>
              </td>
              <td>
                <p className="font-primary font-semibold text-[14px] leading-[23.1px] text-center text-[#364A63]">
                  2
                </p>
              </td>
              <td>
                <p className="font-primary font-semibold text-[14px] leading-[23.1px] text-end text-[#364A63]">
                  $178.00
                </p>
              </td>
            </tr>
            {/* third items */}
            <tr className="border-b-[1px] w-[563px] mt-[16px] h-[52px] text-start">
              <td className="flex items-center gap-[8px] w-[278px] h-[36px] pt-[16px]">
                <img
                  src={piciii}
                  alt=""
                  className="w-[36.64px] h-[41.79px] pt-[3.21px] pb-[3.21px]"
                />
                <p className="font-primary font-normal text-[14px] leading-[23.1px] text-[#364A63]">
                  Classy Modern Smart watch
                </p>
              </td>
              <td className="w-[62px] h-[24px] font-primary font-normal text-[14px] leading-[23.1px] text-[#364A63] text-center">
                Cyan
              </td>
              <td className="w-[69px] h-[24px]">
                <p className="font-primary font-semibold text-[14px] leading-[23.1px] text-center text-[#364A63]">
                  M
                </p>
              </td>
              <td>
                <p className="font-primary font-semibold text-[14px] leading-[23.1px] text-center text-[#364A63]">
                  1
                </p>
              </td>
              <td>
                <p className="font-primary font-semibold text-[14px] leading-[23.1px] text-end text-[#364A63]">
                  $79.00
                </p>
              </td>
            </tr>
            {/* Total Row */}
            <tr className="w-full h-[52px] text-start">
              <td
                colSpan="3"
                className="text-[#364A63] font-primary font-bold text-[14px] text-start pr-[16px]"
              >
                Total
              </td>
              <td className="font-primary font-semibold text-[14px] text-center text-[#364A63]">
                4
              </td>
              <td className="font-primary font-semibold text-[14px] text-end text-[#364A63]">
                $356.00
              </td>
            </tr>
            {/* action row */}
            <tr className="w-full h-[46px]">
              <td colSpan="5">
                <div className="flex justify-end gap-[24px]">
                  <a href="/">
                    <button
                      onClick={handleShopping}
                      className="w-[152px] h-[36px] border-[1px] rounded-[3px] border-[#DBDFEA] text-[13px] font-bold font-primary leading-[20px] text-[#364A63] tracking-[0.26px]"
                    >
                      Continue Shopping
                    </button>
                  </a>
                  <a href="/LogIn">
                    <button
                      onClick={handleCheckout}
                      className="w-[94px] h-[36px] rounded-[3px] bg-[#6576FF] text-[#FFFFFF] font-bold font-primary text-[13px] leading-[20px] tracking-[0.26px]"
                    >
                      Checkout
                    </button>
                  </a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CartItems;
