import React from "react";
import { Link } from "react-router-dom";
import imageIndex from "../../util/image_index";

const IndustryItem = ({ industry }) => {
  const { label } = industry;

  const imageSrc =
    imageIndex[
      `industries/${label.replace(new RegExp(" ", "g"), "-").toLowerCase()}`
    ];

  return (
    <Link
      className={`dropdown-col-3 industry-item`}
      to={`/${label.replace(new RegExp(" ", "g"), "-").toLowerCase()}`}
    >
      <figure className="industry-image-wrapper">
        <img src={imageSrc} alt={label} className={"industry-image"} />
      </figure>

      <figcaption className="industry-label">{label}</figcaption>
    </Link>
  );
};

export default IndustryItem;
