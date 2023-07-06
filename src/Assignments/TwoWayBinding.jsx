import React from 'react'
import { useState } from 'react';

const TwoWayBinding = () => {
  const [para, setPara] = useState("");

  return (
    <div>
    <input type="text" value={para} onChange={(e)=>setPara(e.target.value)} />
    <p>{para}</p>
    </div>
  )
}

export default TwoWayBinding