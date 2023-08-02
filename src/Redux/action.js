import {ADDTOCART, REMOVEFROMCART, RESETCART} from "./Constant";
export const addToCart = (data) =>{
    //  console.log('Action called: ', data);
    return {
        type: ADDTOCART,
        data: data
    };
}
export const removeFromCart = (data) =>{
    // console.log('remove called: ', data);
    return {
        type: REMOVEFROMCART,
        data: data
    };
}

export const resetCart = () =>{
    // console.log('reset called');
    return {
        type: RESETCART,
    };
}