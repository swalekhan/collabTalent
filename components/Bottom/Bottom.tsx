import style from './Bottom.module.css'
import Image from 'next/image'

const Bottom = () => {
    return (
        <section className={style.Bottom}>
                <div className={style.Bottom_img}>
                    <Image src="/bottom.png" alt='pic' fill priority />
                </div>
                <div className={style.Bottom_content}>
                    <h2>The most-advanced, all-in-one video interview software for hiring globally</h2>
                    <p>Eliminate resume and phone screening. Hire better candidates faster.</p>
                    <button  className={style.bottom_btn}>Sign up</button>
                </div>
        </section>
    )
}

export default Bottom