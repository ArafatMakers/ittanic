import React from "react";
// import winestore from "../image/wineStore.jpg";

import "./SectionText.css";

const SectionText = () => {
  return (
    <div>
      <img
        className="imgStavka"
        src="http://sun9-28.userapi.com/impf/UKBEiY3wzjvBaXlkdF09afnNJ-9wo-0SdRdEYg/UKZqSvUeiqM.jpg?size=1590x530&quality=95&crop=0,0,1590,530&sign=c03038ee4aeb70641e1805683c95810e&type=cover_group"
        alt=""
      />
      <div className="sectionText">
        The best games on all leading platforms in all genres. List of the most
        popular games with release dates, reviews and descriptions,
      </div>
      <div className="sectionTextBlock">
        <div className="sectionTextOne">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          consequuntur culpa in. Atque, omnis expedita! Commodi dicta aspernatur
          tempore libero ex expedita beatae cupiditate voluptate deserunt, sed
          suscipit, quibusdam voluptatibus! asperiores em corporis accusantium?
        </div>
        <div className="sectionTextTwo">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ut
          adipisci velit nisi. Ipsa ipsam quas fugit et perspiciatis
          necessitatibus.Incidunt dolorum laborum maxime provident magni iste
          esse architecto mollitia nam est necessitatibus debitis aperiam
          asperiores, fuga molestiae a magnam recusandae!
        </div>
      </div>
    </div>
  );
};

export default SectionText;
