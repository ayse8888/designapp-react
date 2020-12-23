import React from 'react';

const Card = ({id,name,url,text}) => {
  return (
          <div className="card mb-3">
            <img src={url} className="card-img-top w-100" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">
                  {text}
                </p>
                <a href="#" className="btn btn-outline-dark">Go somewhere</a>
              </div>
          </div>
  )
}

export default Card

