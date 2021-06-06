import React from 'react';
const FashionMenTopSubmenu =(props) =>{
  return (
    <>
     <li className="innerRightDrop">
     <a href="">{props.SubMenu}</a></li>
                   
    </>
  );
};
const FashionWomenTopSubmenu =(props) =>{
  return (
    <>
     <li className="innerRightDrop">
     <a href="">{props.SubMenu}</a></li>
                   
    </>
  );
}
export { FashionMenTopSubmenu, FashionWomenTopSubmenu };