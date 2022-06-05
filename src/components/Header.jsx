import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

function Header() {
  return (
    <div className='header'>

        <div className="header_icon">
       <img src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
        alt="" />
        </div>

        <div className="header_center">
            <input type="text"/>
            <SearchIcon/>
        </div>

        <div className="header_right">
        </div>

    </div>
  )
}

export default Header