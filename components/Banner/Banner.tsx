import Link from 'next/link'
import style from './Banner.module.css'
import Image from 'next/image'

const Banner = () => {
    return (
        <section className={style.banner}>
            <div className={style.banner_wrapper}>
                <div className={style.banner_div}>
                    <h1>Are you after your dream job and want to put your best
                        foot forward in the interview?
                    </h1>
                </div>
                <div className={style.banner_div}>
                    <p >Prepare the smart way and get objective feedback on
                        how you present yourself using AI technology.
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