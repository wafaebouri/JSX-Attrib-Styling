import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading">My Favourite Foods</h1>
    <img alt="random" src={img + "?grayscale"} />

    <img
      className="food-img"
      alt="mango"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Carabao_mangoes_%28Philippines%29.jpg/800px-Carabao_mangoes_%28Philippines%29.jpg"
    />
    <img
      className="food-img"
      alt="noodles"
      src="https://www.errenskitchen.com/wp-content/uploads/2014/04/quick-and-easy-chinese-noodle-soup3-1.jpg"
    />
    <img
      className="food-img"
      alt="lamb"
      src="https://i0.wp.com/www.themountainkitchen.com/wp-content/uploads/2021/12/grilled-rack-of-lamb-on-platter-with-mountain-view.jpg"
    />
  </div>,
  document.getElementById("root")
);
