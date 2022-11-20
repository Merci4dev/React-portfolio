import React,{useState} from 'react'
import helperHttp from '../helpers/helperHttp'

export function useForm(initialForm, validateForm) {
    const [form, setForm] = useState(initialForm)
    const [errors, setErrors] = useState({})
    const [loader, setLoader] = useState(false)
    const [response, setResponse] = useState(null)

    const handelChange = (e) =>{
        const {name, value} = e.target;

        setForm({
            ...form, [name]: value
        })
    }
 
    const handelBlur = (e) =>{
        handelChange(e);
        setErrors(validateForm(form))
    }
 
    const handelSubmit = (e) =>{
        e.preventDefault();
        setErrors(validateForm(form))

        // validar que el obj de erres este vacio al momento de hacer el envio del form
        if(!Object.keys(errors).length === 0){
            alert('Ocurrio un error inesperado')
            return;
        }else{
            alert('Sending Form Data')
            setLoader(true)

            helperHttp()
            .post("https://formsubmit.co/ajax/mercedes4developers@gmail.com",{
                body: form,
                headers:{
                   "Content-type":"application/json",
                   Accept: "application/json" 
                }
            })
            .then(res =>{
                setLoader(false)
                setResponse(true)

                setForm(initialForm)

                // remueve el mensaje
                setTimeout(() => {
                    setResponse(false)
                }, 2000);
            })
        }
    }

    return{
        form,
        errors,
        loader,
        response,
        handelChange,
        handelBlur,
        handelSubmit
    }
}
