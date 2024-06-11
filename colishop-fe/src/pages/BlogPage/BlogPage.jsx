import React from 'react'

const BlogPage = () => {
    return (
        <div className='page-wrapper'>
            <main className='main'>
                <nav aria-label="breadcrumb" className="breadcrumb-nav">
                    <div className="container">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="demo4.html"><i className="icon-home" /></a></li>
                            <li className="breadcrumb-item active" aria-current="page">Blog</li>
                        </ol>
                    </div>{/* End .container */}
                </nav>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="blog-section row">
                                <div className="col-md-6 col-lg-4">
                                    <article className="post">
                                        <div className="post-media">
                                            <a href="/blogdetail">
                                                <img src="assets/images/blog/home/post-1.jpg" alt="Post" width={225} height={280} />
                                            </a>
                                            <div className="post-date">
                                                <span className="day">26</span>
                                                <span className="month">Feb</span>
                                            </div>
                                        </div>{/* End .post-media */}
                                        <div className="post-body">
                                            <h2 className="post-title">
                                                <a href="/blogdetail">Top New Collection</a>
                                            </h2>
                                            <div className="post-content">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non
                                                    placerat mi.
                                                    Etiam non tellus sem. Aenean...</p>
                                            </div>{/* End .post-content */}
                                            <a href="single.html" className="post-comment">0 Comments</a>
                                        </div>{/* End .post-body */}
                                    </article>{/* End .post */}
                                </div>
                                <div className="col-md-6 col-lg-4">
                                    <article className="post">
                                        <div className="post-media">
                                            <a href="single.html">
                                                <img src="assets/images/blog/home/post-2.jpg" alt="Post" width={225} height={280} />
                                            </a>
                                            <div className="post-date">
                                                <span className="day">26</span>
                                                <span className="month">Feb</span>
                                            </div>
                                        </div>{/* End .post-media */}
                                        <div className="post-body">
                                            <h2 className="post-title">
                                                <a href="single.html">Fashion Trends</a>
                                            </h2>
                                            <div className="post-content">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non
                                                    placerat mi.
                                                    Etiam non tellus sem. Aenean...</p>
                                            </div>{/* End .post-content */}
                                            <a href="single.html" className="post-comment">0 Comments</a>
                                        </div>{/* End .post-body */}
                                    </article>{/* End .post */}
                                </div>
                                <div className="col-md-6 col-lg-4">
                                    <article className="post">
                                        <div className="post-media">
                                            <a href="single.html">
                                                <img src="assets/images/blog/home/post-3.jpg" alt="Post" width={225} height={280} />
                                            </a>
                                            <div className="post-date">
                                                <span className="day">26</span>
                                                <span className="month">Feb</span>
                                            </div>
                                        </div>{/* End .post-media */}
                                        <div className="post-body">
                                            <h2 className="post-title">
                                                <a href="single.html">Etiam laoreet sem</a>
                                            </h2>
                                            <div className="post-content">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non
                                                    placerat mi.
                                                    Etiam non tellus sem. Aenean...</p>
                                            </div>{/* End .post-content */}
                                            <a href="single.html" className="post-comment">0 Comments</a>
                                        </div>{/* End .post-body */}
                                    </article>{/* End .post */}
                                </div>
                                <div className="col-md-6 col-lg-4">
                                    <article className="post">
                                        <div className="post-media">
                                            <a href="single.html">
                                                <img src="assets/images/blog/home/post-4.jpg" alt="Post" width={225} height={280} />
                                            </a>
                                            <div className="post-date">
                                                <span className="day">26</span>
                                                <span className="month">Feb</span>
                                            </div>
                                        </div>{/* End .post-media */}
                                        <div className="post-body">
                                            <h2 className="post-title">
                                                <a href="single.html">Perfect Accessories</a>
                                            </h2>
                                            <div className="post-content">
                                                <p>Leap into electronic typesetting, remaining essentially unchanged. It was
                                                    popularised in the 1960s with the release of Letraset sheets...
                                                </p>
                                            </div>{/* End .post-content */}
                                            <a href="single.html" className="post-comment">0 Comments</a>
                                        </div>{/* End .post-body */}
                                    </article>{/* End .post */}
                                </div>
                            </div>
                        </div>{/* End .col-lg-9 */}

                        
                        <div className="sidebar-toggle custom-sidebar-toggle">
                            <i className="fas fa-sliders-h" />
                        </div>

                        <div className="sidebar-overlay" />
                        <aside className="sidebar mobile-sidebar col-lg-3">
                            <div className="sidebar-wrapper" data-sticky-sidebar-options="{&quot;offsetTop&quot;: 72}">
                                <div className="widget widget-categories">
                                    <h4 className="widget-title">Blog Categories</h4>
                                    <ul className="list">
                                        <li>
                                            <a href="#">All about clothing</a>
                                            <ul className="list">
                                                <li><a href="#">Dresses</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#">Make-up &amp; beauty</a></li>
                                        <li><a href="#">Accessories</a></li>
                                        <li><a href="#">Fashion trends</a></li>
                                        <li><a href="#">Haircuts &amp; hairstyles</a></li>
                                    </ul>
                                </div>{/* End .widget */}
                                <div className="widget widget-post">
                                    <h4 className="widget-title">Recent Posts</h4>
                                    <ul className="simple-post-list">
                                        <li>
                                            <div className="post-media">
                                                <a href="single.html">
                                                    <img src="assets/images/blog/widget/post-1.jpg" alt="Post" />
                                                </a>
                                            </div>{/* End .post-media */}
                                            <div className="post-info">
                                                <a href="single.html">Top New Collection</a>
                                                <div className="post-meta">February 26, 2018</div>
                                                {/* End .post-meta */}
                                            </div>{/* End .post-info */}
                                        </li>
                                        <li>
                                            <div className="post-media">
                                                <a href="single.html">
                                                    <img src="assets/images/blog/widget/post-2.jpg" alt="Post" />
                                                </a>
                                            </div>{/* End .post-media */}
                                            <div className="post-info">
                                                <a href="single.html">Fashion Trends</a>
                                                <div className="post-meta">February 26, 2018</div>{/* End .post-meta */}
                                            </div>{/* End .post-info */}
                                        </li>
                                    </ul>
                                </div>{/* End .widget */}
                                <div className="widget">
                                    <h4 className="widget-title">Tags</h4>
                                    <div className="tagcloud">
                                        <a href="#">ARTICLES</a>
                                        <a href="#">CHAT</a>
                                    </div>{/* End .tagcloud */}
                                </div>{/* End .widget */}
                            </div>{/* End .sidebar-wrapper */}
                        </aside>{/* End .col-lg-3 */}
                    </div>{/* End .row */}
                </div>{/* End .container */}


            </main>
        </div>
    )
}

export default BlogPage