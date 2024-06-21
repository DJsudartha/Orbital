import React, { useState } from 'react'
import AudioTest from './AudioTest'
import VisualTest from './VisualTest'
import RhythmTest from './RhythmTest' // Maybe
import NavFooter from '../Components/NavFooter'

const Journey = () => {
  const [progress, setProgress] = useState(0);
  return (
    <div>
      Journey

      <NavFooter />
    </div>
  )
}

export default Journey