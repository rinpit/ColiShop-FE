import React, { useState, useEffect } from "react";
import axios from "axios";

const FilterComponent = ({
  onCategoryFilterChange,
  onSizeFilterChange,
  onBrandFilterChange,
}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [sizeFilter, setSizeFilter] = useState("");
  const [brandFilter, setBrandFilter] = useState("");

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

  const handleBrandFilterChange = (brand) => {
    setBrandFilter(brand);
    onBrandFilterChange(brand);
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
            Kích Cỡ
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

              <li>
                <a
                  href="#"
                  onClick={() => handleSizeFilterChange("Freesize")}
                  className={sizeFilter === "Freesize" ? "active" : ""}
                >
                  Freesize
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="widget">
        <h3 className="widget-title">
          <a
            data-toggle="collapse"
            href="#widget-body-4"
            role="button"
            aria-expanded="true"
            aria-controls="widget-body-4"
          >
            Thương Hiệu
          </a>
        </h3>
        <div className="collapse show" id="widget-body-4">
          <div className="widget-body">
            <ul className="cat-list">
              <li>
                <a
                  href="#"
                  onClick={() => handleBrandFilterChange("Uniqlo")}
                  className={sizeFilter === "Uniqlo" ? "active" : ""}
                >
                  Uniqlo
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => handleBrandFilterChange("Rechic")}
                  className={sizeFilter === "Rechic" ? "active" : ""}
                >
                  Rechic
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => handleBrandFilterChange("20Again")}
                  className={sizeFilter === "20Again" ? "active" : ""}
                >
                  20Again
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => handleBrandFilterChange("NEM")}
                  className={sizeFilter === "NEM" ? "active" : ""}
                >
                  NEM
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => handleBrandFilterChange("Mango")}
                  className={sizeFilter === "Mango" ? "active" : ""}
                >
                  Mango
                </a>
              </li>

              <li>
                <a
                  href="#"
                  onClick={() => handleBrandFilterChange("HM")}
                  className={sizeFilter === "HM" ? "active" : ""}
                >
                  HM
                </a>
              </li>

              <li>
                <a
                  href="#"
                  onClick={() => handleBrandFilterChange("Elise")}
                  className={sizeFilter === "Elise" ? "active" : ""}
                >
                  Elise
                </a>
              </li>

              <li>
                <a
                  href="#"
                  onClick={() => handleBrandFilterChange("Aldo")}
                  className={sizeFilter === "Aldo" ? "active" : ""}
                >
                  Aldo
                </a>
              </li>

              <li>
                <a
                  href="#"
                  onClick={() => handleBrandFilterChange("Juno")}
                  className={sizeFilter === "Juno" ? "active" : ""}
                >
                  Juno
                </a>
              </li>

              <li>
                <a
                  href="#"
                  onClick={() => handleBrandFilterChange("Charle Keith")}
                  className={sizeFilter === "Charle Keith" ? "active" : ""}
                >
                  Charle Keith
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => handleBrandFilterChange("LIBE")}
                  className={sizeFilter === "LIBE" ? "active" : ""}
                >
                  LIBE
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => handleBrandFilterChange("MÉO")}
                  className={sizeFilter === "MÉO" ? "active" : ""}
                >
                  MÉO
                </a>
              </li>

              <li>
                <a
                  href="#"
                  onClick={() => handleBrandFilterChange("Pull Bear")}
                  className={sizeFilter === "Pull Bear" ? "active" : ""}
                >
                  Pull Bear
                </a>
              </li>

              <li>
                <a
                  href="#"
                  onClick={() => handleBrandFilterChange("Mixxo")}
                  className={sizeFilter === "Mixxo" ? "active" : ""}
                >
                  Mixxo
                </a>
              </li>

              <li>
                <a
                  href="#"
                  onClick={() => handleBrandFilterChange("Cocosin")}
                  className={sizeFilter === "Cocosin" ? "active" : ""}
                >
                  Cocosin
                </a>
              </li>

              <li>
                <a
                  href="#"
                  onClick={() => handleBrandFilterChange("RaceJs")}
                  className={sizeFilter === "RaceJs" ? "active" : ""}
                >
                  RaceJs
                </a>
              </li>

              <li>
                <a
                  href="#"
                  onClick={() => handleBrandFilterChange("Thương hiệu khác")}
                  className={sizeFilter === "Thương hiệu khác" ? "active" : ""}
                >
                  Thương hiệu khác
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
