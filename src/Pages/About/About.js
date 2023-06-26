import React from 'react';
import logo from '../../images//logo2.png';
import chef4 from '../../images/chef/chef4.jpg';
import chef1 from '../../images/chef/chef1.jpg';
import chef2 from '../../images/chef/chef2.jpg';
import chef3 from '../../images/chef/chef3.jpg';
import vid from "../../images/chef/stake.mp4"
import './About.css';
const About = () => {
  return (
    <div className="mt-5 mb-5 container text-center">
      <h2>
        Here is our resturant <img src={logo} alt="" style={{ width: '20%' }} />{' '}
      </h2>
      <div>
        <div className="chef mt-5 mb-5">
          <div className="video">
            <h1> " Beef Stake "</h1>
            <p>This is our one of the most famous recipe</p>
            <video controls src={vid}></video>
          </div>

          <div className="text-start">
            <h1 className="text-center"> Directions </h1>
            <div className="videochef-text">
              <div>
                <h6>Step 1</h6>
                <p>
                  Place sliced beef in a large bowl. Whisk together lemon juice,
                  soy sauce, sugar, salt, and pepper in a small bowl; pour over
                  beef and toss to coat. Stir in cornstarch. Cover and
                  refrigerate for 1 hour to overnight.
                </p>

                <h6>Step 2</h6>
                <p>Heat vegetable oil in a large skillet over medium heat.</p>

                <h6>Step 3</h6>
                <p>
                  Remove beef slices from marinade, shaking to remove any excess
                  liquid. Discard marinade
                </p>
              </div>

              <div>
                <h6>Step 4</h6>
                <p>
                  Working in batches, fry beef slices in hot oil until they
                  start to firm and are reddish-pink and juicy in the center, 2
                  to 4 minutes per side. Transfer beef slices to a serving
                  platter.
                </p>

                <h6>Step 5</h6>
                <p>
                  Heat olive oil in a small skillet over medium heat. Cook and
                  stir onion and garlic in hot oil until onion is golden brown,
                  5 to 7 minutes; spoon over beef slices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1>Our Chef's</h1>
      <div className="chefs">
        <img src={chef1} alt="" />
        <img src={chef2} alt="" />
        <img src={chef3} alt="" />
      </div>

      <div>
        <div className="chef mt-5 mb-5">
          <div>
            <img src={chef4} alt="" />
          </div>
          <div className="text-start chef-text">
            <p>
              A chef is a professional cook and tradesman who is proficient in
              all aspects of food preparation, often focusing on a particular
              cuisine. A chef is a professional cook and tradesman who is
              proficient in all aspects of food preparation, often focusing on a
              particular cuisine. A chef is a professional cook and tradesman
              who is proficient in all aspects of food preparation, often
              focusing on a particular cuisine.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
