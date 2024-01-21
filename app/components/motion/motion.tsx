import {motion,useInView, useAnimate} from "framer-motion"
import { useEffect, useState } from "react"


export const MotionDiv = ({ children, delay }: {children: React.ReactNode, delay?: number}) => {

    const [scope, animate] = useAnimate()
    const isInView = useInView(scope, { once: false })


    const [style, setStyle] = useState({
        overflow : "hidden"
    })
   

    useEffect(() => {
        const animateElement = async () => {
            if(isInView){
                await animate(scope.current, { y:0,}, { ease: "linear", delay:delay, duration: 0.5 } )
            }else{
                await animate(scope.current, { y:"100%",}, { ease: "linear", delay:delay, duration: 0.5 } )
            }
        }

        animateElement()
    },[isInView])

    return (
        <span style={style}>
            <motion.div
                initial={{ y : "100%" }}
                ref={scope}
            >
                {children}
            </motion.div>
        </span>
    )
}