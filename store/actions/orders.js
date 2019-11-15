export const ADD_ORDER = 'ADD_ORDER';
//koliko ih imam i ukupni iznos
export const addOrder = (cartItems, totalAmount) => {
  return {
    type: ADD_ORDER,
    orderData: { items: cartItems, amount: totalAmount }
  };
};
