import React from 'react'
import Header from '../component/header'
import Link from 'next/link'

const Success = () => {
  return (
    <div>
    <Header/>
     <div className='flex justify-center '>
     <img className='my-20    ' src='https://magecomp.com/blog/wp-content/uploads/2017/10/How-to-Send-Order-Confirmation-Email-to-Customers-after-Successful-Payment-in-Magento-2-1024x332.png'/>
     </div>
     <div className='text-center'>
        <Link href="/" className=' text-blue-700 cursor-pointer text-xl'>Back To Home</Link>
     </div>
    </div>
  )
}

export default Success
