import { useState, useEffect } from "react";

export default function CreateProduct({ addProduct, product, setEditingProduct }) {
  const [productState, setProductState] = useState({
    id: "",
    name: "",
    cat: "",
    price: "",
    description: "",
  });

  useEffect(() => {
    if (product) {
      setProductState(product);
    }
  }, [product]);

  function handleSubmit(e) {
    e.preventDefault();
    addProduct(productState);
    setProductState({
      id: "",
      name: "",
      cat: "",
      price: "",
      description: "",
    });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setProductState(prevProduct => ({
      ...prevProduct,
      [name]: value,
    }));
  }

  return (
    <div className="w-75 mx-auto py-5 px-3 rounded-3 shadow-lg mt-5">
      <h1>{product ? "Update Product" : "Create Product"}</h1>
      <form id="product-form" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="product_name" className="form-label">
            Product Name
          </label>
          <input
            type="text"
            className="form-control"
            id="product_name"
            placeholder="Product Name"
            value={productState.name}
            name="name"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="product_category" className="form-label">
            Product Category
          </label>
          <input
            type="text"
            className="form-control"
            id="product_category"
            placeholder="Product Category"
            name="cat"
            value={productState.cat}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="product_price" className="form-label">
            Product Price
          </label>
          <input
            required
            type="text"
            className="form-control"
            id="product_price"
            placeholder="Product Price"
            name="price"
            value={productState.price}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="product_desc" className="form-label">
            Product Description
          </label>
          <textarea
            className="form-control"
            id="product_desc"
            rows={3}
            required
            value={productState.description}
            name="description"
            onChange={handleChange}
          />
        </div>
        <button id="create-btn" className="btn btn-primary" type="submit">
          {product ? "Update Product" : "Add Product"}
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => {
            setProductState({
              id: "",
              name: "",
              cat: "",
              price: "",
              description: "",
            });
            setEditingProduct(null); // Clear editing state
          }}
        >
          Clear
        </button>
      </form>
    </div>
  );
}
