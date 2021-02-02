import Head from 'next/head'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                {/* Document meta */}
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                {/* Browser tab: Title and icon */}
                <title>Bass Music Movement</title>
                <link rel="shortcut icon" type="image/x-icon" href="/favicon.jpg" />

                {/* SEO */}
                <meta name="description" content="Music promotion, record label and cars" />
                <meta name="title" content="Bass Music Movement" />
                <meta name="robots" content="index, follow" />
                {/* Theme color for android browsers -*/}
                <meta name="theme-color" content="#2D3043" />

                {/* OpenGraph card */}
                <meta property="og:title" content="Bass Music Movement" />
                <meta property="og:image" content="https://bmm.now.sh/hero-background.jpg" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://bmm.now.sh" />
                <meta property="og:site_name" content="www.bmm.now.sh" />
                <meta property="og:description" content="Music promotion, record label and cars" />

                {/* Twitter card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@officialbmm" />
                <meta name="twitter:creator" content="@AryanBeezadhur" />
                <meta name="twitter:domain" content="bmm.now.sh" />
                <meta name="twitter:title" content="Bass Music Movement" />
                <meta name="twitter:description" content="Music promotion, record label and cars" />
                <meta name="twitter:image" content="https://bmm.now.sh/hero-background.jpg" />
                <meta name="twitter:image:alt" content="Music promotion, record label and cars" />
                <meta name="twitter:url" content="https://bmm.now.sh" />

                {/* Font */}
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />

                {/* Global CSS */}
                <link rel="stylesheet" href="/style.css" />

                {/* Splitbee */}
                <script data-no-cookie async data-api="/_hive" src="/bee.js"></script>

                {/* AOS */}
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css" />
                <script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.min.js"></script>
            </Head>

            <Component {...pageProps} />
        </>
    )
}

export default MyApp
