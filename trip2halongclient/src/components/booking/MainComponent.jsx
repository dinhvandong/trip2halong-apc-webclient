import React, { useState } from 'react'
import Toan from './AllFrom';
import Toan2 from './AllFrom2';

const MainComponent = () => {
  const [viewMode, setViewMode] = useState('list');
  return (
    <div>
      <Toan setViewMode={setViewMode} />
      <Toan2 viewMode={viewMode} />
    </div>
  )
}

export default MainComponent
