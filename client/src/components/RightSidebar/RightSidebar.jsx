import React from 'react';

import Widget from './Widget';
import WidgetTags from './WidgetTags';

import "./RightSidebar.css";

const RightSidebar = () => {
  return (
    <aside className='right-side-bar'>
      <Widget />
      <WidgetTags />
    </aside>
  )
}

export default RightSidebar;