import React, { useState, useEffect } from "react";
import axios from "axios";

const FilterComponent = ({ onCategoryFilterChange, onSizeFilterChange }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [sizeFilter, setSizeFilter] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "http://localhost:3001/api/product/getAll"
        );
        setProducts(response.data.data);
        setLoading(false);
      } catch (error) {
        setError("Không thể tải danh sách sản phẩm.");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleCategoryFilterChange = (type) => {
    setCategoryFilter(type);
    onCategoryFilterChange(type);
  };

  const handleSizeFilterChange = (size) => {
    setSizeFilter(size);
    onSizeFilterChange(size);
  };

  return (
    <div className="sidebar-wrapper">
      {/* Widget: Loại sản phẩm */}
      <div className="widget">
        <h3 className="widget-title">
          <a
            data-toggle="collapse"
            href="#widget-body-1"
            role="button"
            aria-expanded="true"
            aria-controls="widget-body-1"
          >
            Loại sản phẩm
          </a>
        </h3>
        <div className="collapse show" id="widget-body-1">
          <div className="widget-body">
            <ul className="cat-list">
              <li>
                <a
                  href="#"
                  onClick={() => handleCategoryFilterChange("")}
                  className={categoryFilter === "" ? "active" : ""}
                >
                  Tất cả | All{" "}
                  <span className="products-count">{products.length}</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => handleCategoryFilterChange("Váy")}
                  className={categoryFilter === "Váy" ? "active" : ""}
                >
                  Váy | Dresses{" "}
                  <span className="products-count">
                    {products.filter((p) => p.type === "Váy").length}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => handleCategoryFilterChange("Áo mùa hè")}
                  className={categoryFilter === "Áo mùa hè" ? "active" : ""}
                >
                  Áo mùa hè | Summer Tops{" "}
                  <span className="products-count">
                    {products.filter((p) => p.type === "Áo mùa hè").length}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => handleCategoryFilterChange("Túi")}
                  className={categoryFilter === "Túi" ? "active" : ""}
                >
                  Túi xách | Bags{" "}
                  <span className="products-count">
                    {products.filter((p) => p.type === "Túi").length}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => handleCategoryFilterChange("Quần")}
                  className={categoryFilter === "Quần" ? "active" : ""}
                >
                  Quần | Pants{" "}
                  <span className="products-count">
                    {products.filter((p) => p.type === "Quần").length}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => handleCategoryFilterChange("Phụ kiện khác")}
                  className={categoryFilter === "Phụ kiện khác" ? "active" : ""}
                >
                  Phụ kiện khác | Accessories{" "}
                  <span className="products-count">
                    {products.filter((p) => p.type === "Phụ kiện khác").length}
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Widget: Sizes */}
      <div className="widget">
        <h3 className="widget-title">
          <a
            data-toggle="collapse"
            href="#widget-body-4"
            role="button"
            aria-expanded="true"
            aria-controls="widget-body-4"
          >
            Sizes
          </a>
        </h3>
        <div className="collapse show" id="widget-body-4">
          <div className="widget-body">
            <ul className="cat-list">
              <li>
                <a
                  href="#"
                  onClick={() => handleSizeFilterChange("S")}
                  className={sizeFilter === "S" ? "active" : ""}
                >
                  S
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => handleSizeFilterChange("M")}
                  className={sizeFilter === "M" ? "active" : ""}
                >
                  M
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => handleSizeFilterChange("L")}
                  className={sizeFilter === "L" ? "active" : ""}
                >
                  L
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => handleSizeFilterChange("XL")}
                  className={sizeFilter === "XL" ? "active" : ""}
                >
                  XL
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => handleSizeFilterChange("XXL")}
                  className={sizeFilter === "XXL" ? "active" : ""}
                >
                  XXL
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;
