import React from 'react'
import { Link } from 'react-router-dom'
import a from "../images/slider5.jpg";

export default function Breadcumb(props) {
  return (
    <>
       <section className="about-breadcrumb py-6">
        <div className="about-back section-tb-padding py-24" style={{ backgroundImage: `url('${a}')` }}>
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="about-l">
                  <ul className="about-link text-white text-center">
                    <li className="go-home font-bold text-2xl"><Link to="/home">Home</Link></li>
                    <li className="about-p font-bold text-2xl cursor-pointer"><span>{props.title}</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
