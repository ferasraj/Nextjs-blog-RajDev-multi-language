import React from "react";
import { twMerge } from "tailwind-merge";
import Category from "./Category";
import { slug } from "github-slugger";

const Categories = ({ categories, currentSlug }) => {
  return (
    <div
      className={twMerge(
        " px-0 md:px-10 sxl:px-20 mt-10 border-t-2 text-dark dark:text-light",
        " border-b-2 border-solid border-dark dark:border-light ",
        "py-4 flex items-start flex-wrap font-medium mx-5 md:mx-10"
      )}
    >
      {categories.map((cat) => {
        const categorySlug = slug(cat);
        return (
          <Category
            key={categorySlug}
            link={`/categories/${categorySlug}`}
            name={cat}
            active={currentSlug === categorySlug}
          />
        );
      })}
    </div>
  );
};

export default Categories;
