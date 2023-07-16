import style from './HowItWork.module.css'
import Image from 'next/image'

const HowItWork = () => {
    return (
        <section className={style.HowItWork}>
            <div className={style.HowItWork_header}>
                <h2>Our Explainable AI Approach</h2>
            </div>
            <div className={style.HowItWork_main}>
                <div className={style.HowItWork_img}>
                    <Image src="/howItWork.jpg" alt='pic' fill priority />
                </div>
                <div className={style.HowItWork_text}>
                    <p>At Interviewer.AI, we build Explainable AI to bring the most transparent and user-friendly smart hiring solution to your company. We help recruitment teams to identify desirable candidates during the entire talent acquisition process. An Explainable AI approach allows to highlight candidates’ key performance factors and minimize the risk of making biased decisions.</p>
                </div>
            </div>
        </section>
    )
}

export default HowItWork