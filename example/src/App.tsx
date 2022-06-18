import React from 'react'

import { Tooltip } from 'tiny-react-tooltip'
import 'tiny-react-tooltip/dist/index.css'

const App = () => {
  return (
    <div className='wrapper'>
      <Tooltip content='Bottom tooltip' direction='bottom'>
        Bottom
      </Tooltip>
      <Tooltip content='Top tooltip' direction='top'>
        Top
      </Tooltip>
      <Tooltip content='Left tooltip' direction='left'>
        Left
      </Tooltip>
      <Tooltip content='Right tooltip' direction='right'>
        Right
      </Tooltip>
    </div>
  )
}

export default App
