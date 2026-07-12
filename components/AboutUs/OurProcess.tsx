import { CalendarCheck, Home, PaintRoller, ClipboardCheck } from "lucide-react";

const steps = [
  {
    icon: <CalendarCheck size={38} />,
    number: "01",
    title: "Book Your Estimate",
    description:
      "Choose a convenient time using our online booking system. We'll visit your home, discuss your project, answer your questions, and provide a detailed, no-obligation estimate.",
  },
  {
    icon: <Home size={38} />,
    number: "02",
    title: "Preparation",
    description:
      "Once you're ready to move forward, we carefully protect your home, prepare every surface, and ensure everything is ready for a smooth, professional finish.",
  },
  {
    icon: <PaintRoller size={38} />,
    number: "03",
    title: "Professional Painting",
    description:
      "Using premium materials and meticulous workmanship, we deliver smooth finishes, crisp lines, and beautiful results while keeping your home clean and organized.",
  },
  {
    icon: <ClipboardCheck size={38} />,
    number: "04",
    title: "Final Walkthrough",
    description:
      "Together we'll inspect every detail to ensure you're completely satisfied before we consider the project finished.",
  },
];

export default function OurProcess() {
  return (
    <section className="bg-[#E2E7F1] py-24 px-4">
      <div className="container max-w-7xl mx-auto">
        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">
          <p className="uppercase tracking-[0.25em] text-[#0D378D] font-semibold">
            Our Process
          </p>

          <h2 className="text-3xl lg:text-5xl font-bold text-black mt-3">
            A Simple Process Designed Around Your Home
          </h2>

          <p className="mt-6 text-gray-700 leading-8">
            From your first estimate to the final walkthrough, every step is
            focused on making your interior painting project organized,
            stress-free, and completed with meticulous attention to detail.
          </p>
        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-20">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white rounded-xl shadow-sm p-8 text-center hover:-translate-y-1 transition-transform"
            >
              <div className="flex justify-center text-[#0D378D] mb-6">
                {step.icon}
              </div>

              <span className="text-[#0D378D] font-bold text-sm tracking-widest">
                STEP {step.number}
              </span>

              <h3 className="text-2xl font-semibold mt-3 mb-4">{step.title}</h3>

              <p className="text-gray-600 leading-7">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
