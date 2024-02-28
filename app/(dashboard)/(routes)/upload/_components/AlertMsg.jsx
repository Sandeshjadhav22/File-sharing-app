import { AlertCircle } from 'lucide-react'
import React from 'react'

function AlertMsg({msg}) {
  return (
    <div className='p-4 bg-red-500 text-white mt-5 rounded-md flex gap-5 items-center'>
        <AlertCircle/>
        {msg}
    </div>
  )
}

export default AlertMsg