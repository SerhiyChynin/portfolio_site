import React from 'react';
import { works } from '../../constants/data';
import './Work.css';
import {BsPlusLg} from 'react-icons/bs'
import {ImCancelCircle} from 'react-icons/im'

function Work() {
  return (
      <div className='work section-p bg-grey' id='work'>
          <div className="container">
              <div className="work-content">
                  <div className="section-title">
                      <h3 className="text-brown">latest <span className='text-dark'>works</span></h3>
                      <p className="text">I offer the right solutions for your digital business.</p>
                  </div>
                  <div className="work-list grid">
                      {
                          works.map((item, index) => {
                              return (
                                  <div className="work-item text-center" key={index}>
                                      <img src={item.image} alt="" />
                                      <span className='work-item-icon'>
                                          <BsPlusLg size={38} className="text-brown"/>
                                      </span>
                                  </div>
                              )
                          })
                      }
                  </div>
              </div>
        </div>
      </div>
  )
}

export default Work