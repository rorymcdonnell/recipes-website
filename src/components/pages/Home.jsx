import React from "react";

const Home = () => {
  return (
    <div className="home-page">
      <h1 className="home-title">Recipes Website</h1>
      <div className="home-input">
        <input
          autocomplete="off"
          className="home-searchbar"
          type="text"
          id="header-search"
          placeholder="Search blog posts"
          name="s"
        />
      </div>
    </div>
  );
};

export default Home;
