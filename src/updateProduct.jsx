// import React, { useState } from 'react';

// export default function UpdateProductForm({ product, onUpdate, onClose }) {
//   const [formProduct, setFormProduct] = useState(product);

//   function handleSubmit(event) {
//     event.preventDefault();
//     onUpdate(formProduct);
//   }

//   function handleChange(event) {
//     const { name, value } = event.target;
//     setFormProduct((prevProduct) => ({
//       ...prevProduct,
//       [name]: value,
//     }));
//   }

//   return (
//     <div className="w-75 mx-auto py-5 px-3 rounded-3 shadow-lg mt-5">
//       <h1>Update Product</h1>
//       <form id="product-form" onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label htmlFor="product_name" className="form-label">
//             Product Name
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="product_name"
//             placeholder="Product Name"
//             value={formProduct.name}
//             name="name"
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="product_category" className="form-label">
//             Product Category
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="product_category"
//             placeholder="Product Category"
//             name="cat"
//             value={formProduct.cat}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="product_price" className="form-label">
//             Product Price
//           </label>
//           <input
//             required
//             type="text"
//             className="form-control"
//             id="product_price"
//             placeholder="Product Price"
//             name="price"
//             value={formProduct.price}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="product_desc" className="form-label">
//             Product Description
//           </label>
//           <textarea
//             className="form-control"
//             id="product_desc"
//             rows={3}
//             required
//             value={formProduct.description}
//             name="description"
//             onChange={handleChange}
//           />
//         </div>
//         <button type="submit" className="btn btn-primary">
//           Update Product
//         </button>
//         <button type="button" className="btn btn-secondary" onClick={onClose}>
//           Cancel
//         </button>
//       </form>
//     </div>
//   );
// }
