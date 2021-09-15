import React from 'react';


const SearchBox=({searchfeild, searchChange})=>{
    return(
            <div className='pa2'>
                <input 
                className='pa3 ba b--white bg-green
                '
                 type="search" 
                 placeholder='Search by client name' 
                 onChange={searchChange}/>
            </div>
        );
}

export default SearchBox;
