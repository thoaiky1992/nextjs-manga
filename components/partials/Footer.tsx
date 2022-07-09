import { FC } from "react";
import Logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";

const Footer: FC = () => {
  return (
    <div className="w-full flex flex-col bg-app text-white pt-10 px-3 lg:px-0">
      <div className="w-full flex justify-center">
        <div className="w-[100px] lg:w-auto">
          <Image src={Logo} alt="logo" />
        </div>
      </div>
      <div className="w-full flex justify-center flex-col items-center max-w-screen-md m-auto">
        <h1 className="text-2xl mt-5 text-center">
          KySomaio Manga là website đọc truyện tranh miễn phí
        </h1>
        <h5 className="text-md text-center mt-5">
          Kyoto Manga không lưu trữ bất kì tệp tin nào trên máy chủ, chúng tôi
          chỉ liên kết tới những phương tiện truyền thông được lưu trữ bên dịch
          vụ thứ 3.
        </h5>
        <div className="w-full grid grid-cols-1 lg:grid-cols-3">
          <h5 className="text-md text-center mt-5">
            Lấy cảm hứng từ:{" "}
            <a
              href="https://www.facebook.com/leephan2001"
              target="_blank"
              rel="noreferrer"
            >
              <span className="hover:text-primary cursor-pointer transition-all ease-in-out">
                Lee Phan
              </span>
            </a>
          </h5>
          <h5 className="text-md text-center mt-5">
            Nguồn truyện:{" "}
            <a
              href="http://www.nettruyenco.com"
              target="_blank"
              rel="noreferrer"
            >
              <span className="hover:text-primary cursor-pointer transition-all ease-in-out">
                Nettruyen
              </span>
            </a>
          </h5>
          <h5 className="text-md text-center mt-5 mb-20">
            Thực hiện bởi:{" "}
            <a href="https://cv.thoaiky.com" target="_blank" rel="noreferrer">
              <span className="hover:text-primary cursor-pointer transition-all ease-in-out">
                Thoại kỳ
              </span>
            </a>
          </h5>
        </div>
      </div>
    </div>
  );
};
export default Footer;
