import React from 'react';
import er404 from '../../images/404 golden fork.avif';

const NotFound = () => {
    return (
      <div>
        <div className="container mt-3 mb-5 ">
                <img src={er404} alt="" style={{
                    width: "50%",
                    display: "block",
                    margin:"auto"
                    
            }} />
        </div>
      </div>
    );
};

export default NotFound;