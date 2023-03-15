import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "@/components/canvasComponents";
import { Context, ManifestV2 } from "@uniformdev/context";
import manifest from "../../manifest.json";
import { UniformContext } from "@uniformdev/context-react";

// Initialize Uniform Context
const context = new Context({
  manifest: manifest as ManifestV2,
  defaultConsent: true,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UniformContext context={context}>
      <Component {...pageProps} />
    </UniformContext>
  );
}
