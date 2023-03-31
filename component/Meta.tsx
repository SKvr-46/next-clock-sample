//メタデータ用
import Head from "next/head";
import { siteMeta } from "@/lib/constants";
import { useRouter } from "next/router";
const {siteTitle, siteDesc, siteUrl, siteLocale, siteType} = siteMeta


type MetaType = {
    pageTitle: string
    pageDesc? : string
}

export const Meta = (props:MetaType) => {
    const {pageTitle, pageDesc} = props
    const desc = pageDesc ?? siteDesc

    const router = useRouter() 
    const url = `${siteUrl}${router.asPath}`

    return (
        <Head>
            <title>{pageTitle}</title>
            <meta property="og:title" content={`${pageTitle} | ${siteTitle}`}/>

            <meta name="description" content={desc}/>
            <meta property="og:description" content={desc}/>

            <link rel="canonical" href={url} />
            <meta property="og:url" content={url}/>

            <meta property="og:site_name" content={siteTitle}/>
            <meta property="og:type" content={siteType}/>
            <meta property="og:locale" content={siteLocale}/>
        </Head>
    ) 

}