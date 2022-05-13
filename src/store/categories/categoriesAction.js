import { CategoriesActionTypes } from "./categoriesTypes";

export const setCategories = (categoriesArray) => ({
  type: CategoriesActionTypes.SET_CATEGORIES,
  payload: categoriesArray,
});
