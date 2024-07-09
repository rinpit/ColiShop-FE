import React from "react";
import "../../style/blogDetail.css";
import { Center } from "@chakra-ui/react";

const BlogDetailPage4 = () => {
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
                        GỢI Ý 7 CỬA HÀNG SECONDHAND VỚI PHONG CÁCH RIÊNG BIỆT
                        GIÚP BẠN ĐƠN GIẢN HOÁ CÔNG CUỘC SĂN ĐỒ SI
                      </h2>
                      Đối với người chơi hệ vintage thì những thiết kế “độc nhất
                      vô nhị” luôn được săn đón một cách nồng nhiệt. Hơn nữa,
                      mức giá phải chăng và sự lan tỏa mạnh mẽ của thông điệp
                      thời trang bền vững càng khiến quần áo secondhand trở
                      thành những món đồ đáng sở hữu. Song để tìm được một cửa
                      hàng với phong cách phù hợp không phải là dễ khi thị
                      trường thứ cấp đang vô cùng sôi nổi với nhiều người bán
                      khác nhau. ELLE đã quan sát và chọn lọc những cửa hàng
                      chất lượng với những sở trường đặc trưng, giúp bạn định vị
                      được đâu là địa điểm yêu thích cho những cuộc săn tìm đồ
                      si.
                    </p>

                    <h3
                      style={{
                        // fontSize: "17px",
                        marginTop: "10px",

                        fontWeight: "lighter",
                      }}
                    >
                      MORI-GIRL CỦA @NINO.BYEBYE BỒNG BỀNH GIỮA BỐN BỂ
                    </h3>
                    <div className="post-media">
                      <img
                        src="https://www.elle.vn/wp-content/uploads/2023/03/05/518987/nino-byebye-do-seconhand.jpg"
                        alt="Post"
                      />
                    </div>

                    <div className="post-media">
                      <img
                        src="https://www.elle.vn/wp-content/uploads/2023/03/05/518987/nino-byebye-do-seconhand-1.jpg"
                        alt="Post"
                      />
                    </div>
                    <h3
                      style={{
                        // fontSize: "17px",
                        marginTop: "10px",

                        fontWeight: "lighter",
                      }}
                    >
                      THẾ GIỚI DENIM NHIỆM MÀU CỦA @3BICH.DENIM
                    </h3>
                    <p>
                      Mua sắm denim tại các cửa hàng secondhand là một lựa chọn
                      sáng suốt, bởi từng chi tiết nho nhỏ của thời gian trên
                      quần áo như những vết sờn, hiện tượng phai màu lại càng
                      lột tả rõ rệt phong cách đường phố bụi bặm những năm 90. 3
                      Bích nằm giữa lòng Sài Thành có các bản phối
                      denim-on-denim “cực phẩm,” dẫn bạn vào một chiều không
                      gian hoài cổ để đắm mình trong chất liệu thô ráp về xúc
                      cảm nhưng lại vô cùng “nịnh” mắt. Đặc sản của 3 Bích chính
                      là những chiếc túi tote denim patchwork vô cùng lạ mắt,
                      dẫn dụ các tín đồ yêu thích sự độc bản tìm đến cửa tiệm.
                    </p>

                    <h3
                      style={{
                        // fontSize: "17px",
                        marginTop: "10px",

                        fontWeight: "lighter",
                      }}
                    >
                      @SIMESI.OFFICIAL VỚI MENSWEAR PHÓNG KHOÁNG DÀNH CHO “NỮ
                      CƯỜNG”
                    </h3>
                    <p>
                      Khi vạch định giới trong thời trang dần lu mơ, phái đẹp đã
                      thuần phục rất nhiều item phổ biến trong tủ đồ phái nam
                      như cà vạt, nón newsboy…nhưng nổi trội nhất vẫn là suit.
                      Trên cơ thể nữ giới, blazer độn vai như được “mài nhẵn”
                      góc cạnh nhờ những vòng eo mềm dịu. Họ thay đổi sơ mi, áo
                      thun bằng áo quây hay bralette quyến rũ, thổi hồn vào bản
                      phối công sở bằng suit “3 mảnh trừ 1” và những biến thể
                      phụ kiện độc đáo. Simesi là một cửa tiệm secondhand có “sứ
                      mệnh” khẳng định menswear đơn thuần chỉ là một tên gọi,
                      với chiếc Instagram feed bày trí đẹp mãn nhãn thuyết phục
                      cô nàng nào cũng phải sắm cho mình một bộ cánh quyền lực.
                    </p>
                    <div className="post-media">
                      <img
                        src="https://www.elle.vn/wp-content/uploads/2023/03/17/518987/shop-menswear-secondhand.jpg"
                        alt="Post"
                      />
                    </div>

                    <div className="post-media">
                      <img
                        src="https://www.elle.vn/wp-content/uploads/2023/03/17/518987/ca-vat-secondhand-sho.jpg"
                        alt="Post"
                      />
                    </div>
                    <h3
                      style={{
                        // fontSize: "17px",
                        marginTop: "10px",

                        fontWeight: "lighter",
                      }}
                    >
                      RUNG CẢM SEXY & CHIC CỦA @MOODY.TOWN
                    </h3>
                    <p>
                      Tiếp cận với bảng màu trung tính, cửa tiệm không đi theo
                      con đường tối giản, thanh lịch mà lại tăng nhiệt độ bằng
                      những bản phối nóng bỏng. Bước qua cánh cửa của Moody
                      Town, bạn sẽ gặp gỡ với hình tượng nữ tính sành điệu và tự
                      tin, với sức hút xuất phát từ bên trong được bổ trợ bởi
                      lớp trang phục hở mà không phô. Bên cạnh những sản phẩm
                      đặc trưng như khăn vuông, corset, blazer biến cải, Moody
                      Town còn sưu tầm được những món đồ secondhand từ vải
                      tweed, đẹp như lấy từ sàn diễn Chanel cuối thập niên 90.
                    </p>
                    <div className="post-media">
                      <img
                        src="https://www.elle.vn/wp-content/uploads/2023/03/17/518987/khan-vuong-vintage-moody-town.jpg"
                        alt="Post"
                      />
                    </div>

                    <div className="post-media">
                      <img
                        src="https://www.elle.vn/wp-content/uploads/2023/03/17/518987/tweed-moody-town.jpg"
                        alt="Post"
                      />
                    </div>
                    <h3
                      style={{
                        // fontSize: "17px",
                        marginTop: "10px",

                        fontWeight: "lighter",
                      }}
                    >
                      @THENORMAL_THRIFTSHOP VÀ NÀNG “SOFT GIRL” MỀM MẠI CỦA ĐỜI
                      THƯỜNG
                    </h3>
                    <p>
                      Từ tên gọi cửa tiệm đã gợi nên sở trường của thenormal
                      thriftshop: trang phục thường ngày dành cho những cô nàng
                      vui vẻ và tràn đầy nhựa sống. Nếu bạn là tín đồ của phong
                      cách “soft girl” dịu dàng thì phom dáng tinh giản, điểm
                      xuyết vài hoạ tiết dung dị sẽ thắp sáng tâm trạng cho cả
                      ngày dài. Mỗi món đồ secondhand đều được cô chủ chăm chút
                      tươm tất, bạn sẽ phải mềm lòng trước váy áo bồng bềnh, bao
                      quanh bởi không gian được trang trí tỉ mỉ với gương, hoa
                      và đèn.
                    </p>

                    <div className="post-media">
                      <img
                        src="https://www.elle.vn/wp-content/uploads/2023/03/17/518987/soft-girl-thenormal-thriftshop.jpg"
                        alt="Post"
                      />
                    </div>

                    <div className="post-media">
                      <img
                        src="https://www.elle.vn/wp-content/uploads/2023/03/17/518987/thenormal-thriftshop-vay-hoa.jpg"
                        alt="Post"
                      />
                    </div>

                    <h3
                      style={{
                        // fontSize: "17px",
                        marginTop: "10px",

                        fontWeight: "lighter",
                      }}
                    >
                      @AOEM.SI KHƠI DẬỴ CẢM HỨNG THE NOUGHTIES
                    </h3>

                    <p>
                      Trạm dừng kế tiếp của chuyến vi vu qua những loạt địa điểm
                      bán đồ vintage là thế giới Y2K nhiệm màu. Luôn chất đầy kệ
                      tủ với số lượng mẫu mã đa dạng, Áo Em Si là nơi mua sắm
                      quen thuộc của loạt fashionista đình đám. Tại cửa tiệm,
                      bạn có thể mở ra thế giới tràn sắc màu của những năm 2000
                      với váy cạp trễ, áo baby tee, và đặc biệt là loạt túi xách
                      cỡ nhỏ độc lạ, trang sức xinh xắn. Nếu may mắn và theo dõi
                      Áo Em Si thường xuyên, bạn còn có thể “săn” được những
                      chiếc túi hiệu từ Vivienne Westwood, Diesel.
                    </p>

                    <div className="post-media">
                      <img
                        src="https://www.elle.vn/wp-content/uploads/2023/03/17/518987/ao-em-si-y2k-mau-sac.jpg"
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

export default BlogDetailPage4;
