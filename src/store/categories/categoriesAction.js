import { CategoriesActionTypes } from "./categoriesTypes";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase";

export const fetchCategoriesStart = () => ({
  type: CategoriesActionTypes.FETCH_CATEGORIES_FAILED,
});

export const fetchCategoriesSuccess = (categoriesArray) => ({
  type: CategoriesActionTypes.FETCH_CATEGORIES_SUCCESS,
  payload: categoriesArray,
});

export const fetchCategoriesFailed = (error) => ({
  type: CategoriesActionTypes.FETCH_CATEGORIES_SUCCESS,
  payload: error,
});

export const fetchCategoriesAsync = () => async (dispatch) => {
  dispatch(fetchCategoriesStart());
  try {
    const categoriesArray = await getCategoriesAndDocuments("categories");
    dispatch(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    dispatch(fetchCategoriesFailed(error));
  }
};
