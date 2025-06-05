import React, { useEffect, useState } from 'react'
import searchIcon from '../../assets/images/magnifying-glass1.png'

const NavSearch = ({ type }) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const searchClass = type === "artist" ? "nav-search-artist" : "nav-search";

  const handleSearchDisplay = () => {
    if (window.innerWidth <= 768) {
      setSearchOpen((prev) => !prev);
    }
  }

  const closeSearch = () => {
    setSearchOpen(false);
  }

  useEffect(() => {
    window.addEventListener("resize", closeSearch);

    return () => {
      window.removeEventListener("resize", closeSearch);
    }
  }, [])

  return (
    <>
      <div className={searchClass}>
        <input type="search" name="search" placeholder="Start your search" autoComplete="off" />
        <button className="search-btn">
          <img src={searchIcon} alt="search" onClick={handleSearchDisplay} />
        </button>
      </div>
      {searchOpen &&
        <div className='mobileSearch'>
          <input type="text" placeholder='Start your search' name='search' autoComplete='off' />
          <div onClick={handleSearchDisplay}>&#x2715;</div>
        </div>
      }
    </>
  )
}

export default NavSearch