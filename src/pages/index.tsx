import CTA from "@/components/CTA";
import { Features } from "@/components/Features";
import { Hero } from "@/components/Hero";
import { Layout } from "@/components/Layout";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Lyne | Home</title>
        <meta name="description" content="Demo app for a Uniform tutorial" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Hero
          titleA="The Freedom to Create the"
          highlightedTitle="Websites"
          titleB="You Want"
          subtext="A professional website drives sales. Create a beautiful website
                to impress and engage new customers and establish your business
                online"
        />
        <Features
          subtext="in few easy steps"
          title="Create Beautiful Landing Pages &amp; Web Apps in a Jiffy"
        />
        <CTA
          title="Build the next big thing and ship to market faster"
          buttonText="Download Now"
        />
      </Layout>
    </>
  );
}
