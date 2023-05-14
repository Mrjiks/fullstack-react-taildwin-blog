import React from "react";
import { aboutInfo } from "../article-contents";

const AboutPage = () => {
  return (
    <div>
      {aboutInfo.map((info) => {
        const { title, url, content, id } = info;

        return (
          <div key={id}>
            <div className='container flex flex-col justify-center p-4 m-auto transition-all'>
              <img
                className='object-cover rounded-lg w-96 h-50'
                src={url}
                alt='Picture of the author'
              />
              <h1 className='mt-4 mb-4 font-bold text-orange-400'>{title}</h1>
              <div>
                <p className='mt-4 text-justify'>{content}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AboutPage;
