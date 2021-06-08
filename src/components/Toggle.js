import { motion } from 'framer-motion'
import React,{useState} from 'react'
import styled from 'styled-components'

function Toggle({children, title}) {
    const [Toggle, setToggle] = useState(false)
    return (
        <motion.div layout className="question" onClick={()=> setToggle(!Toggle)}>
            <SToggle layout>{title}</SToggle>
            {Toggle ? children : ""}
            <div className="faq-line"></div>
        </motion.div>
    )
}
const SToggle = styled(motion.h4)`
    cursor: pointer;
`
export default Toggle
