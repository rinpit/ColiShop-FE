import React from "react";
import "../../style/search.css";

const SearchComponent = ({ searchQuery, onSearchQueryChange }) => {
  return (
    <div className="header-right d-flex pr-0">
      <div className="header-search header-search-popup header-search-category text-right">
        <a href="#" className="search-toggle" role="button">
          <i className="icon-magnifier mr-2" />
          <span style={{ fontWeight: "500" }}>Tìm kiếm</span>
        </a>
        <form action="#" method="get">
          <div className="header-search-wrapper">
            <input
              type="search"
              className="form-control"
              value={searchQuery}
              onChange={(e) => onSearchQueryChange(e.target.value)}
              placeholder="Tìm kiếm sản phẩm..."
              required
            />
            <button
              className="btn icon-magnifier p-0"
              title="search"
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchComponent;
