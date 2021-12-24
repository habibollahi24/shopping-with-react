const shorten = (title) => {
  const splited = title.split(" ");
  return `${splited[0]} ${splited[1]}`;
};

const isInCart = (state, id) => {
  const findedItem = state.cartItem.findIndex((item) => item.id === id);
  if (findedItem === -1) {
    return true;
  } else {
    return false;
  }
};
const isOneItemInCart = (state, id) => {
  const findedIndex = state.cartItem.findIndex((item) => item.id === id);
  if (findedIndex === -1) {
    return false;
  } else {
    return state.cartItem[findedIndex].quantity;
  }
};
export { shorten, isInCart, isOneItemInCart };
