import { FeatureCard } from "./FeatureCard";

export function Feature() {
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
                in few easy steps
              </p>
              <h1
                tabIndex={0}
                className="focus:outline-none text-4xl lg:text-4xl font-extrabold text-center leading-10 text-gray-800 lg:w-5/12 md:w-9/12 pt-4"
              >
                Create Beautiful Landing Pages &amp; Web Apps in a Jiffy
              </h1>
            </div>
            <div
              tabIndex={0}
              aria-label="group of cards"
              className="focus:outline-none mt-20 flex flex-wrap justify-center gap-10 px-4"
            >
              <FeatureCard
                imgURL="https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG1.svg"
                title="Ready to use components"
                description="It provides a very simple start, no need to write a lot of
                    code, you just import it and start the primitive components
                    and create the ones you need."
              />
              <FeatureCard
                imgURL="https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG2.svg"
                title="High Quality UI you can reply on"
                description="Modify the visual appearance of your site – including
                colors, fonts, margins and other style-related properties –
                with a sophisticated style."
              />
              <FeatureCard
                imgURL="https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG3.svg"
                title="Coded by Developers for Developers"
                description="Instead of just giving you the tools to create your own
                site, they offer you a list of themes you can choose from.
                Thus a handy product."
              />
              <FeatureCard
                imgURL="https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG4.svg"
                title="The Last UI kit you’ll ever need"
                description="We have chosen the bright color palettes that arouse the
                only positive emotions. The kit that simply assures to be
                loved by everyone."
              />
            </div>
          </div>
        </section>
      </>
    </div>
  );
}
