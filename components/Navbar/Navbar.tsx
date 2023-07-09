"use client"
import Link from 'next/link'
import style from './Navbar.module.css'
import Image from 'next/image'
import { AiOutlineMenu } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react'
import MobileNavbar from './MobileNavbar'
import { navArr } from '@/utils/data'
import { shareWeb } from '@/utils/data'


const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState(false)
    const mobileMenuHandler = (): void => {
        setMobileMenu(!mobileMenu)
        document.body.classList.toggle("sidebar-open");
    }

    const navHandler = (title: string): void => {
        if (title === "Share") {
            shareWeb()
        }
    }

    return (
        <>
            <MobileNavbar mobileMenu={mobileMenu} mobileMenuHandler={mobileMenuHandler} navHandler = {navHandler}/>
            <nav className={style.navbar} >
                <div className={style.navbar_left}>
                    <Image src='/Frame.svg' width={180} height={37} priority alt='logo' className={style.logo} />
                    <button>Beta</button>
                </div>
                <ul>
                    {navArr?.map((item, key) => (
                        <li className='btn' key={key} onClick={()=>navHandler(item.title)}>
                            <Link href="#">{item.title}
                                <span>
                                    <Image src={item.imgurl} width={13} height={13} priority alt='logo' />
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
                {
                    !mobileMenu ?
                        <div className={style.navbar_menu} onClick={mobileMenuHandler}>
                            <AiOutlineMenu />
                        </div>
                        :
                        <div className={style.navbar_menu} onClick={mobileMenuHandler}>
                            <AiOutlineClose />
                        </div>
                }
            </nav>
        </>
    )
}

export default Navbar