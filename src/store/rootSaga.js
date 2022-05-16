import { all, call } from "redux-saga/effects";

import { categoriesSagas } from "./categories/categoriesSaga";
import { userSagas } from "./user/userSaga";

export function* rootSaga() {
  yield all([call(categoriesSagas), call(userSagas)]);
}
