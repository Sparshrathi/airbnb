import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import '../style/Header.css';
import LanguageIcon from '@mui/icons-material/Language';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Avatar } from '@mui/material';

function Header() {
  return (
    <div className='header'>

        <img 
            className="header_icon" 
            src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
            alt="" 
        />

        <div className="header_center">
            <input type="text"/>
            <SearchIcon/>
        </div>

        <div className="header_right">
            <p>Become a host</p>
            <LanguageIcon/>
            <KeyboardArrowDownIcon/>
            <Avatar alt="Sparsh Rathi"
                src="https://avatars.githubusercontent.com/u/52618961?s=400&u=8a5555d9881c0caed7122cba4cdbc87339a2fdce&v=4"
            />
        </div>

    </div>
  )
}

export default Header