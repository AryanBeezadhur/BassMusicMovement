import Header from '../components/header/header'
import MainContent from '../components/main-content/main-content'
import Footer from '../components/footer/footer'

export default function Index({ videoData }) {
    return (
        <>
            <Header />

            <MainContent videoData={videoData} />

            <Footer />
        </>
    )
}

// Fetch data for last 5 videos called at build time
// Response revalidated after 1 day (86400 seconds)
export async function getStaticProps() {

    const videosRequestURL = `https://www.googleapis.com/youtube/v3/search?key=${process.env.YOUTUBE_API_KEY}&channelId=${process.env.CHANNEL_ID}&part=snippet,id&order=date&maxResults=5`

    const res = await fetch(videosRequestURL)
    const data = await res.json()

    // Get video data from raw response
    const videoData = data.items.map((item) => {
        return {
            url: `https://youtube.com/watch?v=${item.id.videoId}`,
            title: item.snippet.title,
            thumbnail: item.snippet.thumbnails.high,
            publishDate: new Date(item.snippet.publishedAt).toDateString() // Convert UTC date to JavaScript date string
        }
    })

    // Returned as props to page
    return {
        props: {
            videoData: videoData
        },
        revalidate: 86400
    }
}