import { createContext, useReducer, useContext } from "react";
import { faker } from 'https://cdn.skypack.dev/@faker-js/faker';
import { cartReducer, productReducer } from "./Reducers";

const Cart = createContext();

const Context = ({ children }) => {
    const products = [...Array(10)].map(() => ({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.random.image(),
        inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    }))
    // console.log(products)
    const [state, dispatch] = useReducer(cartReducer, {
        products: products,
        cart: [],
    });

    const [productState, productDispatch] = useReducer(productReducer, {
        byStock: false,
        searchQuery: "",
      });

    return (
        <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
          {children}
        </Cart.Provider>
    );
};

export const CartState = () => {
    return useContext(Cart);
};

export default Context;