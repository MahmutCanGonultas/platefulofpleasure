import { useEffect } from "react";
import CarouselComponent from "../components/CarouselComponent";
import { useGlobalContext } from "../components/Context";

const MenuCategory = ({ categories }) => {
  const { categoryState, handleClick } = useGlobalContext();
  // Control
  if (!categories) {
    return <h4 className="text-center">No matching Category</h4>;
  }

  // Rendered Categories
  const renderedCategories = categories.map((category, index) => {
    const { idCategory, strCategory, strCategoryThumb } = category;

    // Last item
    const isLastItem = index === categories.length - 1;

    // Last item class
    const itemClass = isLastItem ? "border-none" : "border-r";

    return (
      <div
        key={idCategory}
        className={`m-2 flex flex-col items-center cursor-pointer   ${itemClass}`}
        onClick={() => handleClick(strCategory)}
      >
        <img
          src={strCategoryThumb}
          alt=""
          className="object-cover h-32 w-40 rounded-sm"
        />
        <h3 className="">{strCategory}</h3>
      </div>
    );
  });

  return (
    <section className="max-w-screen-xl w-[90vw] md:w-[60vw] mx-auto ">
      {/* {renderedCategories} */}
      <CarouselComponent categories={renderedCategories} />
    </section>
  );
};

export default MenuCategory;
