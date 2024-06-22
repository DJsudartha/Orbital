import React, { useState } from 'react'
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