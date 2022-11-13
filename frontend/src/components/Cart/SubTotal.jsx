const Subtotal = ({ product }) => {
  let sum = 0;
  product.forEach((item) => {
    sum += +item.price.slice(1) * item.qty;
  });

  return sum;
};
export { Subtotal };
