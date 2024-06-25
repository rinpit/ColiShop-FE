import React from "react";
import "../../style/blogDetail.css";

const BlogDetailPage1 = () => {
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
                  <h2
                    className="post-title-detail"
                    style={{
                      // fontSize: "17px",
                      marginTop: "10px",
                      textAlign: "center",
                      fontWeight: "normal",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Thời trang secondhand: Xu hướng thời trang của các tín đồ
                    yêu môi trường
                  </h2>
                  <div
                    className="post-content-detail"
                    style={{ textAlign: "justify" }}
                  >
                    <p>
                      Trong thời điểm mà trái đất đang ngày càng bị tổn thương
                      vì rất nhiều lý do liên quan đến môi trường thì hầu như
                      tất cả các ngành công nghiệp trên thế giới đều bắt buộc
                      phải có những bước chuyển mình đáng kể để bảo vệ cho nơi
                      mình sống. Trong đó không thể không kể đến ngành thời
                      trang vốn rất “tai tiếng” trong việc này khi có nhiều
                      nghiên cứu chỉ ra rằng nó đứng thứ hai trong việc gây ô
                      nhiễm cho môi trường, chỉ sau ngành dầu mỏ.
                    </p>
                    <p>
                      Vì vậy, đối với những tín đồ yêu môi trường nói chung và
                      cái đẹp nói riêng thì thời trang secondhand không khác gì
                      một “cứu cánh” đúng lúc và kịp thời để họ vừa có thể diện
                      được những bộ đồ đẹp nhưng vẫn có thể yêu môi trường theo
                      một cách rất riêng. Hãy cùng với Coolmate tìm hiểu thêm về
                      thời trang secondhand - một phong cách vốn đã không quá xa
                      lạ nhưng lại đang tăng trưởng cực kỳ mạnh trong thời điểm
                      hiện nay nào.
                    </p>
                    <h3>Thời trang Secondhand là gì?</h3>
                    <p>
                      Nằm trong dòng chảy bất tận của ngành thời trang,
                      Secondhand là một phong cách được hiểu là người dùng sẽ sử
                      dụng lại những sản phẩm thời trang đã qua tay của người
                      khác nhưng vẫn còn mới hoặc giá trị tốt. Những sản phẩm
                      thuộc thời trang secondhand sẽ có độ bền khoảng 50% - 70%
                      so với ban đầu kèm theo một mức giá rất tốt, đủ để những
                      người yêu thích sản phẩm đó dễ dàng mua được.
                    </p>
                    <p>
                      Thông thường, những sản phẩm thuộc thời trang secondhand
                      sẽ là áo, quần, túi xách hoặc bất kỳ thứ gì có khả năng sử
                      dụng lại nhưng không quá khác biệt về mặt tính năng hoặc
                      vẻ ngoài vẫn giữ được đúng tính chất của nó. Nếu muốn tìm
                      được những món hàng của thời trang secondhand, bạn sẽ phải
                      tốn kha khá thời gian để lùng sục ở những cửa hàng chuyên
                      secondhand hoặc lê la trên các group Facebook để xem có ai
                      bán không. Quá trình này mặc dù khá tốn thời gian nhưng
                      kết quả cuối cùng sẽ rất thú vị đấy.
                    </p>
                    <h3>Thời trang secondhand bùng nổ trong thời dịch</h3>
                    <p>
                      Trong khoảng một thập niên vừa qua, thời trang secondhand
                      phát triển cực kỳ mạnh mẽ và đặc biệt trở nên bùng nổ
                      trong thời điểm dịch Covid-19 vừa qua. Như bạn cũng đã
                      thấy, dù có để dành bao nhiêu tiền thì làn sóng dịch bệnh
                      vừa rồi cũng đủ khiến cho tất cả gần như cảm thấy kiệt sức
                      về mặt tiền bạc.
                    </p>
                    <p>
                      Do đó thời trang secondhand đã giúp cho người dùng rất
                      nhiều khi không cần bỏ ra quá nhiều tiền cho những món đồ
                      mặc hàng ngày, hoặc ngược lại, giúp họ bán được những món
                      đồ thời trang mà họ không dùng đến để kiếm thêm tiền trang
                      trải cuộc sống.
                    </p>
                    <div className="post-media">
                      <img
                        src="https://mcdn.coolmate.me/uploads/January2022/thoi-trang-secondhand-06.jpg"
                        alt="Post"
                      />
                    </div>
                    <h3>Những ưu điểm của thời trang secondhand</h3>
                    <p>
                      Nói về thời trang secondhand nhiều rồi, thế nhưng những ưu
                      điểm cụ thể và đặc biệt của nó là gì để cho phong cách này
                      lại trở nên thịnh hành đến như vậy, đặc biệt là khiến cho
                      những GenZ - những người được tiếp cận với cái đẹp từ rất
                      sớm cũng say mê như điếu đổ. Hãy điểm qua cùng với
                      Coolmate nhé:
                    </p>
                    <h3>1. Giá rẻ </h3>
                    <p>
                      Vấn đề đầu tiên luôn là tiền đâu đúng không nào? Làm thế
                      nào để vừa sắm được những món đồ đẹp nhưng vẫn có giá phải
                      chăng luôn là một câu hỏi khó, thế nhưng nếu bạn đến với
                      thời trang secondhand thì điều này sẽ được giải quyết rất
                      đơn giản. Những món đồ secondhand luôn có giá “hạt dẻ” hơn
                      rất nhiều khi được mua mới, thậm chí là có khi giảm đến
                      80% so với giá ban đầu, miễn là bạn có thể săn được nó kịp
                      lúc.
                    </p>
                    <h3> 2. Đa dạng sự lựa chọn </h3>
                    <p>
                      Từ áo, quần, túi xách, giày dép hoặc tất tần tật các món
                      phụ kiện liên quan đến thời trang thì secondhand đều đáp
                      ứng được cho bạn. Bởi vì có rất nhiều người có nhu cầu
                      muốn bán đi những món đồ mà mình không có nhu cầu sử dụng,
                      vì thế mà bạn sẽ có rất nhiều sự lựa chọn để dễ dàng hơn
                      trong việc tìm được sản phẩm ưng ý nhất.
                    </p>
                    <h3>3. Bảo vệ môi trường </h3>
                    <p>
                      Đây là một trong những nguyên nhân chính khiến cho thời
                      trang secondhand trở nên phổ biến và được ưa chuộng nhiều
                      đến vậy. Việc sử dụng các sản phẩm cũ khiến cho vòng đời
                      của chúng được kéo dài, từ đó hạn chế được rất nhiều các
                      nguyên liệu thải ra trong quá trình sản xuất sản phẩm mới,
                      giúp cho các chất thải không có cơ hội thoát ra môi trường
                      và góp phần giúp cho hành tinh của chúng ta trở nên xanh -
                      sạch - đẹp.
                    </p>

                    <div className="post-media">
                      <img
                        style={{ height: "500px" }}
                        src="https://mcdn.coolmate.me/uploads/January2022/thoi-trang-secondhand-05.jpg"
                        alt="Post"
                      />
                    </div>
                  </div>
                </div>
                {/* End .post-content */}
                <div className="post-share">
                  <h3 className="d-flex align-items-center">
                    <i className="fas fa-share mr-2" /> Share this post
                  </h3>
                  <div className="social-icons mt-3">
                    <a
                      href="#"
                      className="social-icon social-facebook mr-2"
                      target="_blank"
                      title="Facebook"
                    >
                      <i className="icon-facebook" />
                    </a>
                    <a
                      href="#"
                      className="social-icon social-twitter mr-2"
                      target="_blank"
                      title="Twitter"
                    >
                      <i className="icon-twitter" />
                    </a>
                    <a
                      href="#"
                      className="social-icon social-linkedin mr-2"
                      target="_blank"
                      title="Linkedin"
                    >
                      <i className="fab fa-linkedin-in" />
                    </a>
                    <a
                      href="#"
                      className="social-icon social-gplus mr-2"
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
                        src="https://thanhnien.mediacdn.vn/Uploaded/thynhm/2022_06_17/nha-van-gao1-4014.jpg"
                        alt="author"
                      />
                    </a>
                  </figure>
                  <div className="author-content">
                    <h4>
                      <a href="#">Vĩnh Thụy Nguyễn</a>
                    </h4>
                  </div>
                  {/* End .author.content */}
                </div>
                {/* End .post-author */}
                <div className="comment-respond mt-4">
                  <h3>Leave a Reply</h3>
                  <form action="#" className="mt-3">
                    <p className="text-muted">
                      Your email address will not be published. Required fields
                      are marked *
                    </p>
                    <div className="form-group">
                      <label>Comment</label>
                      <textarea
                        className="form-control"
                        rows="4"
                        placeholder="Write your comment here..."
                        required
                      ></textarea>
                    </div>
                    {/* End .form-group */}
                    <div className="row">
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>
                            Name <span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            required
                          />
                        </div>
                        {/* End .form-group */}
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>
                            Email <span className="required">*</span>
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            required
                          />
                        </div>
                        {/* End .form-group */}
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Website</label>
                          <input type="url" className="form-control" />
                        </div>
                        {/* End .form-group */}
                      </div>
                    </div>
                    {/* End .row */}
                    <div className="form-group mb-4">
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
                      <i className="icon-long-arrow-right ml-2" />
                    </button>
                  </form>
                </div>
                {/* End .comment-respond */}

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
                  <h3 className="widget-title">JOIN OUR NEWSLETTER</h3>
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

export default BlogDetailPage1;
