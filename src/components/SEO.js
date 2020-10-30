import Head from "next/head";

const SEO = ({title}) => {
    return (
        <Head>
            <title>{title}</title>
        </Head>
    )
}

export default SEO;

SEO.defaultProps = {
    title: "TANDEM TRIVIA" 
}
