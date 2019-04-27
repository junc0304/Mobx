import React from 'react';
import Header from './Header';


export default (props) => {

  return (
    <div className="bg" >
               
                <div className="container" >
                    { props.children }
                </div>

            </div>
  );
}