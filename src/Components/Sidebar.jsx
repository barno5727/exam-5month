import React from 'react';
import {NavLink } from 'react-router-dom';
import { home, trending, subscribe, library, history, watch, favourit, like, music, games, showMore } from '../assets';

const Sidebar = () => {
  return (
    <div className='w-full max-w-[200px] h-screen pl-4  text-slate-400 '>
      <NavLink to='/' className='flex text-red gap-3 pt-7'>
        <img src={home} alt="" />
        <span className='text-red-600'>
          Home
        </span>
      </NavLink>
      <NavLink to='/' className='flex gap-3 pt-4 '>
        <img src={trending} alt="" />
        <span>
          Trending
        </span>
      </NavLink>
      <NavLink to='/subscription' className='flex gap-3 pt-4 '>
        <img src={subscribe} alt="" />
        <span>
         Subscriptions
        </span>
      </NavLink>
      <NavLink to='/' className='flex gap-3 pt-9 '>
        <img src={library} alt="" />
        <span>
         Library
        </span>
      </NavLink>
      <NavLink to='/' className='flex gap-3 pt-4 '>
        <img src={history} alt="" />
        <span>
         History
        </span>
      </NavLink>
      <NavLink to='/' className='flex gap-3 pt-4 '>
        <img src={watch} alt="" />
        <span>
        Watch later
        </span>
      </NavLink>
      <NavLink to='/' className='flex gap-3 pt-4 '>
        <img src={favourit} alt="" />
        <span>
        Favourites
        </span>
      </NavLink>
      <NavLink to='/' className='flex gap-3 pt-4 '>
        <img src={like} alt="" />
        <span>
        Liked videos
        </span>
      </NavLink>
      <NavLink to='/' className='flex gap-3 pt-4 '>
        <img src={music} alt="" />
        <span>
        Music
        </span>
      </NavLink>
      <NavLink to='/' className='flex gap-3 pt-4 '>
        <img src={games} alt="" />
        <span>
        Games
        </span>
      </NavLink>
      <NavLink to='/' className='flex gap-3 pt-4 '>
        <img src={showMore} alt="" />
        <span>
        Show more
        </span>
      </NavLink>

      <div>
      </div>
    </div>
  )
}

export default Sidebar