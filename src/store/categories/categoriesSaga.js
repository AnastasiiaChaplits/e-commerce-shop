import { takeLatest, all, call, put } from "redux-saga/effects";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase";
import {
  fetchCategoriesFailed,
  fetchCategoriesSuccess,
} from "./categoriesAction";
import { CategoriesActionTypes } from "./categoriesTypes";

export function* fetchCategoriesAsync() {
  try {
    const categoriesArray = yield call(getCategoriesAndDocuments, "categories");
    yield put(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    yield put(fetchCategoriesFailed(error));
  }
}

export function* onFetchCategories() {
  yield takeLatest(
    CategoriesActionTypes.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  );
}

export function* categoriesSagas() {
  yield all([call(onFetchCategories)]);
}
