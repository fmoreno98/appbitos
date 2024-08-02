import React from 'react'
import { useState } from 'react'
import { Form, Modal, Button } from 'react-bootstrap';
import './prueba.css'


function prueba(props){

  const [progress, setProgress] = useState(props.progress);
    return(
      <>
          <div className="circular-progress">
            <div className="circular-progress__circle">
              <svg viewBox="0 0 36 36" className="circular-chart">
                <path
                  className="circle-bg"
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="circle"
                  strokeDasharray={`${progress}, 100`}
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <div className="circular-progress__text">
                {progress}%
              </div>
            </div>
          </div>
      
      
      
      
      </>
    )
}

export default prueba;