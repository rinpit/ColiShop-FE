import React from 'react'

const BlogDetailPage = () => {
    return (
        <div className='page-wrapper'>
            <main className='main'>
                <nav aria-label="breadcrumb" className="breadcrumb-nav">
                    <div className="container">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="demo4.html"><i className="icon-home" /></a></li>
                            <li className="breadcrumb-item active" aria-current="page">Blog Post</li>
                        </ol>
                    </div>{/* End .container */}
                </nav>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                            <article className="post single">
                                <div className="post-media">
                                    <img src="assets/images/blog/post-1.jpg" alt="Post" />
                                </div>{/* End .post-media */}
                                <div className="post-body">
                                    <div className="post-date">
                                        <span className="day">22</span>
                                        <span className="month">Jun</span>
                                    </div>{/* End .post-date */}
                                    <h2 className="post-title">Top New Collection</h2>
                                    <div className="post-meta">
                                        <a href="#" className="hash-scroll">0 Comments</a>
                                    </div>{/* End .post-meta */}
                                    <div className="post-content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non placerat mi.
                                            Etiam non tellus sem. Aenean pretium convallis lorem, sit amet dapibus ante
                                            mollis a. Integer bibendum interdum sem, eget volutpat purus pulvinar in. Sed
                                            tristique augue vitae sagittis porta. Phasellus ullamcorper, dolor suscipit
                                            mattis viverra, sapien elit condimentum odio, ut imperdiet nisi risus sit amet
                                            ante. Sed sem lorem, laoreet et facilisis quis, tincidunt non lorem. Etiam
                                            tempus, dolor in sollicitudin faucibus, sem massa accumsan erat.
                                        </p>
                                        <h3>“ Many
                                            desktop publishing packages and web page editors now use Lorem Ipsum as their
                                            default model search for evolved over sometimes by accident, sometimes on
                                            purpose ”
                                        </h3>
                                        <p>Aenean lorem diam, venenatis nec venenatis id, adipiscing ac massa. Nam vel dui
                                            eget justo dictum pretium a rhoncus ipsum. Donec venenatis erat tincidunt nunc
                                            suscipit, sit amet bibendum lacus posuere. Sed scelerisque, dolor a pharetra
                                            sodales, mi augue consequat sapien, et interdum tellus leo et nunc. Nunc
                                            imperdiet eu libero ut imperdiet.
                                        </p>
                                    </div>{/* End .post-content */}
                                    <div className="post-share">
                                        <h3 className="d-flex align-items-center">
                                            <i className="fas fa-share" />
                                            Share this post
                                        </h3>
                                        <div className="social-icons">
                                            <a href="#" className="social-icon social-facebook" target="_blank" title="Facebook">
                                                <i className="icon-facebook" />
                                            </a>
                                            <a href="#" className="social-icon social-twitter" target="_blank" title="Twitter">
                                                <i className="icon-twitter" />
                                            </a>
                                            <a href="#" className="social-icon social-linkedin" target="_blank" title="Linkedin">
                                                <i className="fab fa-linkedin-in" />
                                            </a>
                                            <a href="#" className="social-icon social-gplus" target="_blank" title="Google +">
                                                <i className="fab fa-google-plus-g" />
                                            </a>
                                            <a href="#" className="social-icon social-mail" target="_blank" title="Email">
                                                <i className="icon-mail-alt" />
                                            </a>
                                        </div>{/* End .social-icons */}
                                    </div>{/* End .post-share */}
                                    <div className="post-author">
                                        <h3><i className="far fa-user" />Author</h3>
                                        <figure>
                                            <a href="#">
                                                <img src="assets/images/blog/author.jpg" alt="author" />
                                            </a>
                                        </figure>
                                        <div className="author-content">
                                            <h4><a href="#">John Doe</a></h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod
                                                odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in
                                                adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis
                                                placerat, felis enim ornare nisi, vitae mattis nulla ante id dui.</p>
                                        </div>{/* End .author.content */}
                                    </div>{/* End .post-author */}
                                    <div className="comment-respond">
                                        <h3>Leave a Reply</h3>
                                        <form action="#">
                                            <p>Your email address will not be published. Required fields are marked *</p>
                                            <div className="form-group">
                                                <label>Comment</label>
                                                <textarea cols={30} rows={1} className="form-control" required defaultValue={""} />
                                            </div>{/* End .form-group */}
                                            <div className="form-group">
                                                <label>Name</label>
                                                <input type="text" className="form-control" required />
                                            </div>{/* End .form-group */}
                                            <div className="form-group">
                                                <label>Email</label>
                                                <input type="email" className="form-control" required />
                                            </div>{/* End .form-group */}
                                            <div className="form-group">
                                                <label>Website</label>
                                                <input type="url" className="form-control" />
                                            </div>{/* End .form-group */}
                                            <div className="form-group-custom-control mb-2">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="save-name" />
                                                    <label className="custom-control-label" htmlFor="save-name">Save my name, email,
                                                        and website in this browser for the next time I comment.</label>
                                                </div>{/* End .custom-checkbox */}
                                            </div>{/* End .form-group-custom-control */}
                                            <div className="form-footer my-0">
                                                <button type="submit" className="btn btn-sm btn-primary">Post
                                                    Comment</button>
                                            </div>{/* End .form-footer */}
                                        </form>
                                    </div>{/* End .comment-respond */}
                                </div>{/* End .post-body */}
                            </article>{/* End .post */}
                            <hr className="mt-2 mb-1" />
                            <div className="related-posts">
                                <h4>Related <strong>Posts</strong></h4>
                                <div className="owl-carousel owl-theme related-posts-carousel" data-owl-options="{
								'dots': false
							}">
                                    <article className="post">
                                        <div className="post-media zoom-effect">
                                            <a href="single.html">
                                                <img src="assets/images/blog/related/post-1.jpg" alt="Post" />
                                            </a>
                                        </div>{/* End .post-media */}
                                        <div className="post-body">
                                            <div className="post-date">
                                                <span className="day">29</span>
                                                <span className="month">Jun</span>
                                            </div>{/* End .post-date */}
                                            <h2 className="post-title">
                                                <a href="single.html">Post Format - Image</a>
                                            </h2>
                                            <div className="post-content">
                                                <p>Euismod atras vulputate iltricies etri elit. Class aptent taciti sociosqu
                                                    ad litora torquent per conubia nostra, per incep tos himens.</p>
                                                <a href="single.html" className="read-more">read more <i className="fas fa-angle-right" /></a>
                                            </div>{/* End .post-content */}
                                        </div>{/* End .post-body */}
                                    </article>
                                    <article className="post">
                                        <div className="post-media zoom-effect">
                                            <a href="single.html">
                                                <img src="assets/images/blog/related/post-2.jpg" alt="Post" />
                                            </a>
                                        </div>{/* End .post-media */}
                                        <div className="post-body">
                                            <div className="post-date">
                                                <span className="day">23</span>
                                                <span className="month">Mar</span>
                                            </div>{/* End .post-date */}
                                            <h2 className="post-title">
                                                <a href="single.html">Post Format - Image</a>
                                            </h2>
                                            <div className="post-content">
                                                <p>Euismod atras vulputate iltricies etri elit. Class aptent taciti sociosqu
                                                    ad litora torquent per conubia nostra, per incep tos himens.</p>
                                                <a href="single.html" className="read-more">read more <i className="fas fa-angle-right" /></a>
                                            </div>{/* End .post-content */}
                                        </div>{/* End .post-body */}
                                    </article>
                                    <article className="post">
                                        <div className="post-media zoom-effect">
                                            <a href="single.html">
                                                <img src="assets/images/blog/related/post-3.jpg" alt="Post" />
                                            </a>
                                        </div>{/* End .post-media */}
                                        <div className="post-body">
                                            <div className="post-date">
                                                <span className="day">14</span>
                                                <span className="month">May</span>
                                            </div>{/* End .post-date */}
                                            <h2 className="post-title">
                                                <a href="single.html">Post Format - Image</a>
                                            </h2>
                                            <div className="post-content">
                                                <p>Euismod atras vulputate iltricies etri elit. Class aptent taciti sociosqu
                                                    ad litora torquent per conubia nostra, per incep tos himens.</p>
                                                <a href="single.html" className="read-more">read more <i className="fas fa-angle-right" /></a>
                                            </div>{/* End .post-content */}
                                        </div>{/* End .post-body */}
                                    </article>
                                    <article className="post">
                                        <div className="post-media zoom-effect">
                                            <a href="single.html">
                                                <img src="assets/images/blog/related/post-1.jpg" alt="Post" />
                                            </a>
                                        </div>{/* End .post-media */}
                                        <div className="post-body">
                                            <div className="post-date">
                                                <span className="day">11</span>
                                                <span className="month">Apr</span>
                                            </div>{/* End .post-date */}
                                            <h2 className="post-title">
                                                <a href="single.html">Post Format - Image</a>
                                            </h2>
                                            <div className="post-content">
                                                <p>Euismod atras vulputate iltricies etri elit. Class aptent taciti sociosqu
                                                    ad litora torquent per conubia nostra, per incep tos himens.</p>
                                                <a href="single.html" className="read-more">read more <i className="fas fa-angle-right" /></a>
                                            </div>{/* End .post-content */}
                                        </div>{/* End .post-body */}
                                    </article>
                                </div>{/* End .owl-carousel */}
                            </div>{/* End .related-posts */}
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
                                <div className="widget">
                                    <h4 className="widget-title">Recent Posts</h4>
                                    <ul className="simple-post-list">
                                        <li>
                                            <div className="post-media">
                                                <a href="single.html">
                                                    <img src="assets/images/blog/widget/post-1.jpg" alt="Post" />
                                                </a>
                                            </div>{/* End .post-media */}
                                            <div className="post-info">
                                                <a href="single.html">Post Format - Video</a>
                                                <div className="post-meta">
                                                    April 08, 2018
                                                </div>{/* End .post-meta */}
                                            </div>{/* End .post-info */}
                                        </li>
                                        <li>
                                            <div className="post-media">
                                                <a href="single.html">
                                                    <img src="assets/images/blog/widget/post-2.jpg" alt="Post" />
                                                </a>
                                            </div>{/* End .post-media */}
                                            <div className="post-info">
                                                <a href="single.html">Post Format - Image</a>
                                                <div className="post-meta">
                                                    March 23, 2016
                                                </div>{/* End .post-meta */}
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

export default BlogDetailPage