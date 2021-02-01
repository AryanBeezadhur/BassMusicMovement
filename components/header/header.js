import styles from './header.module.css'
import Link from './link'

export default function Header() {
    return (
        <header className={styles.header}>
            <ul>
                <center className={styles.center}>
                    <Link href="http://youtube.com/c/BassMusicMovement">
                        YOUTUBE
                    </Link>

                    <Link href="https://open.spotify.com/user/7m61o9zzm0l482iovt84fz0w0">
                        SPOTIFY
                    </Link>

                    <Link href="https://instagram.com/BassMusicMovement/">
                        INSTAGRAM
                    </Link>

                    <Link href="https://www.facebook.com/thebassmusicmovement/">
                        FACEBOOK
                    </Link>

                    <Link href="https://twitter.com/officialbmm">
                        TWITTER
                    </Link>
                </center>
            </ul>
        </header>
    )
}