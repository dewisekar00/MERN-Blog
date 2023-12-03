import React from 'react';
import './input.scss'

const Input = ({label, ...rest}) => {
  return (
    <div className='input-wrapper'>
      <p className='label'>{label}</p>
       <input className='input' {...rest} />
    </div>
  )
}

export default Input


// component Input 
// Fungsinya 'Input' ini buat bikin kotak input yang punya label, jadi kita bisa tulis apa yang harus dimasukin di kotak itu. Nah, bagian {...rest} itu nyimpen semua props yang dikirim ke 'Input', jadi kita bisa pake props apa aja buat kotak input ini.

// Trus, tuh kode ngebuat div yang berisi label sama kotak inputnya. Labelnya dipasang di atas kotak inputnya. Kelas-kelas kayak 'input-wrapper', 'label', sama 'input' itu buat ngasih style biar tampak kece.