import {
  registerUniformComponent,
  UniformSlot,
} from "@uniformdev/canvas-react";

export function Features({
  subtext,
  title,
}: {
  subtext: string;
  title: string;
}) {
  return (
    <div className="pb-16" style={{ fontFamily: '"Lato", sans-serif' }}>
      <>
        <section className="max-w-8xl mx-auto container bg-white pt-16">
          <div>
            <div role="contentinfo" className="flex items-center flex-col px-4">
              <p
                tabIndex={0}
                className="focus:outline-none uppercase text-sm text-center text-gray-600 leading-4"
              >
                {subtext}
              </p>
              <h1
                tabIndex={0}
                className="focus:outline-none text-4xl lg:text-4xl font-extrabold text-center leading-10 text-gray-800 lg:w-5/12 md:w-9/12 pt-4"
              >
                {title}
              </h1>
            </div>
            <div
              tabIndex={0}
              aria-label="group of cards"
              className="focus:outline-none mt-20 flex flex-wrap justify-center gap-10 px-4"
            >
              <UniformSlot name="featureCards" />
            </div>
          </div>
        </section>
      </>
    </div>
  );
}

registerUniformComponent({
  type: "features",
  component: Features,
});
