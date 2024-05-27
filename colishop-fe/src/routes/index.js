import AboutUsPage from "../pages/AboutUsPage/AboutUsPage";
import BlogDetailPage from "../pages/BlogDetailPage/BlogDetailPage";
import BlogPage from "../pages/BlogPage/BlogPage";
import CartPage from "../pages/CartPage/CartPage";
import CategoriesPage from "../pages/CategoriesPage/CategoriesPage";
import CheckOutPage from "../pages/CheckOutPage/CheckOutPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage/ForgotPasswordPage";
import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import OrderPage from "../pages/OrderPage/OrderPage";
import ProductDetailPage from "../pages/ProductDetailPage/ProductDetailPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import WishListPage from "../pages/WishListPage/WishListPage";
import SignInPage from "../pages/SignInPage/SignInPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
export const routes = [
  {
    path: "/",
    page: HomePage,
    isShowHeader: true,
  },
  {
    path: "/order",
    page: OrderPage,
    isShowHeader: true,
  },
  {
    path: "/productdetail",
    page: ProductDetailPage,
    isShowHeader: true,
  },
  {
    path: "/categories",
    page: CategoriesPage,
    isShowHeader: true,
  },
  {
    path: "/aboutus",
    page: AboutUsPage,
    isShowHeader: true,
  },
  {
    path: "/blog",
    page: BlogPage,
    isShowHeader: true,
  },
  {
    path: "/blogdetail",
    page: BlogDetailPage,
    isShowHeader: true,
  },
  {
    path: "/cart",
    page: CartPage,
    isShowHeader: true,
  },
  {
    path: "/checkout",
    page: CheckOutPage,
    isShowHeader: true,
  },
  {
    path: "/wishlist",
    page: WishListPage,
    isShowHeader: true,
  },
  {
    path: "/signin",
    page: SignInPage,
    isShowHeader: true,
  },
  {
    path: "/signup",
    page: SignUpPage,
    isShowHeader: true,
  },
  {
    path: "/forgotpassword",
    page: ForgotPasswordPage,
    isShowHeader: true,
  },
  {
    path: "*",
    page: NotFoundPage,
  },
  {
    path: "/profile",
    page: ProfilePage,
    isShowHeader: true,
  },
];
