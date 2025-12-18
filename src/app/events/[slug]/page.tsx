import { Typography } from "@material-tailwind/react";
import EventRegistrationForm from "@/components/EventRegistrationForm";

export default function EventDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <section className="px-6 py-16 max-w-3xl mx-auto">
      <Typography variant="h3" className="mb-4">
        {params.slug.replace(/-/g, " ")}
      </Typography>

      <Typography className="text-gray-600 mb-6">
        Full event details, agenda, speakers, and outcomes.
      </Typography>

      <EventRegistrationForm />
    </section>
  );
}
