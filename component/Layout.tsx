import styles from "styles/layout.module.scss"


export const Layout = ({ children} : { children : React.ReactElement}) => {

    return (
        <div className={styles.container}>
            {children}
        </div>
    )
        
}