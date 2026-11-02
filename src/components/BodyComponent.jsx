import { Card } from "./Card";
import BodyCSS from "./BodyComponent.module.css";
import { useEffect, useState } from "react";
import { ProductTabs } from "./ProductTabs";


//static data for testing
// const products = [
//     {name: "Product 1", rating: 4.5, price: 999},
//     {name: "Product 2", rating: 4.0, price: 1499},
//     {name: "Product 3", rating: 4.8, price: 1999},
//     {name: "Product 4", rating: 4.2, price: 799}
// ]


// const productsJson = await fetch("https://dummyjson.com/products/category/mens-shoes");
// const data = await productsJson.json();
// const products = data.products;
// console.log(products);


export const BodyComponent = () => {

    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("mens-shoes");

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    }

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`https://dummyjson.com/products/category/${selectedCategory}`);
                const data = await response.json();
                setProducts(data.products);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, [selectedCategory])
    return(
        <div>
            <div>
                <ProductTabs onCategoryChange={handleCategoryChange} />
            </div>
            <div className={BodyCSS.body_container}>
                {products.map(product => <Card key={product.id} {...product} />)}
            </div>
        </div>
    )
}