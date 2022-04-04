import * as actionType from "../actions/actionType";

const initialState = {
  cartAr: [],
};
// mảng để chứa giỏ hàng 

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.BUY_PRODUCT:
      const productInCart = state.cartAr.find(   // câu lệnh này xét lại giỏ hàng xem thử sản phẩm hiện tại có tồn tại trong giỏ hàng hay chưa 
        (p) => p.id === action.payload.id        // nó sẽ kiểm tra xem cái sp có chứa cái id khớm với action.payload.id mà ta đã chuyền thông quá actinos
      );
      if (!productInCart) {  // xử lý sản phẩn chưa tồn tại trong giỏ hàng
        return {
          cartAr: [...state.cartAr, action.payload], // 
        };
      } else {     // sp đã tồn tại trong giỏ hàng 
        let newcart = state.cartAr;    // biến này để lưu  chữ cái giỏ hàng 
        const objIndex = newcart.findIndex(  // đi tìm ví trí  
          (obj) => obj.id === action.payload.id  // để thây đổi sp trong giỏ hàng 
        );
        if (newcart[objIndex].quantity === undefined) { // ta xét số lượng mới thêm 1 lần thì undefined
          newcart[objIndex].quantity = 2;
        } else {
          newcart[objIndex].quantity = newcart[objIndex].quantity + 1; 
        }

        return { cartAr: [...newcart] };
      }
    case actionType.DELETE_PRODUCT:
      let newcart = state.cartAr;
      const objIndex = newcart.findIndex((obj) => obj.id === action.payload.id);  // đi tìm ví trí sp cần xóa 
      newcart.splice(objIndex, 1);
      console.log(">>newcart", newcart);
      return { cartAr: [...newcart], totalprice: 0 };

    default:
      return state;
  }
};

export default cartReducer;
