import React from "react";

function BlogDetailsComments() {
  return (
    <div className="blog-comments">
      <div className="blog-comments-container">
        <h2>03 Comment</h2>
        <div className="comments-content">
          <div className="comment-container">
            <div className="blog-comment-head">
              <div className="blog-comment-img">
                <img
                  src="https://htmldemo.net/juan/juan/assets/img/blog/comment-icon.png"
                  alt=""
                />
              </div>
              <div className="blog-comment-author">
                <div className="blog-author-name">
                  <span>Admin</span>
                  <p>15 Dec, 2019 at 9:30pm</p>
                </div>
                <button>Reply</button>
              </div>
            </div>
            <div className="blog-comment-text">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                maiores adipisci optio ex, laboriosam facilis non pariatur
                itaque illo sunt?
              </p>
            </div>
          </div>
          <div className="comment-container" style={{marginLeft:"40px"}}>
            <div className="blog-comment-head">
              <div className="blog-comment-img">
                <img
                  src="https://htmldemo.net/juan/juan/assets/img/blog/comment-icon.png"
                  alt=""
                />
              </div>
              <div className="blog-comment-author">
                <div className="blog-author-name">
                  <span>Admin</span>
                  <p>15 Dec, 2019 at 9:30pm</p>
                </div>
                <button>Reply</button>
              </div>
            </div>
            <div className="blog-comment-text">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                maiores adipisci optio ex, laboriosam facilis non pariatur
                itaque illo sunt?
              </p>
            </div>
          </div>
          <div className="comment-container">
            <div className="blog-comment-head">
              <div className="blog-comment-img">
                <img
                  src="https://htmldemo.net/juan/juan/assets/img/blog/comment-icon.png"
                  alt=""
                />
              </div>
              <div className="blog-comment-author">
                <div className="blog-author-name">
                  <span>Admin</span>
                  <p>15 Dec, 2019 at 9:30pm</p>
                </div>
                <button>Reply</button>
              </div>
            </div>
            <div className="blog-comment-text">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                maiores adipisci optio ex, laboriosam facilis non pariatur
                itaque illo sunt?
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="blog-comments-reply">
        <div className="blog-comments-reply-container">
            <h2>Leave A Reply</h2>
            <p>Email address will not be published. Required fields are marked *</p>
            <div className="blog-comments-inputs">
                <div className="comment-textarea">
                    <p>Comment</p>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Write a comment"></textarea>
                </div>
                <div className="comment-input">
                    <div className="comment-input-item comment-name">
                        <p>Name</p>
                        <input type="text" placeholder="Name"/>
                    </div>
                    <div className="comment-input-item comment-email">
                        <p>Email</p>
                        <input type="text" placeholder="Email"/>
                    </div>
                    <div className="comment-input-item comment-website">
                        <p>Website</p>
                        <input type="text" placeholder="Website"/>
                    </div>
                </div>
                <button>
                    POST COMMENT
                </button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetailsComments;
