import { fetchAPI } from "./helpers/fetchapi.js";

// const fetchAPI = (url) => {
//     const result = fetch(url)
//         .then(response => response.json())
//         .then(data => {
//             return data;
//         });
//     return result;
// }

//Get Category
fetchAPI("https://dummyjson.com/products/categories")
    .then(data => {
        let htmls = "";
        data.forEach((item) => {
            htmls += `
                <div class="category-item">${item.name}</div>
            `;
        });
        // console.log(htmls);
        const divCategory = document.querySelector("#category");
        divCategory.innerHTML = htmls;
    });
// //End Get Category

// //Get Product
fetchAPI("https://dummyjson.com/products")
    .then((data) => {
        // console.log(data.products);
        let htmls = "";
        data.products.forEach((item) => {
            htmls += `
                <div class="product-item">
                    <img src="${item.thumbnail}" alt="${item.title}">
                    <h3>${item.title}</h3>
                    <p>${item.price}</p>
                </div>
            `;
        });
        const divProductList = document.querySelector("#product-list");
        divProductList.innerHTML = htmls;
    });
//End Get Product


