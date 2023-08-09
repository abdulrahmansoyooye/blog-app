import React from "react";

const Posts = () => {
  return (
    <div className="post">
      <div className="image">
        <img
          src="https://techcrunch.com/wp-content/uploads/2023/01/Mill_inthekitchen_hero5_scrapsinbin.jpg?w=730&crop=1"
          alt="image"
        />
      </div>

      <div className="texts">
        <h2>
          Can Mill’s tech-heavy food waste bin find its way into kitchens?
        </h2>
        <p className="info">
          <a className="author">Jamal</a>
          <time>10:32 AM</time>
        </p>
        <p className="summary">
          The company wants to help households eliminate half-a-ton of CO2
        </p>
      </div>
    </div>
  );
};

export default Posts;
