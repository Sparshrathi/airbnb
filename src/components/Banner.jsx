import React, { useState } from 'react'
import "../style/Banner.css";
import { Button } from '@mui/material';
import Search from './Search';
import { useNavigate } from "react-router-dom";

function Banner() {
    const navigate = useNavigate();
    const [ShowSearch, setShowSearch]= useState(false);

  return (
    <div className='banner'>
        <div className="banner_search">
            {ShowSearch && <Search/>}
            <Button onClick={()=> setShowSearch(!ShowSearch)} 
            variant='outlined' className='banner_searchButton'>
                {!ShowSearch ? 'Search Date': 'Hide'}
            </Button>

        </div>
        
        <div className="banner_info">
            <h1>Get out and stretch your imagination</h1>
            <h5>Plan a different kind of getaway to uncover the hidden gems near you </h5>    
            <Button variant="outline" onClick={()=>navigate("/search")}>
                Explore Nearby
            </Button>
        </div>

    </div>
  )
}

export default Banner