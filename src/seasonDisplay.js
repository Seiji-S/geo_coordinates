import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
  summer:{
    text:'Lets hit the beach',
    iconName:'sun'
  },
  winter:{
    text:'Brr, its chilly',
    iconName:'snowflake'
  }
};

const getSeason = (lat,month) =>{
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
    //checks northern hemisphere
  } else {
    return lat > 0 ? 'winter' : 'summer';
    //ternary operator checks if winter else summer
    // checks southern hemisphere
  }
}

const SeasonDisplay = (props) => {
  const season = getSeason( props.lat, new Date().getMonth() );
  const {text, iconName} = seasonConfig[season]
  return (
    <div className ={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};
//value of icon and classname icon

export default SeasonDisplay
