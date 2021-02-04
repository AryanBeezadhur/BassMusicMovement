import styles from './main-content.module.css'
import Section from './section'
import Image from 'next/image'

export default function MainContent({ videoData }) {

    if (process.browser) {
        AOS.init()
    }

    return (
        <main>
            <Section>

                <h1 className={styles.title}>
                    <span data-aos="fade-down" data-aos-duration="200">bass</span>
                    <span data-aos="fade-down" data-aos-duration="600">music</span>
                    <b data-aos="fade-down" data-aos-duration="1000">movement</b>
                </h1>

            </Section>

            {videoData.map((video) => (

                <a
                    key={video.url}
                    data-splitbee-event="Click video section"
                    data-splitbee-event-type={video.title}
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >

                    <Section backgroundImageUrl={video.thumbnail.url}>

                        <h1 className={styles.videoTitle}>{video.title}</h1>

                        <p className={styles.videoPublishDate}>{video.publishDate}</p>

                        <Image
                            data-aos="fade-down"
                            className={styles.videoThumbnail}
                            src={video.thumbnail.url}
                            width={video.thumbnail.width}
                            height={video.thumbnail.height}
                        />
                    </Section>

                </a>
            ))}
        </main>
    )
}