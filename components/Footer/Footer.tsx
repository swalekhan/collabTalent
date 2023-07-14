import Image from "next/image"
import style from './Footer.module.css'
import Link from "next/link"

const Footer = () => {

    return (
        <footer className={style.footer}>
            <div className={style.big_img}>
                <Image src='/Frame.svg' alt="footer-img" fill={true} />
            </div>
            <hr />
            <div className={style.footer_content}>
                <div className={style.Footer_address}>
                    <h3>CollabTalent</h3>
                    <p>Chicago, Illinois, USA</p>
                </div>
                <ul>
                    <li><Link href="#">Terms of Services</Link></li>
                    <li><Link href="#">Privacy Policy</Link></li>
                    <li><Link href="#">Cookie Setting</Link></li>
                </ul>
            </div>
            <p className={style.footer_llc}>© 2022-2023 CollabTalent LLC</p>
        </footer>
    )
}

export default Footer