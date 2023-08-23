import React from 'react';
import './NoticeBoard.css';

const NoticeBoard = () => {
  return (
    <div className='notice-board'>
    <h1 className='title'>Notice Board</h1>
    <span className='date'>22 August, 2023</span>
    <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc purus nisl,
     ornare vitae quam et, rutrum egestas lorem.Aenean consectetur magna ut volutpat
      scelerisque.Nulla iaculis luctus elit at rhoncus.Aenean aliquam dignissim urna ut
       consectetur.Pellentesque et ante dui.Nam efficitur convallis enim, vitae pulvinar
        metus vulputate sed. Proin eget fringilla tellus. Suspendisse semper at ante ac malesuada.</p>
    <span className='author'>Author Name</span>
    <span className='time'> / time</span>
    </div>
  )
}

export default NoticeBoard