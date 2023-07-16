import React from 'react'
import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object({
    username: yup.string().required("Username is required"),
    email: yup.string().email("Email is invalid").required("Email is required"),
    channel : yup.string().required("Channel is required")
})

const YupYouTubeForm = () => {

  const form = useForm({
      defaultValues: {
        username : '',
        email : '',
        channel : ''
    },
    resolver : yupResolver(schema)
  })
  const {register, handleSubmit, formState, control} = form
  const {errors} = formState
  
  const onSubmitForm = (data) => {
    console.log("Form submitted",data)
  }
  return (
    <div>
        <h1>Yup Youtube Form</h1>
        <form onSubmit={handleSubmit(onSubmitForm)}>
            <div className='form-control'>
                <label htmlFor='username'>Username</label>
                <input type='text' id='username' {...register("username")}/>
                <p className='error'>{errors.username?.message}</p>
            </div>
            <div className='form-control'>
                <label htmlFor='email'>Email</label>
                <input type='text' id='email' name='email' {...register("email")}/>
                <p className='error'>{errors.email?.message}</p>
            </div>
            <div className='form-control'>
                <label htmlFor='channel'>Channel</label>
                <input type='text' id='channel' name='channel' {...register("channel")}/>
                <p className='error'>{errors.channel?.message}</p>
            </div>
            <button>Submit</button>
        </form>
        <DevTool control={control} />
    </div>
  )
}

export default YupYouTubeForm