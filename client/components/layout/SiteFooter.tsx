export function SiteFooter() {
  return (
    <footer className="border-t mt-16">
      <div className="container py-10 grid gap-6 md:grid-cols-2 items-center">
        <div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Web&Game Dev Club — All rights reserved.
          </p>
        </div>
        <div className="justify-self-start md:justify-self-end">
          <div className="inline-flex items-center gap-2 rounded-lg bg-secondary px-3 py-2 text-sm">
            <span className="font-semibold">Weekly Meetups:</span>
            <span>Wednesdays 5:00–7:00 PM, Engineering Lab 210</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
