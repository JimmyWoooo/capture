import React,{useState} from "react";
import {motion,} from 'framer-motion';

const Toggle =({children, title}) =>{
    const [toggle, setToggle] = useState(false);

    return(
        <motion.div onClick={() => setToggle(!toggle)} className="question" layout transition={{layout: {duration: .5}}}>
            <motion.h4 layout>{title}</motion.h4>
            {toggle ? children : ''}
            <motion.div className="faq-line" layout transition={{layout: {duration: .5}}}></motion.div>
        </motion.div>
    )
}

export default Toggle;