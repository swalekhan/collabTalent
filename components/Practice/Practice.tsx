"use client"
import React from "react";
import style from './Practice.module.css';
import { practItems } from "@/utils/data";

const Practice = () => {

    const submitHandler = (e: any) => {
        // setTimeout(() => {
        //     e.target.email.value = ""
        // }, 1000)
    }

    return (
        <section className={style.practice}>
            <h2>Practice Areas</h2>
            <ul>
                {practItems?.map((item) => (
                    <li key={item?.id}>
                        {item.title}
                    </li>
                ))}
            </ul>
            <div className={style.practice_content}>
                <h4>
                    We give data driven feedback so you can perform at their best
                </h4>
                <div className={style.practice_form} id="#">
                    <form onSubmit={submitHandler} method="post">
                        <input type="email" name="email" placeholder="Please enter email" required />
                        <button type="submit">submit</button>
                    </form>
                </div>
            </div>
            <div className={style.practice_gradient}> </div>

        </section>
    )
}

export default Practice