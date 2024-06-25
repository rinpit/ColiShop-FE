import React, { useState, useEffect } from "react";
import axios from "axios";
import CategoriesComponent from "../../components/CategoriesComponent/CategoriesComponent";
import FilterComponent from "./FilterComponent";

const CategoriesPage = () => {
  const [categoryFilter, setCategoryFilter] = useState("");
  const [sizeFilter, setSizeFilter] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12); // Số lượng sản phẩm trên mỗi trang

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
    setCurrentPage(1); // Reset currentPage về 1 khi thay đổi bộ lọc
  };

  const handleSizeFilterChange = (size) => {
    setSizeFilter(size);
    setCurrentPage(1); // Reset currentPage về 1 khi thay đổi bộ lọc
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="page-wrapper">
      <main className="main">
        <nav aria-label="breadcrumb" className="breadcrumb-nav">
          <div className="container">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="demo23.html">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Categories
              </li>
            </ol>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 main-content">
              <nav
                className="toolbox sticky-header"
                data-sticky-options="{'mobile': true}"
              >
                <div className="toolbox-left">
                  <button className="sidebar-toggle">
                    <svg
                      data-name="Layer 3"
                      id="Layer_3"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line x1={15} x2={26} y1={9} y2={9} className="cls-1" />
                      <line x1={6} x2={9} y1={9} y2={9} className="cls-1" />
                      <line x1={23} x2={26} y1={16} y2={16} className="cls-1" />
                      <line x1={6} x2={17} y1={16} y2={16} className="cls-1" />
                      <line x1={17} x2={26} y1={23} y2={23} className="cls-1" />
                      <line x1={6} x2={11} y1={23} y2={23} className="cls-1" />
                      <path
                        d="M14.5,8.92A2.6,2.6,0,0,1,12,11.5,2.6,2.6,0,0,1,9.5,8.92a2.5,2.5,0,0,1,5,0Z"
                        className="cls-2"
                      />
                      <path
                        d="M22.5,15.92a2.5,2.5,0,1,1-5,0,2.5,2.5,0,0,1,5,0Z"
                        className="cls-2"
                      ></path>
                      <path
                        d="M21,16a1,1,0,1,1-2,0,1,1,0,0,1,2,0Z"
                        className="cls-3"
                      />
                      <path
                        d="M16.5,22.92A2.6,2.6,0,0,1,14,25.5a2.6,2.6,0,0,1-2.5-2.58,2.5,2.5,0,0,1,5,0Z"
                        className="cls-2"
                      />
                    </svg>
                    <span>Filter</span>
                  </button>
                  <div className="toolbox-item toolbox-sort">
                    <label>Sort By:</label>
                    <div className="select-custom">
                      <select name="orderby" className="form-control">
                        <option value="menu_order" selected="selected">
                          Default sorting
                        </option>
                        <option value="popularity">Sort by popularity</option>
                        <option value="rating">Sort by average rating</option>
                        <option value="date">Sort by newness</option>
                        <option value="price">
                          Sort by price: low to high
                        </option>
                        <option value="price-desc">
                          Sort by price: high to low
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </nav>
              <div className="row">
                <CategoriesComponent
                  products={products}
                  categoryFilter={categoryFilter}
                  sizeFilter={sizeFilter}
                  loading={loading}
                  error={error}
                  currentPage={currentPage}
                  productsPerPage={12}
                  paginate={paginate}
                />
              </div>
            </div>

            <div className="sidebar-overlay" />
            <aside className="sidebar-shop col-lg-3 order-lg-first mobile-sidebar">
              <FilterComponent
                onCategoryFilterChange={handleCategoryFilterChange}
                onSizeFilterChange={handleSizeFilterChange}
              />
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CategoriesPage;
