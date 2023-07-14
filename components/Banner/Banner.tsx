import Link from 'next/link'
import style from './Banner.module.css'
import Image from 'next/image'

const Banner = () => {
    return (
        <section className={style.banner}>
            <div className={style.banner_wrapper}>
                <div className={style.banner_div}>
                    <h1>Preparing for an interview or presentation?  Be the best version of yourself</h1>
                </div>
                <div className={style.banner_div}>
                    <p >Get Data driven feedback on your next presentation and
                        interview using AI
                    </p>
                </div>
                <div className={style.banner_div}>
                    <Link href="#" className="btn">Join Waitlist</Link>
                </div>
                <div className={style.banner_div}>
                    <Image src='/banner/Vector-banner.svg' width={20} height={30} priority alt='vector' />
                </div>
            </div>
        </section>
    )
}

export default Banner