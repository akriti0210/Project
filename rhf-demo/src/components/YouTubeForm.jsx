import React, { useEffect } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'

// to test if the component rerenders with the change in input fields
let counter = 0

const YouTubeForm = () => {

  // const form = useForm()

  // load defaultValues
  const form = useForm({
    // defaultValues: {
    //   username: "Akriti",
    //   email: "akriti@gmail.com",
    //   channel: "Youtube",
    //   social: {
    //     twitter: "akrititwitter",
    //     facebook: "akritifacebook"
    //   },
    //   phoneNumbers: ["", ""],
    //   phNumbers: [{
    //     number : ""
    //   }],
    //   age: 0,
    //   dob: new Date()
    // }
    defaultValues: {
      username: "Akriti",
      email: "",
      channel: "",
      social: {
        twitter: "",
        facebook: ""
      },
      phoneNumbers: ["", ""],
      phNumbers: [{
        number : ""
      }],
      age: 0,
      dob: new Date()
    }
  })

  // to load previously saved data convert defaultValues to async function
  // const form = useForm({
  //   defaultValues: async () => {
  //     const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
  //     const data = await response.json()
  //     return {
  //       username: "Akriti",
  //       email: data.email,
  //       channel:"Youtube"
  //     }
  //   }
  // })



  const { register, control, handleSubmit, formState, watch, getValues, setValue, reset, trigger } = form
  const { errors, touchedFields, dirtyFields, isDirty, isValid, isSubmitting,
    isSubmitted, isSubmitSuccessful, submitCount } = formState
  // complex
  // const {name, ref, onChange, onBlur} = register("username")

  // console.log([{touchedFields,dirtyFields,isDirty,isValid}])

  console.log({isSubmitting, isSubmitted, isSubmitSuccessful, submitCount});

  
  const {fields,append,remove} = useFieldArray({
    name: "phNumbers",
    control
  })

  const onSubmitForm = (data) => {
    console.log('Form submitted',data)
  }

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset()
    }
  },[isSubmitSuccessful])

  // getValues
  const handleGetValues = () => {
    console.log("Get values", getValues())
    console.log("Get values",getValues(["username","email","channel","social","social.twitter"]))
  }

  // setValues
  const handleSetValues = () => {
    setValue("username", "", {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true
    })
  }

  const onerror = (errors) => {
    console.log(errors)
  }

  // const watchValue = watch("username")

  // watch entire form fields
  // const watchValue = watch()

  // watch callback if we want to perform side effects after watching the values
  // useEffect(() => {
  //   const subscribe = watch((value) => {
  //     console.log(value)
  //   })
  //   return () => subscribe.unsubscribe()
  // },[watch])

  counter++;

  return (
    <div>
        <h1>YouTube form ({counter/2})</h1>
        {/* <h2>Watched value {watchValue}</h2> */}
        
        {/* watch entire form fields */}
        {/* <h2>Watched value {JSON.stringify(watchValue)}</h2> */}
        <form onSubmit={handleSubmit(onSubmitForm,onerror)} noValidate>
          <div className='form-control'>
            <label htmlFor='username'>Username</label>
            {/* complex */}
            {/* <input type='text' id='username' name={name} ref={ref} onChange={onChange} onBlur={onBlur}/> */}
            
            {/* simplify registering the fields with react-hook-form we can directly spread the register method on the
              form control */}
            <input type='text' id='username' {...register("username", 
              // { required: "Username is required" }
              {
                required: {
                  value: true,
                  message: "Username is required"
              }}
            )} />
            <p className='error'>{errors.username?.message}</p>
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' name='email' {...register("email", {
              pattern: {
                  value :  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message : 'Invalid email address'
              },
              // validate: (fieldValue) => {
              //   return (
              //     fieldValue !== 'admin@example.com' || "Enter different email"
              //   )
              // }
              // custome validation -- validate
              validate: {
                notAdmin: (fieldValue) => {
                return (
                  fieldValue !== 'admin@example.com' || "Enter different email"
                  )
                },
                notBlackListed: (fieldValue) => {
                  return (
                    !fieldValue.endsWith("baddomain.com") || "This domain is not supported"
                  )
                },
                emailAvailable: async (fieldValue) => {
                  const response = await fetch(`https://jsonplaceholder.typicode.com/users?email=${fieldValue}`)
                  const data = await response.json()
                  return data.length === 0 || "Email already exist"
                }
              }
            })} />
            <p className='error'>{errors.email?.message}</p>
          </div>
          <div className='form-control'>  
            <label htmlFor='channel'>Channel</label>
            <input type='text' id='channel' {...register("channel", {
              required : "Channel is required"
            })} />
            <p className='error'>{errors.channel?.message}</p>
          </div>
          <div className='form-control'>  
            <label htmlFor='twitter'>Twitter</label>
          <input type='text' id='twitter' {...register("social.twitter", {
            disabled: watch("channel") === "",
            required:"Channel is mandatory"
            })} />
          </div>
          <div className='form-control'>  
            <label htmlFor='facebook'>Facebook</label>
            <input type='text' id='facebook' {...register("social.facebook")} />
          </div>
          <div className='form-control'>  
            <label htmlFor='primary-phone'>Primary phone number</label>
            <input type='text' id='primary-phone' {...register("phoneNumbers[0]")} />
          </div>
          <div className='form-control'>  
            <label htmlFor='secondary-phone'>Secondary phone number</label>
            <input type='text' id='secondary-phone' {...register("phoneNumbers[1]")} />
          </div>
          <div>
            <label>List of phone numbers</label>
            <div>
              {
                fields.map((field,index)=>{
                  return (
                    <div className='form-control' key={field.id}>
                      <input type='text' {...register(`phNumbers.${index}.number`)} />
                      {
                        index > 0 && (
                          <button type='button' onClick={()=>remove(index)}>Remove</button>
                        )
                      }
                    </div>
                  )
                })
              }
              <button type='button' onClick={()=>append({number:""})}>Add phone number</button>
            </div>
          </div>
          <div className='form-control'>  
            <label htmlFor='age'>Age</label>
            <input type='number' id='age' {...register("age", {
              valueAsNumber : true,
              required : "Age is required"
            })} />
            <p className='error'>{errors.age?.message}</p>
          </div>
          <div className='form-control'>  
            <label htmlFor='dob'>Date of birth</label>
            <input type='date' id='dob' {...register("dob", {
              valueAsDate : true,
              required : "Dob is required"
            })} />
            <p className='error'>{errors.dob?.message}</p>
          </div>
            <button type='button' onClick={()=>reset()}>Reset</button>
            {/* <button disabled={!isDirty || !isValid || isSubmitting}>Submit</button> */}
            <button disabled={!isDirty || isSubmitting}>Submit</button>
            <button type='button' onClick={handleGetValues}>Get values</button>
            <button type='button' onClick={handleSetValues}>Set values</button>
            {/* <button type='button' onClick={()=>trigger()}>Validate</button> */}
            {/* for perticular field */}
            <button type='button' onClick={()=>trigger("channel")}>Validate</button>
        </form>
        <DevTool control={control} />
    </div>
  )
}

export default YouTubeForm