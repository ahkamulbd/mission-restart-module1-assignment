// console.log("Hello Assignment");

const productsUrl = `https://fakestoreapi.com/products`;

const loadProducts = () => {
    fetch(productsUrl)
        .then(res => res.json())
        .then(data => console.log(data))
}
loadProducts();