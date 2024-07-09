import React from 'react'

const HomePageSlide = () => {
    return (
        <div className="row mb-2">
            <div className="col-md-8 col-lg-6">
                <div className="banner banner1 mb-2 appear-animate" data-animation-name="fadeIn" data-animation-delay={200} style={{ backgroundColor: '#d8d8d8' }} >
                    <figure>
                        <img src="assets/images/demoes/demo23/banners/banner-1.jpg" alt="banner" width={580} height={374} />
                    </figure>
                    <div className="banner-layer d-flex flex-column align-items-end justify-content-center">
                        <div className="text-justify">
                            <h3 className="font4 font-weight-bold ls-n-25 text-uppercase mb-0">Discounts</h3>
                            <h4 className="ls-n-25 text-uppercase">Up to 70%</h4>
                            <a href="demo23-shop.html" className="btn btn-link"><i>View our Deals</i><i className="icon-right-open-big" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4 col-lg-3">
                <div className="banner banner2 mb-2 appear-animate" data-animation-name="fadeIn" data-animation-delay={200} style={{ backgroundColor: '#f0f5f8' }}>
                    <figure>
                        <img src="assets/images/demoes/demo23/banners/banner-2.jpg" alt="banner" width={280} height={374} />
                    </figure>
                    <div className="banner-layer d-flex flex-column align-items-center justify-content-end">
                        <h2 className="ls-n-25 text-uppercase">Summer classics</h2>
                        <a href="demo23-shop.html" className="btn btn-link"><i>View our Classics</i><i className="icon-right-open-big" /></a>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-3">
                <div className="banner banner3 mb-2 appear-animate" data-animation-name="fadeIn" data-animation-delay={200} style={{ backgroundColor: '#ededed' }}>
                    <figure>
                        <img src="assets/images/demoes/demo23/banners/banner-3.jpg" alt="banner" width={280} height={374} />
                    </figure>
                    <div className="banner-layer d-flex flex-column align-items-center justify-content-between">
                        <h2 className="font-weight-bold ls-n-25 text-center text-uppercase">Mother &amp;
                            Daughter</h2>
                        <a href="demo23-shop.html" className="btn btn-link"><i>View our Outfits</i><i className="icon-right-open-big" /></a>
                    </div>
                </div>
            </div>
        </div>





        
    )
}

export default HomePageSlide