import { Typography } from "@material-tailwind/react";

export default function BlogDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <section className="px-6 py-16 max-w-3xl mx-auto">
      <Typography variant="h3" className="mb-4">
        {params.slug.replace(/-/g, " ")}
      </Typography>

      <Typography className="text-gray-600">
        Full blog article content goes here.
      </Typography>
    </section>
  );
}
