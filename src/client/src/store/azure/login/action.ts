import { IsLoggedIntoAzure, ILoginToAzure } from "./model";
import { AZURE_TYPEKEYS } from "../typeKeys";
import { Dispatch } from "react";
import login from "../../../mockData/login";

export const isLoggedIntoAzureAction = (): IsLoggedIntoAzure => ({
  type: AZURE_TYPEKEYS.IS_LOGGED_IN_TO_AZURE
});

export const logIntoAzureAction = (loginData: any): ILoginToAzure => ({
  type: AZURE_TYPEKEYS.LOG_IN_TO_AZURE,
  payload: loginData
});

export const startLoginToAzure = () => {
  return async (dispatch: Dispatch<ILoginToAzure>) => {
    // Can dispatch a spinner here until login completes
    try {
      const loginData = await login();
      dispatch(logIntoAzureAction(loginData));
    } catch (err) {
      console.log(err);
    }
  };
};
