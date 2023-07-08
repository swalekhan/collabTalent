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
                    If you are looking for a job in one of our covered categories then drop your
                    email address and receive an invite to our pilot program.
                </h4>
                <button className="btn">Join Waitlist</button>

            </div>
            <div className={style.practice_gradient}> </div>

        </section>
    )
}

export default Practice