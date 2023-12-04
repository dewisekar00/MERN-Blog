import React from 'react'
import { LoginBg } from '../../assets';
import { Button, Gap, Input , Link} from '../../components';


const Login = () => {
  return (
    <div className='main-page'>

    <div className='left'>
     <img src={LoginBg} className='bg-image' alt='image-register' />
    </div>

    <div className='right'>
     <p className='title'>Login</p>
     <Gap height={50} />
     

     <Input label= "Email " placeholder="email addres"  />
     <Gap height={16} />
     <Input label=" password" placeholder="password" t/> 

     <Gap height={20} />
     <Button title="Login" />
     <Gap height={50} />
  
    <Link  title='Belum punya akun, silahkan daftar'/>
    </div>
   </div>
  )
}

export default Login
