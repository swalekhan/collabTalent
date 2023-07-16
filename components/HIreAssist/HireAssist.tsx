import Image from 'next/image'
import style from './HireAssist.module.css'
import { hireLeft, hireRight } from '@/utils/data'

const HireAssist = () => {
    return (
        <section className={style.HireAssist}>
            <div className={style.HireAssist_header}>
                <h2>Your Personal All-In-One Hiring Assistant</h2>
            </div>
            <div className={style.HireAssist_main}>
                <ul className={`${style.lists_left} ${style.list}`}>
                    {hireLeft?.map((item, key) => (
                        <li key={key}>{item.title}</li>
                    ))}
                </ul>

                <div className={style.middale}>
                    <Image src="/hire.webp" alt='pic' fill priority />
                </div>

                <ul className={`${style.lists_right} ${style.list}`}>
                    {hireRight ?.map((item, key) => (
                        <li key={key}>{item.title}</li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default HireAssist