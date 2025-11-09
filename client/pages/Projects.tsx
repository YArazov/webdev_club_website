export default function Projects() {
  return (
    <section className="container py-16">
      <div className="max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Club Projects</h1>
        <p className="mt-3 text-muted-foreground">
          This is a placeholder page for showcasing current and past student projects.
          Ask to flesh this out with filters, tags, and detailed project pages when you're ready.
        </p>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[1,2,3,4,5,6].map((i) => (
          <div key={i} className="rounded-xl border bg-card p-6 shadow-sm">
            <div className="h-36 rounded-md bg-gradient-to-br from-primary/15 to-accent/15" />
            <h3 className="mt-4 font-semibold">Sample Project {i}</h3>
            <p className="text-sm text-muted-foreground">Short description goes here.</p>
          </div>
        ))}
      </div>
    </section>
  );
}
