import React from 'react';
import './Header.css';

const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container d_flex">
          <div className="left row">
            <i className="fa fa-phone"></i>
            <label>+01234 567 890</label>
            <i className="fa fa-envelope"></i>
            <label>cell@gmail.com</label>
          </div>
          <div className="right row RText">
            <label>Theme FAQ's</label>
            <label>Need Helps</label>
            <i class="fa-solid fa-flag"></i>
            <label>EN</label>
            <i class="fa-solid fa-flag"></i>
            <label>USD</label>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
