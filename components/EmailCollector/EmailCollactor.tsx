"use client"
import style from './EmailCollactor.module.css'
import { useState } from 'react'

const EmailCollactor = () => {
    const [email, setEmail] = useState(false)
    const submitHandler = (e: any) => {
        e.preventDefault()
        setTimeout(() => {
            e.target.email.value = ""
        }, 1000)

        setEmail(true)
    }

    return (
        <div className={style.EmailCollactor}>
            <form onSubmit={submitHandler} method="post">
                <input type="email" name="email" placeholder="Receive invite" required />
                <button type="submit">try it</button>
            </form>
            {email && <p className={style.success}>form submitted successfully</p>}
        </div>
    )
}

export default EmailCollactor