import React from "react";

const AboutKG = () => {
  return (
    <div className="page-wrapper">
      <main className="main about">
        <div>
          <div
            className="page-header page-header-bg text-left"
            style={{
              background:
                '50%/cover #D4E1EA url("https://assets.vogue.com/photos/66216745539e3f0df23df027/master/w_1600,c_limit/loja_9999_1.jpg")',
            }}
          >
            <div className="container">
              <h1 style={{ color: "white" }}>
                <span>ABOUT US</span>
                THE COLI CONSIGNMENT
              </h1>
              <a href="contact.html" className="btn btn-dark">
                Contact
              </a>
            </div>
            {/* End .container */}
          </div>
          {/* End .page-header */}

          <nav aria-label="breadcrumb" className="breadcrumb-nav">
            <div className="container">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="demo4.html">
                    <i className="icon-home" />
                  </a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  About Us
                </li>
              </ol>
            </div>
            {/* End .container */}
          </nav>

          <div className="about-section">
            <div className="container">
              <h2 className="subtitle">CHÍNH SÁCH KÝ GỬI</h2>
              <p>
                Chúng tôi nhận ký gửi các sản phẩm quần áo, phụ kiện chất lượng
                còn mới và sử dụng tốt. <br />
                Sản phẩm ký gửi sẽ được kiểm tra kỹ lưỡng trước khi đưa lên kệ
                bán. <br />
                Hoa hồng ký gửi sẽ được thỏa thuận trước và thanh toán sau khi
                sản phẩm được bán thành công.
              </p>

              <p className="lead">
                “ ♻️TUẦN HOÀN TỦ ĐỒ không chỉ là một thói quen tiêu dùng hiệu
                quả về chi phí, giúp những món đồ "cũ người mới ta" tìm được một
                vòng đới mới mà còn là một phần để tạo ra SỰ BỀN VỮNG trong thời
                trang. ”
              </p>
            </div>
            {/* End .container */}
          </div>
          {/* End .about-section */}

          <div className="features-section bg-gray">
            <div className="container">
              <h2 className="subtitle">TẠI SAO CHỌN COLI?</h2>
              <div className="row">
                <div className="col-lg-4">
                  <div className="feature-box bg-white">
                    <i className="icon-shipped" />
                    <div className="feature-box-content p-0">
                      <h3>Freeship với hoá đơn trên 400.000đ</h3>
                    </div>
                    {/* End .feature-box-content */}
                  </div>
                  {/* End .feature-box */}
                </div>
                {/* End .col-lg-4 */}
                <div className="col-lg-4">
                  <div
                    className="feature-box bg-white"
                    style={{ paddingBottom: "50px" }}
                  >
                    <i className="icon-us-dollar" />
                    <div className="feature-box-content p-0">
                      <h3>Đổi trả sau khi nhận hàng</h3>
                    </div>
                    {/* End .feature-box-content */}
                  </div>
                  {/* End .feature-box */}
                </div>
                {/* End .col-lg-4 */}
                <div className="col-lg-4">
                  <div
                    className="feature-box bg-white"
                    style={{ paddingBottom: "50px" }}
                  >
                    <i className="icon-online-support" />
                    <div className="feature-box-content p-0">
                      <h3>Hỗ trợ trực tuyến 24/7</h3>
                    </div>
                    {/* End .feature-box-content */}
                  </div>
                  {/* End .feature-box */}
                </div>
                {/* End .col-lg-4 */}
              </div>
              {/* End .row */}
            </div>
            {/* End .container */}
          </div>
          {/* End .features-section */}

          <div className="testimonials-section">
            <div className="container">
              <h2 className="subtitle text-center">
                NHỮNG NGƯỜI BẠN ĐỒNG HÀNH CÙNG COLI
              </h2>
              <div
                className="testimonials-carousel owl-carousel owl-theme images-left"
                data-owl-options="{
						'margin': 20,
                  'lazyLoad': true,
                  'autoHeight': true,
                  'dots': false,
                  'responsive': {
                      '0': {
                          'items': 1
                      },
                      '992': {
                          'items': 2
                      }
                  }
              }"
              >
                <div className="testimonial">
                  <div className="testimonial-owner">
                    <figure>
                      <img
                        src="https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/438089701_1769320096925981_328575523395496534_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeE2LKDlnJ9ym0iTeGFY0aKf8OQGvsFhR33w5Aa-wWFHfTOqI7mLq9U5gb5zl1nr0k9RK62OduLLq3wM3FU2CQfL&_nc_ohc=7gYEKfMBndkQ7kNvgG7FEru&_nc_ht=scontent.fdad3-5.fna&oh=00_AYDEmYONQCvUZHhiJlCEsRI9jiXbTKyCg-L-ilpuZisKSw&oe=6675984F"
                        alt="client"
                        style={{
                          borderRadius: "50%",
                          height: "40px",
                          width: "40px",
                        }}
                      />
                    </figure>
                    <div>
                      <strong className="testimonial-title">YẾN MINH</strong>
                      <span>CEO</span>
                    </div>
                  </div>
                  {/* End .testimonial-owner */}
                  <blockquote>
                    <p>
                      "Where Fashion Retires, You Reinvent!" <br />
                      Hãy đón nhận sự sáng tạo, tính bền vững và thể hiện cá
                      nhân để biến tủ quần áo của bạn thành sự phản ánh tinh
                      thần độc đáo của bạn.
                    </p>
                  </blockquote>
                </div>

                {/* End .testimonial */}
                <div className="testimonial">
                  <div className="testimonial-owner">
                    <figure>
                      <img
                        src="https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/345652153_3468834483397284_7102834914292738931_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFl2wEzkHUolHJmPidMdfFubEKkA8ZYB4lsQqQDxlgHiROEatpnt4yORDTb4GYNaqTefpXUZq4FUlunl_pyvdzt&_nc_ohc=aWrOcY1vZ5IQ7kNvgGVn891&_nc_ht=scontent.fdad3-5.fna&oh=00_AYD5nWICP-xSVGg8MwR_QpmhMK2aep4OQbl-2Qa0RMgr3Q&oe=66759370"
                        alt="client"
                        style={{
                          borderRadius: "50%",
                          height: "40px",
                          width: "40px",
                        }}
                      />
                    </figure>
                    <div>
                      <strong className="testimonial-title">HỒNG NHUNG</strong>
                      <span>CFO</span>
                    </div>
                  </div>
                  {/* End .testimonial-owner */}
                  <blockquote>
                    <p>
                      “Hãy dũng cảm khám phá, đổi mới và sáng tạo để tạo ra
                      những xu hướng thời trang mới mẻ, thúc đẩy sự phát triển
                      của ngành công nghiệp thời trang.”
                    </p>
                  </blockquote>
                </div>
                {/* End .testimonial */}
                <div className="testimonial">
                  <div className="testimonial-owner">
                    <figure>
                      <img
                        src="https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/198819084_3069986689946038_1086843932727177423_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFax0GqBMFky8uTd1EXPn68W5R8aQq3oDRblHxpCregNIfSez5N612glhXi8OjJ--_ABly6Di40XMDdivZg1P5w&_nc_ohc=Qs2dyReCFI4Q7kNvgGdvTmM&_nc_ht=scontent.fdad3-5.fna&oh=00_AYC9JE11UP7DcIUZQwMyZEx7AKQPlGfjLikuF1rs-QZHbg&oe=667587C8"
                        alt="client"
                        style={{
                          borderRadius: "50%",
                          height: "40px",
                          width: "40px",
                        }}
                      />
                    </figure>
                    <div>
                      <strong className="testimonial-title">BẢO NGỌC</strong>
                      <span>VSMO</span>
                    </div>
                  </div>
                  {/* End .testimonial-owner */}
                  <blockquote>
                    <p>
                      Reinvent Your Wardrobe, Inspire the World! <br />
                      Biến đổi phong cách của bạn một cách bền vững, khám phá
                      diện mạo độc đáo của riêng bạn và tự tin dẫn đầu.
                    </p>
                  </blockquote>
                </div>
                {/* End .testimonial */}
              </div>
              {/* End .testimonials-slider */}
            </div>
            {/* End .container */}
          </div>
          {/* End .testimonials-section */}
          <div className="counters-section bg-gray">
            <div className="container">
              <div className="row">
                <div className="col-6 col-md-4 count-container">
                  <div className="count-wrapper">
                    <span
                      className="count-to"
                      data-from={0}
                      data-to={200}
                      data-speed={2000}
                      data-refresh-interval={50}
                    >
                      200
                    </span>
                    +
                  </div>
                  {/* End .count-wrapper */}
                  <h4 className="count-title">MILLION CUSTOMERS</h4>
                </div>
                {/* End .col-md-4 */}
                <div className="col-6 col-md-4 count-container">
                  <div className="count-wrapper">
                    <span
                      className="count-to"
                      data-from={0}
                      data-to={1800}
                      data-speed={2000}
                      data-refresh-interval={50}
                    >
                      1800
                    </span>
                    +
                  </div>
                  {/* End .count-wrapper */}
                  <h4 className="count-title">TEAM MEMBERS</h4>
                </div>
                {/* End .col-md-4 */}
                <div className="col-6 col-md-4 count-container">
                  <div className="count-wrapper line-height-1">
                    <span
                      className="count-to"
                      data-from={0}
                      data-to={24}
                      data-speed={2000}
                      data-refresh-interval={50}
                    >
                      24
                    </span>
                    <span>HR</span>
                  </div>
                  {/* End .count-wrapper */}
                  <h4 className="count-title">SUPPORT AVAILABLE</h4>
                </div>
                {/* End .col-md-4 */}
                <div className="col-6 col-md-4 count-container">
                  <div className="count-wrapper">
                    <span
                      className="count-to"
                      data-from={0}
                      data-to={265}
                      data-speed={2000}
                      data-refresh-interval={50}
                    >
                      265
                    </span>
                    +
                  </div>
                  {/* End .count-wrapper */}
                  <h4 className="count-title">SUPPORT AVAILABLE</h4>
                </div>
                {/* End .col-md-4 */}
                <div className="col-6 col-md-4 count-container">
                  <div className="count-wrapper line-height-1">
                    <span
                      className="count-to"
                      data-from={0}
                      data-to={99}
                      data-speed={2000}
                      data-refresh-interval={50}
                    >
                      99
                    </span>
                    <span>%</span>
                  </div>
                  {/* End .count-wrapper */}
                  <h4 className="count-title">SUPPORT AVAILABLE</h4>
                </div>
                {/* End .col-md-4 */}
              </div>
              {/* End .row */}
            </div>
            {/* End .container */}
          </div>
          {/* End .counters-section */}
        </div>
      </main>
    </div>
  );
};

export default AboutKG;
