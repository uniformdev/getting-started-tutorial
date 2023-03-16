import { registerUniformComponent } from "@uniformdev/canvas-react";

export default function CTA({
  title,
  buttonText,
}: {
  title: string;
  buttonText: string;
}) {
  return (
    <div>
      <div className="dark:bg-gray-900">
        <section className="mx-auto container w-full py-36">
          <div className="flex flex-col justify-center items-center">
            <div className="md:text-5xl text-4xl font-black text-center text-gray-800 dark:text-white leading-snug lg:w-3/4">
              <h2>{title}</h2>
            </div>
            <div className="flex justify-center items-center mt-16">
              <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#082491] hover:opacity-90 w-48 h-12 text-lg text-white bg-gradient-to-l from-[#172f90] to-[#082491] rounded">
                {buttonText}
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

registerUniformComponent({
  type: "cta",
  component: CTA,
});
