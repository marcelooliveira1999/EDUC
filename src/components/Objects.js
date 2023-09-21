import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import "./Objects.css";
import Link from "next/link";

const Object = ({ object }) => {
  return (
    <div className="objectContainer">
      {object.map((val, i) => (
        <div key={i} className="object">
          <h3 className="objectTitle">{val.title}</h3>
          <p className="objectContent">{val.content}</p>
          <Link href={`/objects/${object[i].id}`}>
            <BsFillArrowRightCircleFill className="objectIcon" />
          </Link>
        </div>
      ))}
    </div>
  );
};

export { Object };
