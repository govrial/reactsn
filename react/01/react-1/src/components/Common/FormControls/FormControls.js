import React from 'react'
import s from "./FormControl.module.css"

const FormControl = ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error

    return (
        <div className={s.formControl + " " + (hasError ? s.error : " ") }>
            <div>
               {props.children}
            </div>
        
    {hasError && <span>{meta.error}</span> }
            
        </div>
    )
}

export const Textarea = (props) => {
    const { input, meta, ...Restprops } = props
    return <FormControl {...props} >  <textarea {...input} {...Restprops}/></FormControl>

    
}

export const Input = (props) => {
    const { input, meta, ...Restprops } = props
    return <FormControl {...props}> <input {...input} {...Restprops}/></FormControl>
    
}