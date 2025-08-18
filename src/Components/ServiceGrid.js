import { ServiceCard } from "./ServiceCard";

export function ServicesGrid() {
  const services = [
    {
      title: "A/C Diagnosis and Inspection",
      description: [
        "Comprehensive system check using specialized tools.",
        "Detects issues such as refrigerant leaks, faulty compressors, blocked filters, or electrical faults."
      ]
    },
    {
      title: "Leak Detection and Repair", 
      description: [
        "Uses UV dye or electronic leak detectors to find refrigerant leaks.",
        "Repairs damaged hoses, O-rings, seals, or condensers to restore efficiency."
      ]
    },
    {
      title: "Refrigerant Recharge (Re-gas)",
      description: [
        "Removal of old or contaminated refrigerant.",
        "Refill with the correct amount and type of refrigerant (R134a or R1234yf).",
        "Ensures optimal cooling performance."
      ]
    },
    {
      title: "Compressor Replacement and Repair",
      description: [
        "Diagnosing and replacing worn or failed A/C compressors.",
        "Includes system flushing and new oil addition."
      ]
    },
    {
      title: "Blower Motor & Cabin Air Filter Replacement",
      description: [
        "Fixes weak airflow issues.",
        "Replaces dirty or blocked filters to improve air quality."
      ]
    },
    {
      title: "Emergency A/C Repair Services",
      description: [
        "Quick, on-the-spot diagnostics and repairs.",
        "Ideal for breakdowns or road service needs."
      ]
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}