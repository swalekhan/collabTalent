"use client"
import React from "react";
import style from './Practice.module.css';
import { practItems } from "@/utils/data";
import { useState } from "react"
import Image from "next/image";
import EmailCollactor from "../EmailCollector/EmailCollactor";

const Practice = () => {
    return (
        <section className={style.practice}>
            <div className={style.practice_img}>
                <Image src="/Group-33.webp" alt="pic" fill priority />
            </div>
            <div className={style.practice_content}>
                <h4>
                    We give data driven feedback so you can perform at their best
                </h4>
                <div className={style.practice_email_collactor} >
                <EmailCollactor/>
                </div>
            </div>
        </section>
    )
}

export default Practice