import Head from "next/head";

export default function BaseLayout(props) {
  return (
    <html lang="en">
      <Head>
        <title>Javi's Portfolio</title>
        <meta name="Description" content="Portfolio of my latest web and mobile development work, Created by Javier Alvarez"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "Person",
              name: "Javier Alvarez",
              url: "https://javi-portfolio.com",
              image: "",
              sameAs: [
                "https://www.linkedin.com/in/javi2020/",
                "https://github.com/jalvarez2020",
              ],
              jobTitle: "Full Stack Developer",
            }),
          }}
        />
        <link rel="canonical" href="https://javi-portfolio.com" />
        {/* <link rel="shortcut icon" href="favicon.icon" /> */}
      </Head>
        <body>{props.children}</body>
    </html>
  );
}
