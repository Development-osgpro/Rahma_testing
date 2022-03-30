// import React from 'react'
// import { motion } from "framer-motion"

// const Path = () => {

//     const sngVariants = {
//         hidden: { opacity: 0.9 },
//         visible: {
//             opacity: 1,
//             transition: { duration : 1 },
//         }
//     }

//     const pathVariants = {
//         hidden: {
//             pathLength: 0
//         },
//         visible: {
//             pathLength: 1,
//             transition: {
//                 duration: 3,
//                 ease: 'easeInOut',
//                 // repeat: Infinity
//             }
//         }
//     }

//     const path = 'M4.89,76.93H24a.12.12,0,0,0,.12-.1l1.31-4.91a.12.12,0,0,1,.24,0l2.07,6.13A.13.13,0,0,0,28,78l2.28-7.6a.12.12,0,0,1,.24,0l1.67,17.11a.13.13,0,0,0,.25,0l3.93-33.83a.13.13,0,0,1,.25,0L41,81.43a.13.13,0,0,0,.25,0l2.63-15.69a.13.13,0,0,1,.25,0L46,76a.13.13,0,0,0,.12.11H66.18a.13.13,0,0,0,.13-.13V29.59h-.88v22.7c0,.14-.67,3-3.46,3a3.58,3.58,0,0,1-3.6-2.79v-26s-.27-3.65,3.82-3.65h9.73a.12.12,0,0,0,.13-.12V21.21a.12.12,0,0,0-.09-.12,8.34,8.34,0,0,1-6.24-8.36h0A7.9,7.9,0,0,1,71.9,5.27a11,11,0,0,1,4.2,0,7.87,7.87,0,0,1,6.18,7.47h0A8.34,8.34,0,0,1,76,21.09a.12.12,0,0,0-.09.12v1.53a.12.12,0,0,0,.13.12h9.73c4.09,0,3.82,3.65,3.82,3.65v26A3.58,3.58,0,0,1,86,55.27c-2.79,0-3.43-2.84-3.46-3V29.59h-.88V75.93a.13.13,0,0,0,.13.13H94.51'

//     return (
//         <div>
//             <motion.svg
//                 className='svg'
//                 style={{width: '100%', height: '100%'}}
//                 viewBox='0 0 757.75 1279'
//                 variants={sngVariants}
//                 initial='hidden'
//                 animate='visible'
//             >
//             <motion.path
//                 fill='none'
//                 stroke='#58a67a'
//                 strokeWidth={1}
//                 variants={pathVariants}
//                 d={'path'}
//             />
//             </motion.svg>
//         </div>
//     )
// }

// export default Path