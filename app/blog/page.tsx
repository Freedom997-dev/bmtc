import type { Metadata } from "next";
import Link from "next/link";
import { Newspaper } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Blog",
  description: `News, road tips, and updates from ${siteConfig.name}.`,
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <section className="relative isolate flex min-h-[60vh] items-center overflow-hidden bg-slate-950 text-white">
      <div aria-hidden className="absolute inset-0 bg-aurora opacity-50" />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(37, 99, 235,0.18),_transparent_60%)]"
      />
      <div className="relative mx-auto flex w-full max-w-3xl flex-col items-start gap-5 px-4 py-20 sm:px-6 lg:px-8">
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600/15 text-blue-400">
          <Newspaper className="h-7 w-7" />
        </span>
        <p className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-wider text-blue-400"><span aria-hidden className="inline-block h-0.5 w-8 bg-red-600" />
          Blog
        </p>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
          Coming soon
        </h1>
        <p className="max-w-xl text-lg text-slate-300">
          We&apos;re working on road tips, site updates, and news from{" "}
          {siteConfig.name}. Check back soon, or give us a call in the
          meantime.
        </p>
        <Button asChild size="lg" className="mt-2">
          <Link href="/">Back to home</Link>
        </Button>
      </div>
    </section>
  );
}
