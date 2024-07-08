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
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import WishListPage from "../pages/WishListPage/WishListPage";
import SignInPage from "../pages/SignInPage/SignInPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import AdminPage from "../pages/AdminPage/AdminPage";
import ProductDetailsPage from "../pages/ProductDetailsPage/ProductDetailsPage";
import TypeProductPage from "../pages/TypeProductPage/TypeProductPage";
import PaymentPage from "../pages/PaymentPage/PaymentPage";
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
    path: "/product-details/:id",
    page: ProductDetailsPage,
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
    path: "/payment",
    page: PaymentPage,
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
    path: "/profile-user",
    page: ProfilePage,
    isShowHeader: true,
  },
  {
    path: "/system/admin",
    page: AdminPage,
    isShowHeader: false,
    isPrivate: true,
  },
  {
    path: "/product/:type",
    page: TypeProductPage,
    isShowHeader: true,
  },
  {
    path: "*",
    page: NotFoundPage,
  },
];
