import React from "react";
import "../../style/blogDetail.css";
import { Center } from "@chakra-ui/react";

const BlogDetailPage3 = () => {
  return (
    <div className="blog-detail-page-wrapper">
      <main className="main">
        <nav aria-label="breadcrumb" className="breadcrumb-nav">
          <div className="container">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="demo4.html">
                  <i className="icon-home" />
                </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Blog Post
              </li>
            </ol>
          </div>
          {/* End .container */}
        </nav>

        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <article className="post single">
                <div className="post-body">
                  <div
                    className="post-content-detail"
                    style={{ textAlign: "justify" }}
                  >
                    <p>
                      <h2
                        style={{
                          // fontSize: "17px",
                          marginTop: "10px",
                          textAlign: "center",
                          fontWeight: "normal",
                          fontFamily: "sans-serif",
                        }}
                      >
                        Các cửa hàng & điểm bán đồ cũ tiết kiệm thời trang dạo
                        phố tốt nhất ở Sài Gòn/Thành phố Hồ Chí Minh, Việt Nam
                      </h2>
                      Sài Gòn, thường được gọi là Thành phố Hồ Chí Minh, là một
                      đô thị sầm uất và giữ vị thế là thành phố đông dân nhất
                      Việt Nam, nổi tiếng với ẩm thực đường phố, những tòa nhà
                      đẹp và lịch sử thời chiến.
                    </p>
                    <p>
                      Sài Gòn có sự kết hợp của các thương hiệu địa phương và
                      quốc tế. Từ các cửa hàng sang trọng cao cấp đến các cửa
                      hàng nhỏ độc lập và rất nhiều chợ và cửa hàng đồ cũ, thành
                      phố đáp ứng thị hiếu thời trang đa dạng.
                    </p>

                    <p>
                      Việc sử dụng đồ secondhand có những mặt tích cực như: chi
                      phí thấp, sở hữu món đồ độc lạ, không “đụng hàng”, góp
                      phần bảo vệ môi trường.
                    </p>
                    <p>
                      Để biết danh sách các chợ quần áo cũ, hãy xem bài viết này
                      của
                      <a
                        href="https://mytour.vn/vi/blog/bai-viet/explore-the-top-10-famous-secondhand-markets-in-ho-chi-minh-city.html"
                        style={{ paddingLeft: "5px", color: "black" }}
                      >
                        mytour.vn.
                      </a>
                    </p>
                    <h3
                      style={{
                        // fontSize: "17px",
                        fontStyle: "italic",
                        marginTop: "10px",

                        fontWeight: "lighter",
                      }}
                    >
                      Maintwo Sài Gòn, Quận 1
                    </h3>
                    <div className="post-media">
                      <img
                        src="https://cdn.shopify.com/s/files/1/0494/6113/3465/files/2_8e0dd4b8-17cf-4f6b-8143-989ca87017b3.png?v=1710736328"
                        alt="Post"
                      />
                    </div>

                    <p>
                      Maintwo Sài Gòn ẩn mình trong một con hẻm nhỏ (giống như
                      hầu hết các địa điểm ở các thành phố ở Việt Nam) và là một
                      trong những địa điểm yêu thích của cá nhân tôi. Có sự kết
                      hợp lớn giữa các món đồ cổ điển giá rẻ và cao cấp như áo
                      khoác da Avirex và áo nỉ Nike, cùng với những món đồ cổ
                      điển hiện đại hơn trong trang phục công nghệ. Họ là một
                      trong những cửa hàng tiết kiệm duy nhất của Việt Nam có áo
                      khoác Arcteryx giá phải chăng và các thương hiệu công nghệ
                      khác như Montbell.
                    </p>

                    <div className="post-media">
                      <img
                        src="https://cdn.shopify.com/s/files/1/0494/6113/3465/files/1_df4e1b81-114a-40c9-b30b-4cf0490b89ab.png?v=1710736301"
                        alt="Post"
                      />
                    </div>
                    <h3
                      style={{
                        // fontSize: "17px",
                        fontStyle: "italic",
                        marginTop: "10px",

                        fontWeight: "lighter",
                      }}
                    >
                      Cửa hàng Thriftshop, Quận 10
                    </h3>
                    <div className="post-media">
                      <img
                        src="https://cdn.shopify.com/s/files/1/0494/6113/3465/files/IMG_8156.jpg?v=1709610566"
                        alt="Post"
                      />
                    </div>
                    <p>
                      Instore là một mặt hàng chủ lực của Instagram ( hãy xem
                      tại đây ) và có rất nhiều sản phẩm trong cửa hàng của họ.
                      Từ Carhartt cổ điển tuyệt đẹp đến cổ điển cổ điển của Hoa
                      Kỳ, Stussy và Polo Sport, bạn chắc chắn sẽ tìm thấy một
                      chiếc banger cổ điển trong cửa hàng.
                    </p>
                    <p>
                      Xe bán tải cá nhân tốt nhất: Một chiếc áo len YSL cổ điển
                      những năm 1990 với giá 700k (£22).
                      <div className="post-media">
                        <img
                          src="https://cdn.shopify.com/s/files/1/0494/6113/3465/files/Untitled_design_-_2024-03-05T110741.900.png?v=1709611682"
                          alt="Post"
                        />
                      </div>
                    </p>

                    <h3
                      style={{
                        // fontSize: "17px",
                        fontStyle: "italic",
                        marginTop: "10px",

                        fontWeight: "lighter",
                      }}
                    >
                      Ivylory Sài Gòn
                    </h3>
                    <p>
                      Cafe Ivylory thuộc sở hữu của một người rất hâm mộ áo bóng
                      đá cổ điển (xem instagram của anh ấy tại đây ) và đã xây
                      dựng một quán cà phê dựa trên tình yêu cũng như bộ sưu tập
                      thời trang thích hợp của anh ấy. Hãy lên lầu sau khi bạn
                      uống xong ac à phê sữa đá (cà phê đá) để xem bộ sưu tập
                      đáng kinh ngạc mà anh ấy cung cấp. Tải áo đấu của
                      Manchester United, Ý và quốc tế.
                    </p>

                    <p>
                      Họ thậm chí còn tổ chức một cửa hàng trưng bày áo bóng đá
                      trưng bày những tác phẩm kinh điển hay nhất từ ​​những năm
                      90 và 00.
                    </p>
                    <div className="post-media">
                      <img
                        src="https://cdn.shopify.com/s/files/1/0494/6113/3465/files/Untitled_design_-_2024-03-20T114040.175.png?v=1710910135"
                        alt="Post"
                      />
                    </div>

                    <h3
                      style={{
                        // fontSize: "17px",
                        fontStyle: "italic",
                        marginTop: "10px",

                        fontWeight: "lighter",
                      }}
                    >
                      Thriftshop Sài Gòn, Quận 3
                    </h3>
                    <div className="post-media">
                      <img
                        src="https://cdn.shopify.com/s/files/1/0494/6113/3465/files/1_e4fcb257-21bb-4ae5-b495-b15c92ae6096.png?v=1710737801"
                        alt="Post"
                      />
                    </div>
                    <p>
                      Thriftshop Sài Gòn cung cấp tất cả các loại đồ cổ điển, từ
                      áo thun họa tiết cỡ lớn đến áo khoác denim và đôi khi là
                      áo bóng đá và áo bóng rổ cổ điển. Hãy kiểm tra xem bạn có
                      ở quận 3 không.
                    </p>
                    <div className="post-media">
                      <img
                        src="https://cdn.shopify.com/s/files/1/0494/6113/3465/files/2_b90482bf-37ea-48d1-9f5a-a5bacc7fffed.png?v=1710738018"
                        alt="Post"
                      />
                    </div>
                  </div>
                </div>
                {/* End .post-content */}
                <div className="post-share">
                  <h3 className="d-flex align-items-center">
                    <i className="fas fa-share" />
                    Share this post
                  </h3>
                  <div className="social-icons">
                    <a
                      href="#"
                      className="social-icon social-facebook"
                      target="_blank"
                      title="Facebook"
                    >
                      <i className="icon-facebook" />
                    </a>
                    <a
                      href="#"
                      className="social-icon social-twitter"
                      target="_blank"
                      title="Twitter"
                    >
                      <i className="icon-twitter" />
                    </a>
                    <a
                      href="#"
                      className="social-icon social-linkedin"
                      target="_blank"
                      title="Linkedin"
                    >
                      <i className="fab fa-linkedin-in" />
                    </a>
                    <a
                      href="#"
                      className="social-icon social-gplus"
                      target="_blank"
                      title="Google +"
                    >
                      <i className="fab fa-google-plus-g" />
                    </a>
                    <a
                      href="#"
                      className="social-icon social-mail"
                      target="_blank"
                      title="Email"
                    >
                      <i className="icon-mail-alt" />
                    </a>
                  </div>
                  {/* End .social-icons */}
                </div>
                {/* End .post-share */}
                <div className="post-author">
                  <h3>
                    <i className="far fa-user" />
                    Author
                  </h3>
                  <figure>
                    <a href="#">
                      <img
                        style={{
                          borderRadius: "50%",
                          height: "70px",
                          width: "75px",
                        }}
                        src="https://remcuaminhanh.com/wp-content/uploads/2023/02/gai-xinh-8.jpg"
                        alt="author"
                      />
                    </a>
                  </figure>
                  <div className="author-content">
                    <h4>
                      <a href="#">Hồng Nga</a>
                    </h4>
                  </div>
                  {/* End .author.content */}
                </div>
                {/* End .post-author */}
                <div className="comment-respond">
                  <h3>Leave a Reply</h3>
                  <form action="#">
                    <p>
                      Your email address will not be published. Required fields
                      are marked *
                    </p>
                    <div className="form-group">
                      <label>Comment</label>
                      <textarea
                        cols={30}
                        rows={1}
                        className="form-control"
                        required
                        defaultValue={""}
                      />
                    </div>
                    {/* End .form-group */}
                    <div className="form-group">
                      <label>
                        Name <span className="required">*</span>
                      </label>
                      <input type="text" className="form-control" required />
                    </div>
                    {/* End .form-group */}
                    <div className="form-group">
                      <label>
                        Email <span className="required">*</span>
                      </label>
                      <input type="email" className="form-control" required />
                    </div>
                    {/* End .form-group */}
                    <div className="form-group">
                      <label>Website</label>
                      <input type="url" className="form-control" />
                    </div>
                    {/* End .form-group */}
                    <div className="form-group-custom-control mb-3">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="save-name"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="save-name"
                        >
                          Save my name, email, and website in this browser for
                          the next time I comment.
                        </label>
                      </div>
                      {/* End .custom-checkbox */}
                    </div>
                    <button type="submit" className="btn btn-outline-primary-2">
                      <span>Post Comment</span>
                      <i className="icon-long-arrow-right" />
                    </button>
                  </form>
                </div>
                {/* End .comment-respond */}
              </article>
              {/* End .entry */}
            </div>
            {/* End .col-lg-9 */}
            <aside className="col-lg-3">
              <div className="sidebar">
                {/* End .widget */}
                <div className="widget">
                  <h3 className="widget-title">Browse Tags</h3>
                  <div className="tagcloud">
                    <a href="#">fashion</a>
                    <a href="#">style</a>
                    <a href="#">women</a>
                    <a href="#">photography</a>
                    <a href="#">travel</a>
                    <a href="#">shopping</a>
                    <a href="#">hobbies</a>
                  </div>
                  {/* End .tagcloud */}
                </div>
                {/* End .widget */}
                <div className="widget widget-text">
                  <h3 className="widget-title">Join Our Newsletter</h3>
                  <div className="widget-newsletter">
                    <p>
                      Get all the latest information on events, sales and
                      offers. Sign up for newsletter:
                    </p>
                    <form action="#">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email address"
                        required
                      />
                      <button
                        type="submit"
                        className="btn btn-block btn-outline-primary-2"
                      >
                        <span>Subscribe</span>
                        <i className="icon-long-arrow-right" />
                      </button>
                    </form>
                  </div>
                  {/* End .widget-newsletter */}
                </div>
                {/* End .widget */}
              </div>
              {/* End .sidebar */}
            </aside>
            {/* End .col-lg-3 */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </main>
    </div>
  );
};

export default BlogDetailPage3;
