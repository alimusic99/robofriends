import react from 'react';

const Card = (props) => {
   
  return(
      <div className= 'bg-light-green dib br3 pa2 ma2 grow bw2 shadow-5 tc' >
        <img alt='robots' src={`https://robohash.org/${props.id}?200*200`}/>
        <div>
           <h2>{props.name}</h2>
           <p>{props.email}</p>
      </div>
      </div>
  	);

}

export default Card;