import style from './Diverse.module.css'

const Diverse = () => {
    return (
        <section className={style.diverse} >
             <div className={style.diverse_img}>
                <img src="/diverse/Ellipse 44.png" alt='png' className={style.img44} />
                <img src="/diverse/Ellipse 42.png" alt='png' className={style.img42} />
                <img src="/diverse/Ellipse 39.png" alt='png' className={style.img39} />
                <img src="/diverse/Ellipse 40.png" alt='png' className={style.img40} />
                <img src="/diverse/Ellipse 41.png" alt='png' className={style.img41} />
                <img src="/diverse/Ellipse 43.png" alt='png' className={style.img43} />
            </div>
            <div className={style.diverse_content}>
                <h2>Diverse interview practice powered by artificial intelligence</h2>
                <p>Our AI technology proactively targets underrepresented groups from passive and overlooked talent pools.
                    We are one of the few AI interview practice platform that unlocks all-new opportunities and brings valuable,
                    fresh perspectives to your training.</p>
            </div>
           
        </section>
    )
}

export default Diverse