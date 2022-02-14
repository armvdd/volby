import React from 'react';
import './style.css';



const Candidate = (props) =>{

  const handleClick = () => {
      props.president(props.name)
  }

return (
  <div className="candidate">
    <h3 className="candidate__name">{props.name}</h3>
    <img className="candidate__avatar" src={props.avatar} />
    <button className="btn-vote" onClick={handleClick}>Vybrat</button>
  </div>
)
  
} ;

export default Candidate;