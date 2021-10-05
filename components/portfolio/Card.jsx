import * as React from "react";
import { useState } from "react"
import { motion } from "framer-motion"

import "@fontsource/mate-sc"
import "@fontsource/zen-tokyo-zoo"
import "@fontsource/bebas-neue"
import "@fontsource/shadows-into-light"
import "@fontsource/lobster"
import "@fontsource/special-elite"
import "@fontsource/satisfy"
import "@fontsource/pacifico"
import "@fontsource/tourney"
import "@fontsource/orbitron"
import "@fontsource/press-start-2p"
import "@fontsource/dotgothic16"

export const Card = ({ key, isSelected, category, title, description, backgroundColor, font, link }) => {

    const [selectedId, setSelectedId] = useState(null)

    return (
        <motion.div style={{
            marginBottom: '2.8rem',
            border: 'solid 1rem rgba(0,0,0,0.4)',
        }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.1 }}
        >
            <div style={{
                width: '100%',
                fontFamily: font,
                fontSize: '1.4rem',
                color: '#EEE',
                background: 'rgba(0,0,0,0.4)',
                padding: '1rem',
                textAlign: 'center',
                marginTop: '-0.05rem',
            }}>
                {title}
            </div>
            <div style={{
                width: '100%', 
                color: '#FFF',
                padding: '1rem',
                fontFamily: 'Special Elite',
                background: 'rgba(0,0,0,0.2)'
            }}>
                {description}
            </div>
        </motion.div>
    )
};

export default Card;