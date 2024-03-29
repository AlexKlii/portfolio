'use client'

import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { IoIosPhonePortrait } from 'react-icons/io'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { MdMail } from 'react-icons/md'
import { Contact } from '@/typings/Contact'
import { useForm, SubmitHandler } from 'react-hook-form'
import { fetchContact } from '@/utils/fetchContact'

type Inputs = {
  name: string
  email: string
  subject: string
  message: string
}

export default function ContactMe() {
  const { register, handleSubmit } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = formData => {
    window.location.href = `mailto:${contact?.mail}?subject=${formData.subject}&body=Name%3A%20${formData.name}%0D%0A%0D%0AEmail%3A%20${formData.email}%0D%0A%0D%0AMessage%3A%0D%0A${formData.message.replace(/(?:\r\n|\r|\n)/g, '%0D%0A%0D%0A')}%0D%0A`
  }

  const size: number = 32
  const color: string = '#72FF72'

  const [contact, setContact] = useState<Contact>()
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    fetchContact()
      .then((contact: Contact) => {
        setContact(contact)
        setLoading(false)
      })
  }, [])

  return (!isLoading &&
      <motion.div
        initial={{
          x: -42,
          opacity: 0
        }}
        whileInView={{
          x: 0,
          opacity: 1
        }}
        transition={{ duration: 1 }}
        className='flex flex-col relative h-screen text-center md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
      >
        <h3 className='absolute top-24 uppercase tracking-[10px] sm:tracking-[20px] dark:text-gray-500 text-white text-2xl pl-5'>Contact me</h3>

        <div className='absolute top-36 sm:top-1/4 flex flex-col space-y-10'>
          <h4 className='text-lg sm:text-4xl font-semibold text-center'>
            I have got just what you need. <span className='underline dark:decoration-green decoration-yellow text-yellow-4'>Let&apos;s talk</span>
          </h4>

          <div className='space-y-4 sm:space-y-6 md:flex md:flex-row-reverse md:items-center'>
            <div className='md:flex md:flex-col md:px-10 max-md:w-2/3 max-md:mx-auto md:pl-[1%] pl-3 sm:pl-[14%] justify-center'>
              <div className='flex items-center space-x-2 justify-start'>
                <IoIosPhonePortrait color={color} className='w-7 h-7 sm:w-9 sm:h-9' size={size} />
                <p className='text-sm sm:text-xl'>{contact?.phone}</p>
              </div>

              <div className='flex items-center space-x-2 justify-start'>
                <MdMail color={color} size={size} className='w-7 h-7 sm:w-9 sm:h-9' />

                <p className='text-sm sm:text-xl'>{contact?.mail}</p>
              </div>

              <div className='flex items-center space-x-2 justify-start pb-10 sm:pb-0'>
                <FaMapMarkerAlt color={color} size={size} className='w-7 h-7 sm:w-9 sm:h-9' />
                <p className='text-sm sm:text-xl'>{contact?.address}</p>
              </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-5/6 mx-auto md:px-10'>
              <div className='flex-row sm:flex sm:space-x-2 sm:px-6 md:px-[4.2%]'>
                <input {...register('name')} required placeholder='John Doe' className='contactInput w-10/12 sm:w-1/2' type='text' name='name' id='name' />
                <input {...register('email')} required placeholder='john.doe@gmail.com' className='contactInput mt-2 sm:mt-0 w-10/12 sm:w-1/2' type='email' name='email' id='email' />
              </div>

              <input {...register('subject')} required placeholder='Subject' className='contactInput w-10/12 sm:w-11/12 mx-auto' type='text' name='subject' id='subject' />

              <textarea {...register('message')} required placeholder='My message...' className='contactInput w-10/12 sm:w-11/12 mx-auto' name='message' id='message'></textarea>
              <button type='submit' className='bg-green-button py-5 px-10 rounded-md text-white font-bold text-lg animate-pulse hover:animate-none w-10/12 sm:w-11/12 mx-auto'>Submit</button>
            </form>
          </div>
        </div>
      </motion.div>
  )
}