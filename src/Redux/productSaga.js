import {takeEvery, put} from 'redux-saga/effects';
import {PRODUCT_LIST, SET_PRODUCT_LIST} from "./Constant";

function* getProducts(){
    // console.warn('API called here');
    let data = yield fetch('http://localhost:3500/product');   //here use your own json-server created api data
    data = yield data.json();
    // console.warn('Action called: ', data);
    yield put({
        type: SET_PRODUCT_LIST,
        data: data
    });
}
function* productSaga(){
    yield takeEvery(PRODUCT_LIST, getProducts);
}

export default productSaga;