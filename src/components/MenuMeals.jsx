import { useGlobalContext } from "../components/Context";

const MenuMeals = () => {
  const { allMeals } = useGlobalContext();
  console.log(allMeals);
  let renderedMeals;
  if (allMeals) {
    renderedMeals = allMeals.map((meal) => {
      const { idMeal, strMeal, strMealThumb } = meal;
      return (
        <div className="m-2 max-w-60 md:max-w-60 text-center  " key={idMeal}>
          <img
            src={strMealThumb}
            alt=""
            className="object-cover h-52 w-60 rounded-sm"
          />
          <div className="bg-fuchsia-900 p-3">
            <span className="max-w-40 text-xl">{strMeal}</span>
            <p></p>
          </div>
        </div>
      );
    });
  }

  return (
    <section className="flex flex-wrap   justify-center max-w-screen-xl xs:w-[100vw] md:w-[90vw] my-4  mx-auto">
      {renderedMeals}
    </section>
  );
};

export default MenuMeals;
