import React from 'react';

const Componentx = (props) => {
  console.log(props.data.id);
  return (
    <div>
      <img className="image" src={props.data.image} alt="" />
      <div className="body">
        <span className="name">{props.data.name}</span>
        <span className="id">id:{props.data.id}</span>
      </div>
    </div>
  );
};

export default Componentx;
