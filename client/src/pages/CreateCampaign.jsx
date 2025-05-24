import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {ethers} from 'ethers'
import { money } from '../assets'
import { CustomButton } from '../components'
// import checkIfImage from '../utils/index.js'

const CreateCampaign = () => {
  const navigate = useNavigate()
  const {isLoading, setIsLoading} = useState(false)
  const [form, setForm] = useState({
    name: '',
    title: '',
    description: '',
    target: '',
    deadline: '',
    image: ''
  })
  const handldeSubmit = (e) => {
    
  }
  return (
    <div className='flex bg-[#1c1c24] flex-col md:flex-row items-center justify-center gap-[50px] py-[20px] px-[40px] rounded-[10px]'>
      {isLoading && 'Loading...'}
      <div className='flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]'>
        <h1 className='font-epilogue font-semibold text-[18px] leading-[30px] text-white'>Start a Campaign</h1>
      </div>
      <form action="" onSubmit={handldeSubmit} className='flex flex-col gap-[30px] w-full'>

      </form>
    </div>
  )
}

export default CreateCampaign