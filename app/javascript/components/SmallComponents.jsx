import React from 'react';


const SmallCard = (props) => {
    return(

        <div className="col-md-3">
            <div className="card text-center ">
                      <h4 className="pt-2">{props.heading}</h4>
                      <small className="pb-2">{props.content}</small>


              </div>
        </div>

    )

 };

SmallCard.defaultProps = {
        heading:'heading here',
        content:"content here",

};



export {SmallCard}





