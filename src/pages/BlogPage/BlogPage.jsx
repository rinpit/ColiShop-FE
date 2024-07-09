import React from "react";
import "../../style/blog.css";

const BlogPage = () => {
  return (
    <div className="page-wrapper">
      <main className="main blog-main">
        <nav aria-label="breadcrumb" className="breadcrumb-nav">
          <div className="container">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="demo4.html">
                  <i className="icon-home" />
                </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Blog
              </li>
            </ol>
          </div>
          {/* End .container */}
        </nav>

        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="blog-section row">
                <div className="col-md-6 col-lg-4">
                  <article className="post">
                    <div className="post-media">
                      <a href="/blogdetail1">
                        <img
                          src="https://assets.vogue.com/photos/661da90dda2a122469c69f1e/master/w_1600,c_limit/vogue-negozi-vintage-milano-bivi.jpg"
                          alt="Post"
                          width={225}
                          height={280}
                        />
                      </a>
                      <div className="post-date">
                        <span className="day">19</span>
                        <span className="month">Jun</span>
                      </div>
                    </div>
                    {/* End .post-media */}
                    <div className="post-body">
                      <h2 className="post-title">
                        <a href="/blogdetail1">
                          Thời trang secondhand: Xu hướng thời trang của các tín
                          đồ yêu môi trường
                        </a>
                      </h2>
                      <div className="post-content">
                        <p>
                          Trong thời điểm mà trái đất đang ngày càng bị tổn
                          thương vì rất nhiều lý do liên quan đến môi trường...
                        </p>
                      </div>
                      {/* End .post-content */}
                      <a href="/blogdetail1" className="post-comment">
                        0 Comments
                      </a>
                    </div>
                    {/* End .post-body */}
                  </article>
                  {/* End .post */}
                </div>
                <div className="col-md-6 col-lg-4">
                  <article className="post">
                    <div className="post-media">
                      <a href="/blogdetail2">
                        <img
                          src="https://assets.vogue.com/photos/661db4346c7ae2f0d460d768/master/w_1600,c_limit/vogue-negozi-vintage-milano-sous.jpg"
                          alt="Post"
                          width={225}
                          height={280}
                        />
                      </a>
                      <div className="post-date">
                        <span className="day">09</span>
                        <span className="month">Jun</span>
                      </div>
                    </div>
                    {/* End .post-media */}
                    <div className="post-body">
                      <h2 className="post-title">
                        <a href="/blogdetail2">
                          Kiến thức cần biết khi sử dụng đồ secondhand
                        </a>
                      </h2>
                      <div className="post-content">
                        <p>
                          Piktina – Đồ secondhand đang trở nên thịnh hành hơn,
                          để trở thành người tiêu dùng thông thái thì cần nắm
                          những kiến thức sau đây nhé!...
                        </p>
                      </div>
                      {/* End .post-content */}
                      <a href="/blogdetail2" className="post-comment">
                        5 Comments
                      </a>
                    </div>
                    {/* End .post-body */}
                  </article>
                  {/* End .post */}
                </div>
                <div className="col-md-6 col-lg-4">
                  <article className="post">
                    <div className="post-media">
                      <a href="/blogDetail3">
                        <img
                          src="https://assets.vogue.com/photos/661dacc6bde33625d234905e/master/w_1600,c_limit/vogue-negozi-vintage-milano-spec.jpg"
                          alt="Post"
                          width={225}
                          height={280}
                        />
                      </a>
                      <div className="post-date">
                        <span className="day">15</span>
                        <span className="month">May</span>
                      </div>
                    </div>
                    {/* End .post-media */}
                    <div className="post-body">
                      <h2 className="post-title">
                        <a href="/blogDetail3">
                          Các cửa hàng & điểm bán đồ cũ tiết kiệm thời trang dạo
                          phố tốt nhất ở Sài Gòn/Thành phố Hồ Chí Minh, Việt Nam
                        </a>
                      </h2>
                      <div className="post-content">
                        <p>
                          Rất nhiều hàng hóa của chúng tôi đến từ Việt Nam nên
                          chúng tôi muốn chia sẻ một số cửa hàng bán đồ cũ tốt
                          nhất trong nước...
                        </p>
                      </div>
                      {/* End .post-content */}
                      <a href="/blogDetail3" className="post-comment">
                        0 Comments
                      </a>
                    </div>
                    {/* End .post-body */}
                  </article>
                  {/* End .post */}
                </div>
                <div className="col-md-6 col-lg-4">
                  <article className="post">
                    <div className="post-media">
                      <a href="/blogDetail4">
                        <img
                          src="https://assets.vogue.com/photos/661f2e0bc2bb20bed1dc7a1c/master/w_1600,c_limit/Snapinsta.app_430168918_728184816048177_8141089124678794915_n_1080.jpg"
                          alt="Post"
                          width={225}
                          height={280}
                        />
                      </a>
                      <div className="post-date">
                        <span className="day">03</span>
                        <span className="month">May</span>
                      </div>
                    </div>
                    {/* End .post-media */}
                    <div className="post-body">
                      <h2 className="post-title">
                        <a href="/blogDetail4">
                          GỢI Ý 7 CỬA HÀNG SECONDHAND VỚI PHONG CÁCH RIÊNG BIỆT
                          GIÚP BẠN ĐƠN GIẢN HOÁ CÔNG CUỘC SĂN ĐỒ SI
                        </a>
                      </h2>
                      <div className="post-content">
                        <p>
                          Hưởng ứng trào lưu xanh hoá, thị trường secondhand
                          đang ngày càng phát triển đa dạng hơn để thoả mãn hội
                          tín đồ với gu thẩm mỹ riêng biệt. ELLE sẽ cùng bạn
                          định danh phong cách chính yếu của 7 cửa hàng
                          secondhand sau, dễ dàng tìm kiếm nguyên liệu cho bản
                          phối vintage....
                        </p>
                      </div>
                      {/* End .post-content */}
                      <a href="/blogDetail3" className="post-comment">
                        4 Comments
                      </a>
                    </div>
                    {/* End .post-body */}
                  </article>
                  {/* End .post */}
                </div>

                <div className="col-md-6 col-lg-4">
                  <article className="post">
                    <div className="post-media">
                      <a href="/blogDetail5">
                        <img
                          src="https://assets.vogue.com/photos/660b9a2d2d9d8de0e1adebbc/3:4/w_1920,c_limit/MOCKUP-DALLAS-RAREHEART-3.jpg"
                          alt="Post"
                          width={225}
                          height={280}
                        />
                      </a>
                      <div className="post-date">
                        <span className="day">29</span>
                        <span className="month">Apr</span>
                      </div>
                    </div>
                    {/* End .post-media */}
                    <div className="post-body">
                      <h2 className="post-title">
                        <a href="/blogDetail5">
                          VALENTINO RESORT 2025: CUỘC DẠO ĐẦU ĐẦY HỖN LOẠN HAY
                          KHAI MỞ CHO KỶ NGUYÊN HUY HOÀNG MỚI?
                        </a>
                      </h2>
                      <div className="post-content">
                        <p>
                          Khoảnh khắc mà cả thế giới mong đợi: bộ sưu tập khai
                          mở “vương triều” của Alessandro Michele tại
                          Valentino...
                        </p>
                      </div>
                      {/* End .post-content */}
                      <a href="/blogDetail5" className="post-comment">
                        2 Comments
                      </a>
                    </div>
                    {/* End .post-body */}
                  </article>
                  {/* End .post */}
                </div>

                <div className="col-md-6 col-lg-4">
                  <article className="post">
                    <div className="post-media">
                      <a href="/blogDetail6">
                        <img
                          src="https://assets.vogue.com/photos/66215ff85685c0ceda600c0e/master/w_1600,c_limit/Snapinsta.app_438267210_1503973667132560_1463234357662363568_n_1080.jpg"
                          alt="Post"
                          width={225}
                          height={280}
                        />
                      </a>
                      <div className="post-date">
                        <span className="day">18</span>
                        <span className="month">Apr</span>
                      </div>
                    </div>
                    {/* End .post-media */}
                    <div className="post-body">
                      <h2 className="post-title">
                        <a href="/blogDetail6">
                          KHUY ÁO CÁCH TÂN – ĐIỂM NHẤN ĐỘC ĐÁO TRONG THẾ GIỚI
                          THỜI TRANG HAUTE COUTURE
                        </a>
                      </h2>
                      <div className="post-content">
                        <p>
                          Trong thế giới Haute Couture, nơi mọi chi tiết đều
                          được chăm chút tỉ mỉ. Khuy áo không chỉ là phụ kiện
                          chức năng mà còn là điểm nhấn nghệ thuật thể hiện sự
                          sáng tạo và tinh xảo của nhà thiết kế, là sân chơi cho
                          những thử nghiệm không ngừng....
                        </p>
                      </div>
                      {/* End .post-content */}
                      <a href="/blogDetail6" className="post-comment">
                        0 Comments
                      </a>
                    </div>
                    {/* End .post-body */}
                  </article>
                  {/* End .post */}
                </div>

                <div className="col-md-6 col-lg-4">
                  <article className="post">
                    <div className="post-media">
                      <a href="/blogDetail7">
                        <img
                          src="https://assets.vogue.com/photos/666f0cceda02a617b071c177/master/w_1920,c_limit/LEAD%20IMAGE%202.jpg"
                          alt="Post"
                          width={225}
                          height={280}
                        />
                      </a>
                      <div className="post-date">
                        <span className="day">05</span>
                        <span className="month">Apr</span>
                      </div>
                    </div>
                    {/* End .post-media */}
                    <div className="post-body">
                      <h2 className="post-title">
                        <a href="/blogDetail7">
                          6 CHIẾN DỊCH THỜI TRANG MANG ĐẬM DẤU ẤN CỦA LOẠI HÌNH
                          NGHỆ THUẬT THỨ 7
                        </a>
                      </h2>
                      <div className="post-content">
                        <p>
                          Xu hướng phim thời trang đang bùng nổ với sự tham gia
                          của các đạo diễn và diễn viên hàng đầu, biến những bộ
                          phim thời trang tưởng chừng đơn giản thành những tác
                          phẩm nghệ thuật độc đáo.
                        </p>
                      </div>
                      {/* End .post-content */}
                      <a href="/blogDetail7" className="post-comment">
                        1 Comments
                      </a>
                    </div>
                    {/* End .post-body */}
                  </article>
                  {/* End .post */}
                </div>
              </div>
            </div>
            {/* End .col-lg-9 */}

            <div className="sidebar-toggle custom-sidebar-toggle">
              <i className="fas fa-sliders-h" />
            </div>

            <div className="sidebar-overlay" />
            <aside
              className="sidebar mobile-sidebar col-lg-3"
              style={{ backgroundColor: "#f4efe6" }}
            >
              <div
                className="sidebar-wrapper"
                data-sticky-sidebar-options='{"offsetTop": 72}'
              >
                <div className="widget widget-categories">
                  <h4 className="widget-title">Blog Categories</h4>
                  <ul className="list">
                    <li>
                      <a href="#">All about clothing</a>
                      <ul className="list">
                        <li>
                          <a href="#">Dresses</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Make-up &amp; beauty</a>
                    </li>
                    <li>
                      <a href="#">Accessories</a>
                    </li>
                    <li>
                      <a href="#">Fashion trends</a>
                    </li>
                    <li>
                      <a href="#">Haircuts &amp; hairstyles</a>
                    </li>
                  </ul>
                </div>
                {/* End .widget */}
                <div className="widget widget-post">
                  <h4 className="widget-title">Recent Posts</h4>
                  <ul className="simple-post-list">
                    <li>
                      <div className="post-media">
                        <a href="/blogDetail1">
                          <img
                            src="https://assets.vogue.com/photos/661da90dda2a122469c69f1e/master/w_1600,c_limit/vogue-negozi-vintage-milano-bivi.jpg"
                            alt="Post"
                          />
                        </a>
                      </div>
                      {/* End .post-media */}
                      <div className="post-info">
                        <a href="/blogDetail1">
                          Thời trang secondhand: Xu hướng thời trang của các tín
                          đồ yêu môi trường
                        </a>
                        <div className="post-meta">June 19, 2024</div>
                        {/* End .post-meta */}
                      </div>
                      {/* End .post-info */}
                    </li>
                    <li>
                      <div className="post-media">
                        <a href="/blogDetail2">
                          <img
                            src="https://assets.vogue.com/photos/661db4346c7ae2f0d460d768/master/w_1600,c_limit/vogue-negozi-vintage-milano-sous.jpg"
                            alt="Post"
                          />
                        </a>
                      </div>
                      {/* End .post-media */}
                      <div className="post-info">
                        <a href="/blogDetail2">
                          Kiến thức cần biết khi sử dụng đồ secondhand
                        </a>
                        <div className="post-meta">June 09, 2024</div>
                        {/* End .post-meta */}
                      </div>
                      {/* End .post-info */}
                    </li>
                  </ul>
                </div>
                {/* End .widget */}
                <div className="widget">
                  <h4 className="widget-title">Tags</h4>
                  <div className="tagcloud">
                    <a href="#">ARTICLES</a>
                    <a href="#">CHAT</a>
                  </div>
                  {/* End .tagcloud */}
                </div>
                {/* End .widget */}
              </div>
              {/* End .sidebar-wrapper */}
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

export default BlogPage;
