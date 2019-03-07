import React from 'react';


const SmallCard = (props) => {
    return(

        <div className="col-md-3">
            <div className="card text-center ">
                      <h4>{props.heading}</h4>
                      <small>{props.content}</small>


              </div>
        </div>

    )

 };

SmallCard.defaultProps = {
        heading:'heading here',
        content:"content here",

};



export {SmallCard}





