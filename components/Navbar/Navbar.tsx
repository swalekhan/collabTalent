"use client"
import Link from 'next/link'
import style from './Navbar.module.css'
import Image from 'next/image'
import { AiOutlineMenu } from 'react-icons/Ai'
import { AiOutlineClose } from 'react-icons/Ai'
import { useState } from 'react'
import MobileNavbar from './MobileNavbar'
import { navArr } from '@/utils/data'


const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState(false)
    const mobileMenuHandler = (): void => {
        setMobileMenu(!mobileMenu)
        document.body.classList.toggle("sidebar-open");
        console.log(navigator.share)
    }

    return (
        <>
            <MobileNavbar mobileMenu={mobileMenu} mobileMenuHandler={mobileMenuHandler} />
            <nav className={style.navbar} >
                <div className={style.navbar_left}>
                    <Image src='/Frame.svg' width={180} height={37} priority alt='logo' className={style.logo} />
                    <button>Beta</button>
                </div>
                <ul>
                    {navArr?.map((item, key) => (
                        <li className='btn' key={key}>
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