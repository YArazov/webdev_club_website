import { DemoResponse } from "@shared/api";

export default function Index() {
  return (
    <>
      {/* Hero */}
      <section className="container py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border bg-secondary px-3 py-1 text-xs font-medium text-foreground/80">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Student Organization
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight">
            Web & Game Dev Club
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            We build websites, games, and a supportive community. Learn, ship projects,
            and level up your design-to-code skills.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#meetings"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-3 text-primary-foreground font-semibold shadow hover:brightness-110 transition"
            >
              Join our weekly meetup
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-lg border px-5 py-3 font-semibold hover:bg-secondary transition"
            >
              Explore projects
            </a>
          </div>
        </div>
      </section>

      {/* Goals */}
      <section className="container py-12">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Our Goals</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Learn by building",
              desc: "Hands-on workshops covering HTML/CSS/JS, React, game engines, and tooling.",
            },
            {
              title: "Collaborate & mentor",
              desc: "Pair up on projects, share feedback, and grow together with peer support.",
            },
            {
              title: "Showcase & ship",
              desc: "Publish personal and club projects; present demos at end-of-term showcases.",
            },
          ].map((g) => (
            <div key={g.title} className="rounded-xl border bg-card p-6 shadow-sm">
              <div className="h-10 w-10 rounded-md bg-gradient-to-br from-primary to-accent text-white grid place-items-center font-bold">•</div>
              <h3 className="mt-4 font-semibold text-lg">{g.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{g.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="container py-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Current Projects</h2>
            <p className="mt-2 text-muted-foreground max-w-2xl">
              Students are hacking on web apps, indie games, and tools. Here are a few
              examples students are working on now.
            </p>
          </div>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { name: "Campus Helper", tag: "Web App", blurb: "A portal for study groups, events, and resources." },
            { name: "Pixel Quest", tag: "Game", blurb: "A 2D platformer with puzzle mechanics." },
            { name: "PortfolioKit", tag: "Toolkit", blurb: "Templates for student portfolios and resumes." },
          ].map((p) => (
            <div key={p.name} className="rounded-xl border bg-card p-5 shadow-sm hover:shadow-md transition">
              <div className="h-36 rounded-md bg-gradient-to-br from-primary/15 to-accent/15" />
              <div className="mt-4 flex items-center justify-between">
                <h3 className="font-semibold">{p.name}</h3>
                <span className="text-xs rounded-full bg-secondary px-2 py-1">{p.tag}</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{p.blurb}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Members */}
      <section className="container py-16">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Meet the Members</h2>
        <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { name: "Alex Kim", role: "Frontend & UI" },
            { name: "Priya Singh", role: "Game Dev" },
            { name: "Sam Rivera", role: "Full‑stack" },
            { name: "Mina Okafor", role: "3D & Graphics" },
          ].map((m) => (
            <li key={m.name} className="rounded-xl border bg-card p-6">
              <div className="h-14 w-14 rounded-full bg-gradient-to-br from-primary to-accent text-white grid place-items-center font-bold">
                {m.name.split(" ").map((n) => n[0]).slice(0,2).join("")}
              </div>
              <p className="mt-4 font-semibold">{m.name}</p>
              <p className="text-sm text-muted-foreground">{m.role}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Meetings */}
      <section id="meetings" className="container py-16">
        <div className="rounded-2xl border bg-gradient-to-br from-primary/10 to-accent/10 p-8 md:p-12">
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Weekly Meetings</h2>
              <p className="mt-2 text-muted-foreground">
                Every Wednesday · 5:00–7:00 PM · Engineering Lab 210
              </p>
              <p className="mt-2 text-muted-foreground">
                New to coding or design? You’re welcome. Bring a laptop if you have one.
              </p>
            </div>
            <div className="justify-self-start md:justify-self-end">
              <a href="#" className="inline-flex items-center justify-center rounded-lg bg-accent px-5 py-3 font-semibold text-accent-foreground shadow hover:brightness-110 transition">
                Get Involved
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
