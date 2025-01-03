import React, { useState } from 'react'
import Toan from './Toan';
import Toan2 from './Toan2';

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
