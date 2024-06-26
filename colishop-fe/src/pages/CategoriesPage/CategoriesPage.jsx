import React, { useState, useEffect } from "react";
import axios from "axios";
import CategoriesComponent from "../../components/CategoriesComponent/CategoriesComponent";
import SearchComponent from "../../components/ProductComponent/SearchComponent";
import FilterComponent from "./FilterComponent";

const CategoriesPage = () => {
  const [categoryFilter, setCategoryFilter] = useState("");
  const [sizeFilter, setSizeFilter] = useState("");
  const [brandFilter, setBrandFilter] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);
  const [sortOrder, setSortOrder] = useState("default");
  const [searchQuery, setSearchQuery] = useState("");

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
        setError("Unable to load products.");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleCategoryFilterChange = (type) => {
    setCategoryFilter(type);
    setCurrentPage(1);
  };

  const handleSizeFilterChange = (size) => {
    setSizeFilter(size);
    setCurrentPage(1);
  };

  const handleBrandFilterChange = (brand) => {
    setBrandFilter(brand);
    setCurrentPage(1);
  };

  const handleSearchQueryChange = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Filter products based on search query, category, and size
  const filteredProducts = products.filter((product) => {
    return (
      (!categoryFilter || product.category.includes(categoryFilter)) &&
      (!sizeFilter || product.size.includes(sizeFilter)) &&
      (!searchQuery ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  });

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
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                      <line x1={15} x2={26} y1={9} y2={9} />
                      <line x1={6} x2={9} y1={9} y2={9} />
                      <line x1={23} x2={26} y1={16} y2={16} />
                      <line x1={6} x2={17} y1={16} y2={16} />
                      <line x1={17} x2={26} y1={23} y2={23} />
                      <line x1={6} x2={11} y1={23} y2={23} />
                      <path d="M14.5,8.92A2.6,2.6,0,0,1,12,11.5,2.6,2.6,0,0,1,9.5,8.92a2.5,2.5,0,0,1,5,0Z" />
                      <path d="M22.5,15.92a2.5,2.5,0,1,1-5,0,2.5,2.5,0,0,1,5,0Z" />
                      <path d="M21,16a1,1,0,1,1-2,0,1,1,0,0,1,2,0Z" />
                      <path d="M16.5,22.92A2.6,2.6,0,0,1,14,25.5a2.6,2.6,0,0,1-2.5-2.58,2.5,2.5,0,0,1,5,0Z" />
                    </svg>
                    <span>Filter</span>
                  </button>

                  <div className="toolbox-item toolbox-sort">
                    <form>
                      <label style={{ paddingBottom: "10px" }}>PHÂN LOẠI</label>

                      <div className="select-custom">
                        <select
                          name="sort"
                          className="form-control"
                          id="sort"
                          onChange={handleSortChange}
                        >
                          <option value="default" selected="selected">
                            Mới nhất
                          </option>
                          <option value="lowest">Giá thấp đến cao</option>
                          <option value="highest">Giá cao đến thấp</option>
                          <option value="aToz">Từ A đến Z</option>
                          <option value="zToa">Từ Z đến A</option>
                        </select>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="toolbox-right">
                  <SearchComponent
                    searchQuery={searchQuery}
                    onSearchQueryChange={handleSearchQueryChange}
                  />
                </div>
              </nav>
              <div className="row">
                <CategoriesComponent
                  products={products}
                  categoryFilter={categoryFilter}
                  sizeFilter={sizeFilter}
                  brandFilter={brandFilter}
                  sortOrder={sortOrder}
                  loading={loading}
                  error={error}
                  currentPage={currentPage}
                  productsPerPage={12}
                  paginate={paginate}
                  searchQuery={searchQuery}
                />
              </div>
            </div>
            <div className="sidebar-overlay" />
            <aside className="sidebar-shop col-lg-3 order-lg-first mobile-sidebar">
              <FilterComponent
                onCategoryFilterChange={handleCategoryFilterChange}
                onSizeFilterChange={handleSizeFilterChange}
                onBrandFilterChange={handleBrandFilterChange}
              />
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CategoriesPage;
