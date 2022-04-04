import * as actionType from "./actionType";

export const buyProduct = (product) => {
  return {
    type: actionType.BUY_PRODUCT,
    payload: product,//payload product là dữ liệu về sản phẩm để ta truyền vào giỏ hàng 

  };
};

export const deleteProduct = (product) => {
  return {
    type: actionType.DELETE_PRODUCT,
    payload: product,// chuyển cho nó 1 cái ID về cái product mà ta muốn xóa từ đó reducers sẽ sử lý và xóa sp đó ra khỏi giỏ hàng 
  };
};
