import { footerItems } from "../constants/Index";
import { Instagram } from "lucide-react";
import { colorPallete1 } from "../constants/Index";

const Footer = () => {
  return (
    <div className="py-20 flex flex-col justify-center items-center text-white bg-black">
      <h2 className="pb-5 max-sm:text-sm p-5 max-sm:text-center">Follow us on Instagram for exclusive updates and surprises. 📸✨</h2>
      <h2 style={{color: colorPallete1[0].sakura1 }} className="max-sm:text-center pb-3 text-4xl max-sm:text-[1.4rem]">@izumiswift - Instagram Handle</h2>
      <div className="container py-8 text-center flex justify-center">
        <Instagram />
      </div>
    </div>
  );
};

export default Footer;
