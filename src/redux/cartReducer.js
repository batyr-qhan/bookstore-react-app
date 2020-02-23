import Item1 from "../images/book1.jpg";
import Item2 from "../images/book2.jpg";
import Item3 from "../images/book3.jpg";
import Item4 from "../images/book4.jpg";
import Item5 from "../images/book5.jpeg";
import Item6 from "../images/book6.jpeg";

import { ADD_TO_CART } from "./action-types";
import { act } from "react-dom/test-utils";

const initState = {
  items: [
    {
      id: 1,
      title: "Such a fun age",
      price: 110,
      img: Item1
    },
    {
      id: 2,
      title: "World Records",
      price: 210,
      img: Item2
    },
    {
      id: 3,
      title: "Cherry",
      price: 10,
      img: Item3
    },
    {
      id: 4,
      title: "Book Cover",
      price: 50,
      img: Item4
    },
    {
      id: 5,
      title: "Jaws",
      price: 30,
      img: Item5
    },
    {
      id: 6,
      title: "Very Nice",
      price: 20,
      img: Item6
    }
  ],
  addedItems: [],
  total: 0
};

const cartReducer = (state = initState, action) => {
  if (action.type === ADD_TO_CART) {
    let addedItem = state.items.find(item => item.id === action.id);
    let existed_item = state.addedItems.find(item => action.id === item.id);

    if (existed_item) {
      addedItem.quantity += 1;
      return {
        ...state,
        total: state.total + addedItem.price
      };
    } else {
      addedItem.quantity = 1;
      let newTotal = state.total + addedItem.price;

      return {
        ...state,
        addedItems: [...state.addedItems, addedItem],
        total: newTotal
      };
    }
  } else return state;
};

export default cartReducer;
