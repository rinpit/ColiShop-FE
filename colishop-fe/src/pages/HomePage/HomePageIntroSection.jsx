import React from 'react'

const HomePageIntroSection = () => {
    return (
        <div>
            <section className="intro-section mb-3">
                <div className="home-slider slide-animate owl-carousel owl-theme"
                    data-owl-options="{'nav': false,'responsive': {'1440': {'nav': true}}}"
                >
                    <div className="home-slide home-slide-1 banner">
                        <img className="slide-bg" src="assets/images/demoes/demo23/slider/slide-1.jpg" alt="slider image" width={1200} height={575} />
                        <div className="banner-layer banner-layer-middle banner-layer-left">
                            <div className="container-fluid">
                                <div className="appear-animate" data-animation-name="fadeInLeftShorter" data-animation-delay={200}>
                                    <h2 className="font-weight-light ls-10 text-primary">Discover our Arrivals!</h2>
                                    <a href="demo23-shop.html" className="btn btn-link"><i>View our Dresses</i><i className="icon-right-open-big" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="home-slide home-slide-2 banner">
                        <img className="slide-bg" src="assets/images/demoes/demo23/slider/slide-2.jpg" alt="slider image" width={1200} height={575} />
                        <div className="banner-layer banner-layer-middle banner-layer-right w-100">
                            <div className="container-fluid">
                                <div className="col-6 offset-6 appear-animate" data-animation-name="fadeInRightShorter" data-animation-delay={200}>
                                    <h2 className="font-weight-light ls-10 text-primary">Trendy Collections!</h2>
                                    <a href="demo23-shop.html" className="btn btn-link"><i>View our Specials</i><i className="icon-right-open-big" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomePageIntroSection