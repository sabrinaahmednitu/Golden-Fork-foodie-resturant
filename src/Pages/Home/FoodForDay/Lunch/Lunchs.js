import React from 'react';
import { useEffect, useState } from 'react';
import Lunch from './Lunch';
import './Lunchs.css'

const Lunchs = () => {
       const [allLunchs, setLunch] = useState([]);
       useEffect(() => {
         fetch('lunch.json')
           .then((res) => res.json())
           .then((data) => setLunch(data));
       }, []);
    return (
      <div className="container">
        <div className="row">
          <div className="services-container">
            {allLunchs.map((lunch) => (
              <Lunch key={lunch._id} lunch={lunch}></Lunch>
            ))}
          </div>
        </div>
      </div>
    );
};

export default Lunchs;