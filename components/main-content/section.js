import styles from './section.module.css'

export default function Section({ children, backgroundImageUrl }) {
    return (
        <>
            <section className={styles.section}>
                <center>
                    {children}
                </center>
            </section>

            {/* Change background image depending on backgroundImageUrl prop */}
            <style jsx >{`
                section {
                    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${backgroundImageUrl});
                }
            `}</style>
        </>
    )
}