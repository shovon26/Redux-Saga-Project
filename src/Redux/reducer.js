import {ADDTOCART, REMOVEFROMCART, RESETCART} from "./Constant";
export const  cartData = (data = [], action) => {
    if(action.type === ADDTOCART){
        console.warn('Reducer called, add to cart', action);
        return [action.data, ...data];
    }
    else if(action.type === REMOVEFROMCART){
        console.warn('Reducer called, remove from cart', action);
        // if(data.length > 0) data.length--;
        // return [data];
        // data.length= data.length? data.length-1:[]
        let remainingData = data.filter(item => {
            return item.id !== action.data;
        });
        console.log('Remaining data: ', remainingData);
        return [...remainingData];
    }
    else if(action.type === RESETCART){
        data = [];
        return [...data];
    }
    else{
        return data;
    }
}