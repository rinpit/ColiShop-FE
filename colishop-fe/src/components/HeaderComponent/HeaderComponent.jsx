import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Popover } from "antd";
import { WrapperContenPopup } from "./style";
import * as UserService from "../../services/UserServices"
import { resetUser } from "../../redux/slices/userSlice";
import { searchProduct } from "../../redux/slices/productSlice";
import Loading from "../LoadingComponent/Loading";

// import searchProduct from "../../redux/slices/productSlice"
const HeaderComponent = () => {
  const navigate = useNavigate();
  const dispathch = useDispatch();
  const handleNavigateLogin = () => {
    navigate('/signin');
  }
  const [userName, setUserName] = useState('')
  const [userAvatar, setUserAvatar] = useState('')
  const [loading, setLoading] = useState(false)
  //khai báo useState của search
  const [search, setSearch] = useState('')


  const user = useSelector((state) => state.user)
  // console.log("user", user)
  // kiểm tra có phải là admin hay không? 
  // if (user && 'isAdmin' in user) {
  //   console.log("idAdmin exists:", user.isAdmin);
  // } else {
  //   console.log("idAdmin does not exist in user");
  // }

  const handleLogout = async () => {
    setLoading(true)
    await UserService.logoutUser();
    localStorage.removeItem('access_token'); //xoá access_token đi chớ để chi :v
    dispathch(resetUser());
    setLoading(false)
  }

  useEffect(() => {
    // setLoading(true)
    setUserName(user?.name)
    setUserAvatar(user?.avatar)
    // setLoading(false)
  }, [user?.name, user?.avatar])


  const content = (
    <div>
      <WrapperContenPopup onClick={() => navigate('/profile-user')}>Thông tin cá nhân</WrapperContenPopup>
      {user?.isAdmin && (
        <WrapperContenPopup onClick={() => navigate('/system/admin')}>Quản Lý Hệ Thống</WrapperContenPopup>
      )}
      <WrapperContenPopup onClick={handleLogout}>Đăng Xuất</WrapperContenPopup>
    </div>
  );


  // onChange={onSearch} khi nhập input để search
  const onSearch = (e) => {
    setSearch(e.target.value)
    // truyền đi giá trị được nhập vào redux
    dispathch(searchProduct(e.target.value))
    // console.log("e", e.target.value)
  }


  return (
    <div className="page-wrapper">
      <header className="header">

        <div className="header-middle sticky-header" data-sticky-options="{'mobile': true}" >
          <div className="container-fluid">
            <div className="header-left d-none d-lg-flex">
            </div>

            <div className="header-center ml-0 ml-lg-auto">
              <img
                src="/assets/images/coli/coli-logo.png"
                alt="Coli Logo"
                width={150}
                height={50}
                onClick={() => {
                  navigate('/')
                }}
                style={{ cursor: 'pointer' }}
              />
            </div>

            <div className="header-right">
              <div className="header-icon d-lg-block d-none">
                <Loading isLoading={loading}>
                  <div className="header-user">
                    {userAvatar ? (
                      <img src={userAvatar} alt="avatar" style={{
                        height: '40px',
                        width: '40px',
                        borderRadius: '50%',
                        objectFit: 'cover'
                      }} />
                    ) : (
                      <i className="icon-user-2" />
                    )}

                    {user?.access_token ? (
                      <>
                        <Popover content={content} trigger="click">
                          <div>Hello, {user?.name}</div>
                        </Popover>
                      </>
                    ) : (

                      <div className="header-userinfo" >
                        <span className="d-inline-block font2 line-height-1">
                        </span>
                        <h4 onClick={handleNavigateLogin} className="mb-0">Đăng Nhập/Đăng ký</h4>
                      </div>
                    )}

                  </div>
                </Loading>
              </div>
              <a href="/wishlist" className="header-icon">
                <i className="icon-wishlist-2" />
              </a>

              <div className="dropdown cart-dropdown">
                <a
                  href="/cart"
                  title="Cart"
                  className="dropdown-toggle cart-toggle"
                >
                  <i className="minicart-icon" />
                  <span className="cart-count badge-circle">3</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="header-bottom sticky-header" data-sticky-options="{'mobile': false}">
          <div className="container-fluid">
            <div className="header-left d-flex">
              <nav className="main-nav">
                <ul className="menu"></ul>
              </nav>
            </div>

            <div className="header-center w-auto">
              <nav className="main-nav">
                <ul className="menu">
                  <li>
                    {/* className="active" */}
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/categories">Categories</a>
                  </li>
                  <li>
                    <a href="/blog">Blog</a>
                  </li>
                  <li>
                    <a href="/aboutus">About Us</a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="header-right d-flex pr-0">
              <div className="header-search header-search-popup header-search-category text-right">
                <a href="#" className="search-toggle" role="button">
                  {/* icon search */}
                  <i className="icon-magnifier mr-2" />
                  <span>Search</span>
                </a>

                <form action="#" method="get">
                  <div className="header-search-wrapper">
                    <input
                      type="search"
                      className="form-control"
                      placeholder="Nhập sản phẩm cần tìm kiếm ...."
                      required
                      onChange={onSearch}
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
          </div>
        </div>

      </header >

    </div >
  );
};

export default HeaderComponent;
