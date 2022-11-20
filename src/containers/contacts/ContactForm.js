import React,{useState} from 'react'
import { useForm } from '../../hooks/useForm'
import './contactStyles.css'
import Loader from './loader/Loader'
import Message from './message/Message'
import { IconName } from "react-icons/ai";

// form initial values
const initialForm = {
  name: '',
  email: '',
  subject: '',
  comments: '',
}



// validata tha tehe form data are correct
const validationsForm =(form) =>{
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexComments = /^.{1,255}$/;

  if(!form.name.trim()){
    errors.name = `The Name field is required`
  }else if(!regexName.test(form.name.trim())){
    errors.name = "The name field only accepts characters [a-z] and blank spaces"
  }

  if(!form.email.trim()){
    errors.email = 'The Email field is required!'
  }else if(!regexEmail.test(form.email.trim())){
    errors.email = "The structure of the email is incorrect"
  }

  if(!form.subject.trim()){
    errors.subject = 'The Subject field is required!'
  } 

  if(!form.comments.trim()){
    errors.comments = 'The Comments field is required!'
  }else if(!regexComments.test(form.comments.trim())){
    errors.name = "The Comment field must not exceed 255 characters"
  }

  return errors;
}


function ContactForm() {

  const {
    form,
    errors,
    loader,
    response,
    handelChange,
    handelBlur,
    handelSubmit
  } = useForm(initialForm, validationsForm)

  return (
    <div className='section__padding form__container' id='contact'>
          <h5>To send us your request is good idea. we will replay a soon as posible</h5>

        <form onSubmit={handelSubmit}>
            <input type='text' name='name' placeholder='Write your Name' onBlur={handelBlur} onChange={handelChange} value={form.name} required/>

            {/* condicional para rederizar los mensajes de error de forma autmatica*/}
            {errors.name && <p> ,{errors.name}</p>}

            <input type='email' name='email' placeholder='Write your Email' onBlur={handelBlur} onChange={handelChange} value={form.email} required/>
            {errors.email && <p>{errors.email}</p>}

            <input type='text' name='subject' placeholder='Subject' onBlur={handelBlur} onChange={handelChange} value={form.subject} required/>
            {errors.subject && <p>{errors.subject}</p>}

            <textarea name='comments' cols='50' rows='5' placeholder='Write your comments' onBlur={handelBlur} onChange={handelChange} value={form.comments}></textarea>
            {errors.comments && <p>{errors.comments}</p>}

            <input type='submit' name='submit' value='Send Message' onClick={handelChange}/>

        </form>
        
        {/* render the loade and error mensage*/}
        { loader && <Loader/>}
        {response && <Message msg='The data was sent successfully.'/> }
    </div>
  )
}

export default ContactForm