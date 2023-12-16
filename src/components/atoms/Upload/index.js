import React from 'react'
import './upload.scss'
const Upload = () => {
  return (
    <div className='upload'>
        < img className='preview' src='https://i.pinimg.com/564x/2e/61/4d/2e614da6668a83dab3078fa534092cec.jpg' alt='dummy-pic'/>
      < input type='file' />
    </div>
  )
}

export default Upload
