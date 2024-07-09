import AboutUsPage from "../pages/AboutUsPage/AboutUsPage";
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
import AboutDHvTT from "../pages/AboutUsPage/AboutDHvTT";
import AboutVC from "../pages/AboutUsPage/AboutVC";
import AboutDT from "../pages/AboutUsPage/AboutDT";
import AboutBH from "../pages/AboutUsPage/AboutBH";
import AboutKG from "../pages/AboutUsPage/AboutKG";
import BlogDetailPage1 from "../pages/BlogDetailPage/BlogDetailPage1";
import BlogDetailPage2 from "../pages/BlogDetailPage/BlogDetailPage2";
import BlogDetailPage3 from "../pages/BlogDetailPage/BlogDetailPage3";
import BlogDetailPage4 from "../pages/BlogDetailPage/BlogDetailPage4";
import BlogDetailPage5 from "../pages/BlogDetailPage/BlogDetailPage5";
import BlogDetailPage6 from "../pages/BlogDetailPage/BlogDetailPage6";
import BlogDetailPage7 from "../pages/BlogDetailPage/BlogDetailPage7";
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
    path: "/policyDHvTT",
    page: AboutDHvTT,
    isShowHeader: true,
  },

  {
    path: "/policyVC",
    page: AboutVC,
    isShowHeader: true,
  },
  {
    path: "/policyDT",
    page: AboutDT,
    isShowHeader: true,
  },
  {
    path: "/policyBH",
    page: AboutBH,
    isShowHeader: true,
  },

  {
    path: "/policyKG",
    page: AboutKG,
    isShowHeader: true,
  },

  {
    path: "/blog",
    page: BlogPage,
    isShowHeader: true,
  },
  {
    path: "/blogdetail1",
    page: BlogDetailPage1,
    isShowHeader: true,
  },
  {
    path: "/blogdetail2",
    page: BlogDetailPage2,
    isShowHeader: true,
  },
  {
    path: "/blogdetail3",
    page: BlogDetailPage3,
    isShowHeader: true,
  },
  {
    path: "/blogdetail4",
    page: BlogDetailPage4,
    isShowHeader: true,
  },
  {
    path: "/blogdetail5",
    page: BlogDetailPage5,
    isShowHeader: true,
  },
  {
    path: "/blogdetail6",
    page: BlogDetailPage6,
    isShowHeader: true,
  },
  {
    path: "/blogdetail7",
    page: BlogDetailPage7,
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
