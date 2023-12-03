import React from 'react'
import './register.scss' ; 
import { RegisterBg } from '../../assets';
import { Button, Gap, Input , Link} from '../../components';



const Register
 = () => {
  return (
   <div className='main-page'>

    <div className='left'>
     <img src={RegisterBg} className='bg-image' alt='image-register' />
    </div>

    <div className='right'>
     <p className='title'>Register</p>
     <Gap height={50} />
     <Input label= "Full Name " placeholder="Full Name" />
     <Gap height={16} />
     <Input label= "Email " placeholder="email addres"  />
     <Gap height={16} />
     <Input label=" password" placeholder="password"/> 

     <Gap height={20} />
     <Button title="Register" />
     <Gap height={50} />
  
    <Link  title='kembali ke login'/>
    </div>
   </div>
  )
}

export default Register

// note: membagi 1 halaman jadi 2 caranya,buat div pembungkus dan didalamnya ada 2 div right left