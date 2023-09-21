import { objectList } from "@/db/objectList";
import React from "react";

const ObjectDetails = ({ params }) => {
  const object = objectList.filter((val) => val.id == params.id);
  return (
    <div className="objectContainer">
      <h3 className="objectTitle">{object[0].title}</h3>
      <p className="objectContent">{object[0].content}</p>
    </div>
  );
};

export default ObjectDetails;
