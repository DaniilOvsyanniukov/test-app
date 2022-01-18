const getProducts = (state) => state.products.products;
const getInputValue = (state) => state.data.inputValue;

const selectors = { getProducts, getInputValue};

export default selectors;