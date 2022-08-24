// (2)The total price of five products that are introduced by the user,
//one the total price is computed (added), they need to see the IVA value of that total, (not the total price, only the IVA).

function CalIVA() {

  const productPrice = {
    product1: parseFloat(document.getElementById("product1").value),
    product2: parseFloat(document.getElementById("product2").value),
    product3: parseFloat(document.getElementById("product3").value),
    product4: parseFloat(document.getElementById("product4").value),
    product5: parseFloat(document.getElementById("product5").value),
  };
  console.log(productPrice);
  alert(
    "The IVA is: $" +
      (
        (productPrice.product1 +
          productPrice.product2 +
          productPrice.product3 +
          productPrice.product4 +
          productPrice.product5) *
        0.12
      ).toFixed(2)
  );
}
