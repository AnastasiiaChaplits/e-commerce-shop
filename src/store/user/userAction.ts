import { UserActionTypes } from "./userTypes";
import { createAction, withMatcher } from "../../utils/reducer/reducer";
import { AdditionalInformation, UserData } from "../../utils/firebase/firebase";
import { Action, ActionWithPayload } from "../../utils/reducer/reducer";
import { User } from "firebase/auth";

export type CheckUserSession = Action<UserActionTypes.CHECK_USER_SESSION>;

export type GoogleSignInStart = Action<UserActionTypes.GOOGLE_SIGN_IN_START>;

export type EmailSignInStart = ActionWithPayload<
  UserActionTypes.EMAIL_SIGN_IN_START,
  { email: string; password: string }
>;

export type SignInSuccess = ActionWithPayload<
  UserActionTypes.SIGN_IN_SUCCESS,
  UserData
>;

export type SignInFailed = ActionWithPayload<
  UserActionTypes.SIGN_IN_FAILED,
  Error
>;

export type SignUpStart = ActionWithPayload<
  UserActionTypes.SIGN_UP_START,
  { email: string }
>;

export type SignUpSuccess = ActionWithPayload<
  UserActionTypes.SIGN_UP_SUCCESS,
  { user: User; additionalDetails: AdditionalInformation }
>;

export type SignUpFailed = ActionWithPayload<
  UserActionTypes.SIGN_UP_FAILED,
  Error
>;

export type SignOutStart = Action<UserActionTypes.SIGN_OUT_START>;

export type SignOutSuccess = Action<UserActionTypes.SIGN_OUT_SUCCESS>;

export type SignOutFailed = ActionWithPayload<
  UserActionTypes.SIGN_OUT_FAILED,
  Error
>;

export const checkUserSession = withMatcher(
  (): CheckUserSession => createAction(UserActionTypes.CHECK_USER_SESSION)
);

export const googleSignInStart = withMatcher(
  (): GoogleSignInStart => createAction(UserActionTypes.GOOGLE_SIGN_IN_START)
);

export const emailSignInStart = withMatcher(
  (email: string, password: string): EmailSignInStart =>
    createAction(UserActionTypes.EMAIL_SIGN_IN_START, { email, password })
);

export const signInSuccess = withMatcher(
  (user: UserData): SignInSuccess =>
    createAction(UserActionTypes.SIGN_IN_SUCCESS, user)
);

export const signInFailed = withMatcher(
  (error: Error): SignInFailed =>
    createAction(UserActionTypes.SIGN_IN_FAILED, error)
);

export const signUpStart = withMatcher(
  (email: string, password: string, displayName: string): SignUpStart =>
    createAction(UserActionTypes.SIGN_UP_START, {
      email,
      password,
      displayName,
    })
);

export const signUpSuccess = withMatcher(
  (user: User, additionalDetails: AdditionalInformation): SignUpSuccess =>
    createAction(UserActionTypes.SIGN_UP_SUCCESS, { user, additionalDetails })
);

export const signUpFailed = withMatcher(
  (error: Error): SignUpFailed =>
    createAction(UserActionTypes.SIGN_UP_FAILED, error)
);

export const signOutStart = withMatcher(
  (): SignOutStart => createAction(UserActionTypes.SIGN_OUT_START)
);

export const signOutSuccess = withMatcher(
  (): SignOutSuccess => createAction(UserActionTypes.SIGN_OUT_SUCCESS)
);

export const signOutFailed = withMatcher(
  (error: Error): SignOutFailed =>
    createAction(UserActionTypes.SIGN_OUT_FAILED, error)
);
