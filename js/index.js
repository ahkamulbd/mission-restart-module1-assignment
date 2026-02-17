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



let arr = [44, 3, 88, 12, 0, 23, 100, 1, 45];

let element = arr.fi

// const topThree = [...arr]
//     .sort((a, b) => b - a)
//     .filter((_, index) => index < 3);

// console.log(topThree); // [100, 88, 45]