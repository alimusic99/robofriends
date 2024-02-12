import React from 'react';

const SearchBox = ({SearchChange}) => {

	return(
      <div className= 'pa2'>
          <input
          className='pa3 ba b--green bg-lightest-blue'
           type='Search'
            placeholder='SearchForRobots'
            onChange={SearchChange}
            />
       </div>
		);
}

export default SearchBox;