import React from 'react'

const FormField = ({ labelName, placeholder, inputType, isTextArea, value, handleChange}) => {
  return (
    <label className='flex flex-col'>
        {labelName && (
          <span className='font-epilogue font-semibold text-[14px] leading-[22px] text-white mb-[10px]'>
            {labelName}
          </span>
        )}
        {isTextArea ? (
          <textarea
            required
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            rows={10}
            className='bg-[#3a3a43] py-[15px] px-[20px] font-epilogue font-normal text-[16px] leading-[26px] text-white placeholder:text-[#4b5264] rounded-[10px] outline-none'
          />
        ) : (
          <input
            required
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            type={inputType}
            step="0.1"
            className='bg-[#3a3a43] py-[15px] px-[20px] font-epilogue font-normal text-[16px] leading-[26px] text-white placeholder:text-[#4b5264] rounded-[10px] outline-none'
          />
        )}
    </label>
  )
}

export default FormField