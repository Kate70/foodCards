import { fetchCart } from "../utils/fireBaseGetData";
import { fetchUser } from "../utils/localStorageData"

const userInfo = fetchUser();
//const cardInfo = fetchCart()


export const initialState = {
    user: userInfo,
    footItems: null,
    //cardItems: cardInfo,
}