"use client"
import React from "react";
import style from './Practice.module.css';
import { practItems } from "@/utils/data";
import { useState } from "react"
import Image from "next/image";

const Practice = () => {
    const [email, setEmail] = useState(false)
    const submitHandler = (e: any) => {
        e.preventDefault()
        setTimeout(() => {
            e.target.email.value = ""
        }, 1000)
        setEmail(true)
    }

    return (
        <section className={style.practice}>
            <div className={style.practice_img}>
                <Image src="/Group-33.webp" alt="pic" fill priority />
            </div>
            <div className={style.practice_content}>
                <h4>
                    We give data driven feedback so you can perform at their best
                </h4>
                <div className={style.practice_form} id="#">
                    <form onSubmit={submitHandler} method="post">
                        <input type="email" name="email" placeholder="Please enter email" required />
                        <button type="submit">try it</button>
                    </form>
                    {email && <p className={style.success}>form submitted successfully</p>}
                </div>
            </div>
        </section>
    )
}

export default Practice