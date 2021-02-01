import styles from './link.module.css'

export default function HeaderLink({ href, children }) {
    return (
        <li className={styles.li}>
            <a className={styles.a} target="_blank" rel="noopener noreferrer" href={href}>
                {children}
            </a>
        </li>
    )
}