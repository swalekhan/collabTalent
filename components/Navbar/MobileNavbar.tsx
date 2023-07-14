"use client"
import Link from "next/link"
import Image from "next/image"
import style from './MobileNavbar.module.css'
import React from "react"
import { navArr } from "@/utils/data"

interface MobileNavbarProps {
    mobileMenuHandler: () => void
    navHandler:(title:string) =>void
    mobileMenu: boolean;
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({ mobileMenuHandler, mobileMenu,navHandler }) => {

    return (
        <section className={`${style.MobileNavbar} ${mobileMenu ? style.MobileNavbar_active : ""}`} >
            <div className={style.MobileNavbar_content} >
                <div className={style.MobileNavbar_header}>
                    {/* <Image src='/Frame.svg' width={150} height={50} priority alt='logo' /> */}
                    <h1>Collab Talent</h1>
                </div>
                <ul onClick={mobileMenuHandler}>
                    {
                        navArr?.map((item, key) => (
                            <li className='btn' key={key} onClick={()=>navHandler(item.title)}>
                                <Link href="#">{item.title}</Link>
                            </li>
                        ))}
                </ul>
            </div>
        </section>
    )
}
export default MobileNavbar