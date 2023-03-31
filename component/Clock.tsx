import styles from "styles/clock.module.scss"
import { useRef, useState, useEffect } from "react"

export const Clock = () => {

    const hourRef = useRef<HTMLParagraphElement>(null)
    const minRef = useRef<HTMLParagraphElement>(null)
    const secRef = useRef<HTMLParagraphElement>(null)
    const ampmRef = useRef<HTMLParagraphElement>(null)

    
    const [hdeg, setHdeg] = useState(0)
    const [mdeg, setMdeg] = useState(0)
    const [sdeg, setSdeg] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
        
            let date = new Date()
            let h = String(date.getHours()).padStart(2, '0')
            let m = String(date.getMinutes()).padStart(2, '0')
            let s = String(date.getSeconds()).padStart(2, '0')
    
            setHdeg(360 * date.getHours() / 12 + 45)
            setMdeg(360 * date.getMinutes() / 60 + 45)
            setSdeg(360 * date.getSeconds() / 60 + 45)
        
            if(hourRef.current !== null) {
                hourRef.current.innerHTML = h
            }
            if(minRef.current !== null) {
                minRef.current.innerHTML = m
            }
            if(secRef.current !== null) {
                secRef.current.innerHTML = s
    
            }
            
        })
        return () => clearInterval(interval)
    }, [])





    return (
        <div className={styles.container}>
            <div className={styles.clockcontainer}>
                <div className={styles.hour}>
                    <div
                    className={`${styles.circle} ${styles.hourcircle}`}
                    style={{ transform: `rotate(${hdeg}deg)`}}
                    >
                        <p 
                        className={styles.hh} 
                        ref={hourRef}
                        style={{ transform: `rotate(${-1 * hdeg}deg)`}}
                        >00</p>
                    </div>
                </div>
                <div className={styles.minute}>
                    <div 
                    className={`${styles.circle} ${styles.mincircle}`}
                    style={{ transform: `rotate(${mdeg}deg)`}}
                    >
                        <p 
                        className={styles.mm} 
                        ref={minRef}
                        style={{ transform: `rotate(${-1 * mdeg}deg)`}}
                        >00</p>
                    </div>
                </div>
                <div className={styles.second}>
                    <div 
                    className={`${styles.circle} ${styles.seccircle}`}
                    style={{ transform: `rotate(${sdeg}deg)`}}
                    >
                        <p 
                        className={styles.ss} 
                        ref={secRef}
                        style={{ transform: `rotate(${-1 * sdeg}deg)`}}
                        >00</p>
                    </div>
                </div>
            </div>
        </div>
    )
}