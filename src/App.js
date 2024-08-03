import { useState } from "react";
import CreateProduct from "./CreateProudct"; 
import SearchBar from "./SearchBar";
import ProductsTable from "./ProductsTable";
import "./App.css";
import WarningMessage from "./WarningMessage";

const key = "products";
let initialProducts = JSON.parse(localStorage.getItem(key)) || [];

function App() {
  const [products, setProducts] = useState(initialProducts);
  const [editingProduct, setEditingProduct] = useState(null);

  const setProductsAndLocal = (products) => {
    localStorage.setItem(key, JSON.stringify(products));
    initialProducts =products;
    setProducts(products);
  };

  const addProduct = (product) => {
    const newProducts = [...initialProducts];
    if (product.id) {
      const updatedProducts = newProducts.map(p =>
        p.id === product.id ? product : p
      );
      console.log(updatedProducts);
      setProductsAndLocal(updatedProducts);
    } else {
      product.id = Date.now().toString();
      newProducts.push(product);
      setProductsAndLocal(newProducts);
    }
    setEditingProduct(null);
  
  };
 
  const handleEditProduct = (product) => {
    setEditingProduct(product);
  };

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(value)
    );
  
    if (filteredProducts.length === 0 ) {
      setProducts(initialProducts);
      alert("no result"); 
    } 
    else if(value === "") {
      setProducts(initialProducts); 
      console.log(initialProducts);
    }
    else {
      setProducts(filteredProducts);
    }
  };
  
  // complete from here
  const handelDelete = (index)=>{
    const updatedProducts = JSON.parse(localStorage.getItem(key)).filter((product) => product.id !== index);
    setProductsAndLocal(updatedProducts);
 
  }

  return (
    <>
      {editingProduct ? (
        <CreateProduct
          addProduct={addProduct}
          product={editingProduct}
          setEditingProduct={setEditingProduct}
        />
      ) : (
        <CreateProduct addProduct={addProduct} />
      )}
      {products.length > 0 ? (
        <SearchBar handleSearch={handleSearch} />
      ) : null}

      {products.length > 0 ? (
        <ProductsTable
          products={products}
          onEdit={handleEditProduct}
          handelDelete={handelDelete}
        />
      ) : (
        <WarningMessage />
      )}
    </>
  );
}

export default App;
