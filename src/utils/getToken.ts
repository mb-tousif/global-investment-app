import { RootState } from "@/redux/store";

const getToken = (state: RootState) => {
    return state.auth.token;
  };
  
  export default getToken;