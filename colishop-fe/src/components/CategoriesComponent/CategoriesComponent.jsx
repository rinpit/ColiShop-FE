import React, { useMemo } from "react";

const CategoriesComponent = ({
  products,
  categoryFilter,
  sizeFilter,
  brandFilter,
  searchQuery,
  sortOrder,
  loading,
  error,
  currentPage,
  productsPerPage,
  paginate,
}) => {
  const formatPrice = (price) => {
    return price.toLocaleString("vi-VN");
  };

  // Filter products based on category and size
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = categoryFilter
        ? product.type === categoryFilter
        : true;
      const matchesSize = sizeFilter ? product.size.includes(sizeFilter) : true;
      const matchesBrand = brandFilter
        ? product.brand.includes(brandFilter)
        : true;
      const matchesSearch = searchQuery
        ? product.name.toLowerCase().includes(searchQuery.toLowerCase())
        : true;
      return matchesCategory && matchesSize && matchesBrand && matchesSearch;
    });
  }, [products, categoryFilter, sizeFilter, brandFilter, searchQuery]);

  // Sort products based on sortOrder
  const sortedProducts = useMemo(() => {
    switch (sortOrder) {
      case "lowest":
        return [...filteredProducts].sort((a, b) => a.price - b.price);
      case "highest":
        return [...filteredProducts].sort((a, b) => b.price - a.price);
      case "aToz":
        return [...filteredProducts].sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      case "zToa":
        return [...filteredProducts].sort((a, b) =>
          b.name.localeCompare(a.name)
        );
      default:
        return filteredProducts;
    }
  }, [filteredProducts, sortOrder]);

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  if (loading) {
    return <div className="loading-message">Đang tải...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="col-lg-12">
      <div className="row">
        {currentProducts.map((product) => (
          <div key={product._id} className="col-6 col-sm-4 col-lg-3">
            <div className="product-default inner-quickview inner-icon">
              <figure>
                <a href="demo23-product.html">
                  <img
                    src={product.image}
                    width={217}
                    height={217}
                    alt={product.name}
                  />
                </a>
                <div className="label-group">
                  {product.hot && (
                    <div className="product-label label-hot">HOT</div>
                  )}
                  {product.sale && (
                    <div className="product-label label-sale">-13%</div>
                  )}
                </div>
                <div className="btn-icon-group">
                  <button
                    onClick={() => {
                      /* add to cart logic */
                    }}
                    className="btn-icon btn-add-cart product-type-simple"
                    aria-label={`Add ${product.name} to cart`}
                  >
                    <i className="icon-shopping-cart" />
                  </button>
                </div>
                <button
                  className="btn-quickview"
                  title="Quick View"
                  aria-label={`Quick view of ${product.name}`}
                >
                  Quick View
                </button>
              </figure>
              <div className="product-details">
                <div className="category-wrap">
                  <div className="category-list">
                    <a href="#" className="product-category">
                      {product.category}
                    </a>
                  </div>
                </div>
                <h3 className="product-title">
                  <a href="demo23-product.html">{product.name}</a>
                </h3>
                <div className="price-box">
                  <span className="product-price">
                    {formatPrice(product.price)} VNĐ
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Pagination */}
      <div className="pagination-wrapper">
        <ul className="pagination">
          {Array.from(
            { length: Math.ceil(sortedProducts.length / productsPerPage) },
            (_, index) => (
              <li
                key={index}
                className={`page-item ${
                  currentPage === index + 1 ? "active" : ""
                }`}
              >
                <button
                  onClick={() => paginate(index + 1)}
                  className="page-link"
                >
                  {index + 1}
                </button>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default CategoriesComponent;
