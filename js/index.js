// console.log("Hello Assignment");

const productsUrl = `https://fakestoreapi.com/products`;

const loadProducts = () => {
    fetch(productsUrl)
        .then(res => res.json())
        // .then(data => console.log(data))
        .then(data => showTopRatedProducts(data))
}

const showTopRatedProducts = products => {
    // console.log(products[0].category);

    const trendingDiv = document.getElementById("trending-div");
    trendingDiv.innerHTML = "";

    const sortedProducts = [...products].sort(
        (a, b) => b.price - a.price
    );
    // console.log(sortedProducts);

    const thirdHighestPrice = sortedProducts[2].price;
    // console.log(thirdHighestPrice);

    const topThreeRatedProducts = products.filter(
        product => product.price >= thirdHighestPrice
    );
    // console.log(topThreeProducts);

    topThreeRatedProducts.forEach(product => {
        // console.log(product);

        const productCart = document.createElement("div");
        productCart.innerHTML = `
            <div class="card bg-base-100 w-96 shadow-sm">
                    <figure class="flex-col">
                        <img src="${product.image}" alt="Shoes height="500"" />
                    </figure>
                    <figcaption class="flex justify-between items-center mt-1 px-3">
                        <input class="text-blue-700 text-sm border p-1 rounded" type="button" value="${product.category}">
                        <p class="w-50 text-end"><i class="fa-solid fa-star text-yellow-600"></i> ${product.rating.rate} <span>(${product.rating.count})</span></p>
                    </figcaption>
                    <div class="card-body">
                        <h4 class="text-xl truncate">${product.title}</h4>
                        <h4 class="text-xl font-bold">$ ${product.price}</h4>

                        <div class="card-actions justify-between mt-5 mb-2">
                            <button class="btn btn-outline w-40"><i class="fa-regular fa-eye"></i> Details</button>
                            <button class="btn btn-primary w-40"><i class="fa-solid fa-cart-shopping"></i> Add</button>
                        </div>
                    </div>
            </div>
        `
        trendingDiv.appendChild(productCart);
    });

}

loadProducts();


/** ================= Scripts for Showing All Products ====================== */

const loadAllProducts = () => {
    fetch(productsUrl)
        .then(res => res.json())
        // .then(data => console.log(data))
        .then(data => showAllProduct(data))
}

const showAllProduct = products => {
    const productsDiv = document.getElementById("products-div");
    productsDiv.innerHTML = "";

    products.forEach(product => {
        // console.log(product);

        const productCart = document.createElement("div");
        productCart.innerHTML = `
            <div class="card bg-base-100 w-96 shadow-sm">
                    <figure class="flex-col">
                        <img src="${product.image}" alt="Shoes height="500"" />
                    </figure>
                    <figcaption class="flex justify-between items-center mt-1 px-3">
                        <input class="text-blue-700 text-sm border p-1 rounded" type="button" value="${product.category}">
                        <p class="w-50 text-end"><i class="fa-solid fa-star text-yellow-600"></i> ${product.rating.rate} <span>(${product.rating.count})</span></p>
                    </figcaption>
                    <div class="card-body">
                        <h4 class="text-xl truncate">${product.title}</h4>
                        <h4 class="text-xl font-bold">$ ${product.price}</h4>

                        <div class="card-actions justify-between mt-5 mb-2">
                            <button class="btn btn-outline w-25"><i class="fa-regular fa-eye"></i> Details</button>
                            <button class="btn btn-primary w-25"><i class="fa-solid fa-cart-shopping"></i> Add</button>
                        </div>
                    </div>
            </div>
        `
        productsDiv.appendChild(productCart);
    });
}

loadAllProducts();

// const numbers = [1, 2, 3, 4];

// numbers.forEach(num => {
//     console.log(num);
// });

// let a = 10;

// if (a >= 10) {
//     let b = 20;
//     console.log("True");     // output - True;
//     console.log(b);         // output - 20;
// }
// console.log(b);             // output - error

// function herName(a) {
//     let b = 10;
//     let sum = a + b;

//     return sum;
// }
// console.log(herName(20));       // output - 30;
// console.log(b);                 // output - error