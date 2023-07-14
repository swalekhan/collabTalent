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
                 <h2>Preparing for presentations and interviews brings on anxiety and stress for most of us. Practice in front of a mirror.  Practice with a friend.  How can you get an objective opinion?</h2>
            </div>
           
        </section>
    )
}

export default Diverse