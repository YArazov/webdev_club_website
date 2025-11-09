export default function Members() {
  const people = [
    { name: "Alex Kim", role: "President" },
    { name: "Priya Singh", role: "Vice President" },
    { name: "Sam Rivera", role: "Treasurer" },
    { name: "Mina Okafor", role: "Project Lead" },
  ];
  return (
    <section className="container py-16">
      <div className="max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Our Members</h1>
        <p className="mt-3 text-muted-foreground">
          This is a placeholder page to introduce members. Ask to connect this to a CMS or
          database later so students can update it themselves.
        </p>
      </div>
      <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {people.map((p) => (
          <li key={p.name} className="rounded-xl border bg-card p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-accent text-white grid place-items-center font-bold">
                {p.name.split(" ").map((n) => n[0]).slice(0,2).join("")}
              </div>
              <div>
                <p className="font-semibold">{p.name}</p>
                <p className="text-sm text-muted-foreground">{p.role}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
