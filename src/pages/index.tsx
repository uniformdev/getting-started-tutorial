import { Layout } from "@/components/Layout";
import Head from "next/head";
import { CanvasClient } from "@uniformdev/canvas";
import { UniformComposition, UniformSlot } from "@uniformdev/canvas-react";

export async function getStaticProps() {
  const client = new CanvasClient({
    apiKey: process.env.UNIFORM_API_KEY,
    projectId: process.env.UNIFORM_PROJECT_ID,
  });
  const { composition } = await client.getCompositionBySlug({
    slug: "/",
  });
  return {
    props: {
      composition,
    },
  };
}

export default function Home(props: any) {
  const { composition } = props;
  return (
    <>
      <Head>
        <title>Lyne | Home</title>
        <meta name="description" content="Demo app for a Uniform tutorial" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <UniformComposition data={composition} behaviorTracking={"onLoad"}>
          <UniformSlot name="content" />
        </UniformComposition>
      </Layout>
    </>
  );
}
