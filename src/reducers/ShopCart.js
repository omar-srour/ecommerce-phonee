
import { ADD_PRODUCT_TO_CART, INCREMENT_CART_ITEM_QUANTITY, DECREMENT_CART_ITEM_QUANTITY,REMOVE_PRODUCT_FROM_CART } from "../Action";
import products from "../Data/Phone";

const initialState = {
    products: products,
    cart: []
};

const shopCart = (state = initialState, action) => {
    let updatedCart;
    let updatedItemIndex;

    switch (action.type) {
        case ADD_PRODUCT_TO_CART:
            
            // قم بتحديث العربة باستخدام map
            updatedCart = state.cart.map(item =>
                item.id === action.payload.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );

            // تحقق إذا كان العنصر موجودًا في العربة
            const isItemInCart = state.cart.some(item => item.id === action.payload.id);

            // إعادة الحالة المحدثة
            return {
                ...state,
                cart: isItemInCart
                    ? updatedCart
                    : [...state.cart, { ...action.payload, quantity: 1 }]
            };

        case INCREMENT_CART_ITEM_QUANTITY:
            updatedCart = [...state.cart];
            updatedItemIndex = updatedCart.findIndex(
                item => item.id === action.payload
            );

            // تحقق إذا تم العثور على المنتج في العربة
            if (updatedItemIndex >= 0) {
                const incrementedItem = {
                    ...updatedCart[updatedItemIndex]
                };
                incrementedItem.quantity++;

                updatedCart[updatedItemIndex] = incrementedItem;
            }

            return { ...state, cart: updatedCart };

        case DECREMENT_CART_ITEM_QUANTITY:
            updatedCart = [...state.cart];
            updatedItemIndex = updatedCart.findIndex(
                item => item.id === action.payload
            );

            // تحقق إذا تم العثور على المنتج في العربة
            if (updatedItemIndex >= 0) {
                const decrementedItem = {
                    ...updatedCart[updatedItemIndex]
                };

                // لا تنقص الكمية إلى أقل من 1
                if (decrementedItem.quantity > 1) {
                    decrementedItem.quantity--;
                    updatedCart[updatedItemIndex] = decrementedItem;
                } else {
                    // إذا كانت الكمية 1 وأردت تقليلها، قم بإزالة العنصر من العربة
                    updatedCart = updatedCart.filter(item => item.id !== action.payload);
                }
            }

            return { ...state, cart: updatedCart };

            case REMOVE_PRODUCT_FROM_CART:
            updatedCart=[...state.cart]
            updatedItemIndex=updatedCart.findIndex(item=>item.id === action.payload );

            updatedCart.splice(updatedItemIndex,1);
            return {...state, cart: updatedCart};
        default:
            return state;
    }
};

export default shopCart;
































