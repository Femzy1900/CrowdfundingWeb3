import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {ethers} from 'ethers'
import { money } from '../assets'
import { CustomButton } from '../components'
import { FormField } from '../components'
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
  const handleSubmit = (e) => {

  }
  return (
    <div className='flex bg-[#1c1c24] flex-col md:flex-row items-center justify-center gap-[50px] py-[20px] px-[40px] rounded-[10px]'>
      {isLoading && 'Loading...'}
      <div className='flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]'>
        <h1 className='font-epilogue font-semibold text-[18px] leading-[30px] text-white'>Start a Campaign</h1>
      </div>
      <form action="" onSubmit={handleSubmit} className='flex flex-col gap-[30px] mt-[65px] w-full'>
        <div className="flex flex-wrap gap-[40px]">
          <FormField 
            labelName="Your Name *"
            placeholder="John Doe"
            inputType="text"
            value={form.name}
            handleChange={(e) => setForm({...form, name: e.target.value})}
          />
          <FormField 
            labelName="Campaign Title *"
            placeholder="Write a title"
            inputType="text"
            value={form.title}
            handleChange={(e) => setForm({...form, title: e.target.value})} 
          />
        </div>

      </form>
    </div>
  )
}

export default CreateCampaign