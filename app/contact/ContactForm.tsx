'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import phone from '../../public/phone.svg'
import email from '../../public/email.svg'
import location from '../../public/location.svg'
import { toast } from 'sonner'

import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

// Define the type for the form values
interface ContactFormValues {
  name: string
  email: string
  phone: string
  message: string
}

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  phone: Yup.string()
    .required('Phone number is required')
    .matches(/^\+1\s?[0-9]{10,15}$/, 'Phone number must be 11 digits')
    .nullable(),
  message: Yup.string().required('Message is required'),
})

const ContactForm = () => {
  const handleSubmit = async (
    values: ContactFormValues,
    { setSubmitting, resetForm }: any
  ) => {
    const { name, email, phone, message } = values

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, phone, message }),
      })

      if (!response.ok) {
        throw new Error('Something went wrong!')
      }

      const result = await response.text()

      toast.success('Your message has been sent successfully!', {
        description: 'We will get back to you shortly.',
      })

      resetForm()

      setSubmitting(false)
    } catch (error) {
      toast.error(
        'There was an issue sending your message. Please try again.',
        {
          description: 'Please check your information and try again.',
        }
      )
      setSubmitting(false)
    }
  }

  return (
    <div className='container mx-auto lg:px-0 px-4 '>
      <p className='text-center text-[36px] leading-[46.34px] text-[#0D378D] font-medium lg:pt-[70px] md:pt-[40px] pt-[30px] lg:pb-[46px] md:pb-[46px] pb-[20px]'>
        GET IN TOUCH
      </p>
      <div
        className='grid md:grid-cols-2 gap-12 text-center'
        style={{ textAlign: 'left' }}>
        {/* Contact Info Section */}
        <div className='w-full md:w-full lg:w-[60%] lg:ml-[5em]'>
          <h2 className='text-[#0D378D] lg:text-4xl text-2xl font-semibold tracking-normal '>
            HAVE A PROJECT IN MIND OR NEED A QUOTE?
          </h2>
          <h3 className='text-base sm:text-sm lg:mt-12 md:mt-8 mt-4 lg:mb-12 md:mb-10   font-medium mb-6 text-[#000000]'>
            Get in touch with our expert painters in Calgary. We’d be happy to
            help bring your vision to life!
          </h3>
          <p
            className='text-[16px] mb-6 text-[#000000] flex flex-row items-center'
            style={{ fontWeight: '500' }}>
            <span className='mr-2'>
              <Link href='tel:+1 587-966-6547'>
                <Image src={phone} alt='phone' />
              </Link>
            </span>
            <Link href='tel:+1 587-966-6547'>+1 587-966-6547</Link>
          </p>
          <p
            className='text-base mb-6 text-black flex flex-row items-center'
            style={{ fontWeight: '500' }}>
            <span className='mr-2'>
              <Link href='mailto:info@primopainters.ca'>
                <Image src={email} alt='email' />
              </Link>
            </span>
            <Link href='mailto:info@primopainters.ca'>
              info@primopainters.ca
            </Link>
          </p>
          <p
            className='text-base mb-6 text-black flex flex-row items-center'
            style={{ fontWeight: '500' }}>
            <span className='mr-2 w-[30px] h-[25px]'>
              <Image src={location} alt='location' />
            </span>
            370 Brightonstone Green SE, Calgary, AB T2Z 0H1, Canada
          </p>
        </div>

        {/* Contact Form Section */}
        <div className='contact-form w-full md:w-full lg:w-[90%] shadow-lg rounded-lg p-6 lg:mt-[-30px] md:mt-[-30px] mt-[-70px] bg-white'>
          <Formik<ContactFormValues>
            initialValues={{
              name: '',
              email: '',
              phone: '+1', // Default value with country code
              message: '',
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}>
            {({ isSubmitting, values, setFieldValue }) => (
              <Form className='mt-5'>
                <div className='mb-5 lg:ml-[26px] md:ml-[25px]'>
                  <Field
                    type='text'
                    name='name'
                    placeholder='Name'
                    className='w-full sm:w-[90%] p-3 text-black bg-[#F3F3F3] rounded-md mx-auto'
                  />
                  <ErrorMessage
                    name='name'
                    component='div'
                    className='text-red-500 text-sm mt-2 mx-auto'
                  />
                </div>

                <div className='mb-5 lg:ml-[26px] md:ml-[25px]'>
                  <Field
                    type='email'
                    name='email'
                    placeholder='Email Address'
                    className='w-full sm:w-[90%] p-3 text-black bg-[#F3F3F3] rounded-md mx-auto'
                  />
                  <ErrorMessage
                    name='email'
                    component='div'
                    className='text-red-500 text-sm mt-2 mx-auto'
                  />
                </div>

                <div className='mb-5 lg:ml-[26px] md:ml-[25px]'>
                  <Field
                    type='text'
                    name='phone'
                    placeholder='Phone Number'
                    className='w-full sm:w-[90%] p-3 text-black bg-[#F3F3F3] rounded-md mx-auto'
                    value={values.phone}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      const value = e.target.value
                      if (/^\+1\s?[0-9]{0,15}$/.test(value)) {
                        setFieldValue('phone', value)
                      }
                    }}
                  />
                  <ErrorMessage
                    name='phone'
                    component='div'
                    className='text-red-500 text-sm mt-2 mx-auto'
                  />
                </div>

                <div className='mb-5 lg:ml-[26px] md:ml-[25px]'>
                  <Field
                    as='textarea'
                    name='message'
                    placeholder='Message'
                    rows={4}
                    className='w-full sm:w-[90%] p-3 text-black bg-[#F3F3F3] rounded-md mx-auto'
                  />
                  <ErrorMessage
                    name='message'
                    component='div'
                    className='text-red-500 text-sm mt-2 mx-auto'
                  />
                </div>

                <button
                  type='submit'
                  className='w-full lg:ml-[26px] md:ml-[25px] sm:w-[90%] py-3 mt-4 mb-2 bg-[#0D378D] text-white font-semibold rounded-md hover:bg-primary/90 cursor-pointer mx-auto'
                  disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send'}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
