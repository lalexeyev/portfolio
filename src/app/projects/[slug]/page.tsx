type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Project: {slug}</h1>
    </main>
  );
}
