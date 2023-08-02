import {PRODUCT_LIST, SET_PRODUCT_LIST} from "./Constant";

export const productList =  () =>{
    return {
        type: PRODUCT_LIST,
        data: "Mango"
    };
}

// export const setProductList =  (data) =>{
//     return {
//         type: SET_PRODUCT_LIST,
//         data
//     };
// }