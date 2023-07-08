import style from './Commit.module.css'
import { items } from '@/utils/data'

const Commit = () => {
    return (
        <section className={style.commit}>
            <div className={style.commit_heading}>
                <h2>What matters to you matters to us.</h2>
            </div>
            <ul className={style.cards}>
                {
                    items?.map((item, i) => (
                        <li className={style.card} key={i} >
                            <h4>{item?.title}</h4>
                            <p>{item?.paragraph}</p>
                        </li>
                    ))}
            </ul>
            <div className={style.commit_gradient}></div>
        </section>
    )
}

export default Commit