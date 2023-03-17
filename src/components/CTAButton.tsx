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
        className={`focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#082491] ${
          type == "primary"
            ? "bg-[#082491] text-white"
            : "bg-transparent text-[#082491]"
        } transition duration-150 ease-in-out mx-4  lg:text-xl lg:font-bold  rounded px-4 sm:px-10 border border-[#082491] py-2 sm:py-4 text-sm`}
      >
        {title}
      </button>
    </>
  );
}
