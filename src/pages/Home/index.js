import React from 'react'
import { BlogItem, Button, Gap } from '../../components'
import './home.scss'
import {useNavigate} from 'react-router-dom'


const Home= () => {
  const navigate = useNavigate() ;

  return (
  <div className='home-page-wrapper'>
      <div className='create-wrapper'>
   <div><Button title='create post' onClick={() => navigate('/create-post') } /></div>
   </div>
   <Gap height={20} />
 <div className='content-wrapper'>


  < BlogItem />
  < BlogItem />
  < BlogItem />

  < BlogItem />
  < BlogItem />
  < BlogItem />
 
  </div>

<div className='pagination'>
  <Button title="Previous" />
  <Gap width={10} />
  <Button title="Next" />
</div>
<Gap height={20} />
    </div>
 
  )
}

export default Home

