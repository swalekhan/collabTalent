import React from "react";
import style from './Practice.module.css';
import { practItems } from "@/utils/data";

const Practice = () => {
    return (
        <section className={style.practice}>
            <h2>Practice Areas</h2>
            <ul>
                {practItems?.map((item) => (
                    <li key={item?.id}>
                        {item.title}
                    </li>
                ))}
            </ul>
            <div className={style.practice_content}>
                <h4>
                    Preparing for presentations and interviews brings on anxiety and stress for most of us.
                     Practice in front of a mirror.  Practice with a friend.  How can you get an objective opinion?
                </h4>
                <button className="btn">Join Waitlist</button>

            </div>
            <div className={style.practice_gradient}> </div>

        </section>
    )
}

export default Practice