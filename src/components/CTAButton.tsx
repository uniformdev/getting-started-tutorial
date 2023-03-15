import { registerUniformComponent } from "@uniformdev/canvas-react";

export function CTAButton({
  title,
  type = "primary",
}: {
  title: string;
  type?: "primary" | "secondary";
}) {
  return (
    <>
      <button
        className={`focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 ${
          type == "primary"
            ? "bg-indigo-700 text-white"
            : "bg-transparent text-indigo-700"
        } transition duration-150 ease-in-out mx-4  lg:text-xl lg:font-bold  rounded px-4 sm:px-10 border border-indigo-700 py-2 sm:py-4 text-sm`}
      >
        {title}
      </button>
    </>
  );
}

registerUniformComponent({
  type: "ctaButton",
  component: CTAButton,
});
