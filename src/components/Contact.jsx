import React from 'react'
import { useForm } from "react-hook-form"
import emailjs from '@emailjs/browser'

const Contact = ({ContactReference}) => {
  let {register,
    handleSubmit,
    formState : {errors}} = useForm();

  function ContactFormSubmit(data) {
    let parms = {
      name : data.name,
      email : data.email,
      message : data.message
    }
    emailjs.send("service_iodbgyw","template_xio7tmw",parms,"nBobJGHgqW2rqWT4W").
    then(alert("Message Sent!"));
  }

  return (
    <div 
    ref={ContactReference}
    className='mt-20 h-[70vh] w-full flex flex-col justify-center items-center gap-5 mb-5'>
      <h1 className='text-green-500 font-bold text-4xl text-center'>Contact Me</h1>
      <form onSubmit={handleSubmit(ContactFormSubmit)} className='flex flex-col justify-evenly items-center border-2 border-green-500 outline-none pt-13 pb-5 px-5 rounded-xl w-[30%] min-w-[300px] gap-3'>
          <input 
            placeholder='Enter Your Name'
            className='border-2 border-green-500 outline-none text-white p-3 w-[80%] min-w-[250px] rounded-lg'
            type="text" 
            {...register("name",{
            required : "Enter Your Name"
              })}/>
            {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
            <input 
            placeholder='Enter Your Email'
            className='border-2 border-green-500 outline-none text-white p-3 w-[80%] min-w-[250px] rounded-lg'
            type="email" 
            {...register("email",{
            required : "Enter Your Email"
            })}/>
            {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
            <textarea
            placeholder='Enter Your Message'
            className='border-2 border-green-500 outline-none text-white p-3 rounded-lg resize-none w-[80%] h-30 min-w-[250px]' 
            {...register("message",{
            required : "Enter Your Message"
            })}/>
            {errors.message && <p className='text-red-500'>{errors.message.message}</p>}
            <div className='flex items-center justify-center'>
              <button type='submit' className='border-none bg-green-500 text-white font-bold py-3 px-5 rounded-lg cursor-pointer hover:text-green-500 hover:outline-2 hover:outline-green-500 hover:bg-black text-xl'>Submit</button>
            </div>
      </form>
    </div>
  )
}

export default Contact