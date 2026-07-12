import { Check } from "lucide-react";

const promises = [
  {
    title: "Honest Communication",
    description:
      "From your first estimate to the final walkthrough, we keep you informed every step of the way with clear expectations and no surprises.",
  },
  {
    title: "Respect for Your Home",
    description:
      "We treat your home with the same care we would our own by protecting your floors, furniture, and belongings while maintaining a clean workspace.",
  },
  {
    title: "Meticulous Workmanship",
    description:
      "Preparation, clean lines, smooth finishes, and attention to detail are at the heart of every project we complete.",
  },
  {
    title: "Quality Without Shortcuts",
    description:
      "We believe doing the job right is more important than doing it quickly. Every project receives the time and care it deserves.",
  },
];

export default function OurPromise() {
  return (
    <section className="container max-w-7xl mx-auto px-4 py-24">
      <div className="max-w-3xl mx-auto text-center">
        <p className="uppercase tracking-[0.25em] text-[#0D378D] font-semibold">
          Our Promise
        </p>

        <h2 className="text-3xl lg:text-5xl font-bold mt-3">
          What You Can Expect From Every Project
        </h2>
        <p className="mt-6 text-gray-700 leading-8">
          Every project completed by Primo Painters reflects our commitment to
          delivering professional interior painting services Calgary homeowners
          can rely on.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mt-20">
        {promises.map((promise) => (
          <div
            key={promise.title}
            className="flex gap-4 lg:gap-5 p-8 px-4 text-[#0D378D] rounded-xl border border-gray-200 bg-white shadow-sm"
          >
            <div className="mt-1">
              <div className="w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-[#0D378D] flex items-center justify-center">
                <Check className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">{promise.title}</h3>
              <p className="mt-3 text-gray-600 leading-7 text-justify">
                {promise.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
