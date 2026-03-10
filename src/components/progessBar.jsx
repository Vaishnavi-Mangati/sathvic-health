import React from "react";
import { questions } from "../data/questions";

const ProgressBar = ({questionNumber}) =>{
    const percentage = Math.ceil((questionNumber+1)/ questions.length*100)
    return(
        <>
            <div className="flex justify-center items-center border max-w-230 mx-auto">
                <div>{`${percentage}%`}</div>
            </div>
        </>
    )
}

export default ProgressBar