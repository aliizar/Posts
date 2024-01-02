import React from 'react';
import Pic from './IMG_20231211_204124_522.jpg'
const About = () => {
  return (
    <div className="bg-gray-800 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-4 text-gray-100">Our Story</h1>
            <p className="text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              facilisi. Integer hendrerit lectus nec metus vulputate, vel
              vestibulum neque consequat. Fusce efficitur augue eu sollicitudin
              tristique.
            </p>
            <p className="text-gray-300 mt-4">
              Vestibulum hendrerit ullamcorper diam, eu efficitur odio. Curabitur
              imperdiet enim vitae sapien luctus feugiat. Phasellus auctor
              pellentesque purus id ultrices. Vivamus eu tortor ac libero
              faucibus accumsan. Sed bibendum mauris vel nibh tincidunt, vel
              vestibulum eros dapibus.
            </p>
          </div>

          <div className="md:ml-auto">
            <img
              src={Pic}
              alt="About Us"
              className="rounded-lg h-96 w-96 shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

