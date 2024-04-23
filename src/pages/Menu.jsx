import { useLoaderData } from "react-router-dom";
import axios from "axios";
import MenuCategory from "../components/MenuCategory";
import MenuMeals from "../components/MenuMeals";
import { useGlobalContext } from "../components/Context";
import { useEffect } from "react";

// Base
const mealSearchUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=`;
// All Categories
const allCategories = `https://www.themealdb.com/api/json/v1/1/categories.php`;
// Filter by Category
const filterByCategory = `https://www.themealdb.com/api/json/v1/1/filter.php?c=`;
const filterByCategory2 = `https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef`;

export const loader = async () => {
  // Tüm kategorileri al
  const categoriesResponse = await axios.get(allCategories);
  const categories = categoriesResponse.data.categories;
  const mealsResponse = await axios.get(filterByCategory2);
  const meals = mealsResponse.data.meals;

  return { categories, meals };
};

const searchByCategory = async (cat) => {
  const mealsResponse = await axios.get(`${filterByCategory}${cat}`);
  const meals = mealsResponse.data.meals;
  return meals;
};

const Menu = () => {
  const { categories, meals } = useLoaderData();
  const { categoryState, setAllMeals } = useGlobalContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const meals = await searchByCategory(categoryState);
        setAllMeals(meals);
        // Burada meals'i uygun bir şekilde işleyebilirsiniz, örneğin state'e atayabilirsiniz
      } catch (error) {
        console.error(
          "Kategoriye göre yemekler getirilirken hata oluştu:",
          error
        );
      }
    };

    fetchData();
  }, [categoryState]);

  return (
    <section>
      <h1 className="text-center  my-2 font-bold sm:text-2xl md:text-3xl lg:text-4xl">
        CATEGORY
      </h1>
      <MenuCategory categories={categories} />
      <h1 className="text-center  mt-10 font-bold sm:text-2xl md:text-3xl lg:text-4xl">
        MENU
      </h1>
      <MenuMeals />
    </section>
  );
};

export default Menu;
