import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

async function fetchData(urlAPI) {
  const response = await fetch(urlAPI);
  const data = await response.json();
  return data;
}

async function* iterateData(urlAPI) {
  try {
    const products = await fetchData(`${urlAPI}/products`);
    console.log(products);

    const product = await fetchData(`${urlAPI}/products/${products[0].id}`);
    console.log(product.title);

    const category = await fetchData(
      `${urlAPI}/categories/${product.category.id}`
    );
    console.log(category.name);
  } catch (error) {
    throw new Error(error);
  }
}

const gen = iterateData(API);
gen.next().value;
gen.next().value;
gen.next().value;
