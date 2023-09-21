import "./Header.css";
import Image from "next/image.js";
import userImage from "../../public/userImage.png";

const Header = () => {
  return (
    <header className="container">
      <h1 className="logo">EDUC</h1>
      <Image src={userImage} alt="Picture of the author" width={40} height={40} className="userImage" />
    </header>
  );
};

export { Header };
