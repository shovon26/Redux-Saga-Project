import {PRODUCT_LIST, SET_PRODUCT_LIST} from "./Constant";
export const  productData = (data = [], action) => {
    if(action.type === SET_PRODUCT_LIST){
        // console.warn('Set Product List called. ', action);
        return [...action.data];
    }
    else{
        return data;
    }
}