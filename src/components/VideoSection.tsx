import { PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Corporate video section — two side-by-side autoplaying, muted, looped
 * YouTube embeds.
 *
 * Browser autoplay policy: unmuted autoplay is blocked in all modern
 * browsers, so the embeds start muted (sound can be enabled via each
 * player's unmute control). `playlist` mirrors the video id so `loop=1`
 * repeats correctly outside of the YouTube app.
 */
const VIDEOS = [
  {
    id: "SnBLI62lvIQ",
    title: "Popular Pharmaceuticals Ltd Corporate Documentary",
  },
  {
    id: "yeM-ddaAhDQ",
    title: "Corporate Video — Popular Pharmaceuticals Ltd., Bangladesh",
  },
] as const;

function embedSrc(id: string) {
  return (
    `https://www.youtube-nocookie.com/embed/${id}` +
    `?autoplay=1&mute=1&loop=1&playlist=${id}&playsinline=1&rel=0&modestbranding=1`
  );
}

export default function VideoSection() {
  return (
    <section className="section" aria-label="Corporate videos">
      <div className="container-x">
        <div className="max-w-2xl">
          <p className="eyebrow">Inside the factory</p>
          <h2 className="h-section">Popular Pharmaceuticals in motion</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Step inside our WHO cGMP-certified facilities and see how we care
            for life — from research and manufacturing to distribution across
            the country and beyond.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2 2xl:gap-8">
          {VIDEOS.map((video) => (
            <figure key={video.id} className="min-w-0">
              <div className="relative overflow-hidden rounded-lg border">
                {/* 16:9 responsive frame */}
                <div className="aspect-video w-full bg-[#0a1128]">
                  <iframe
                    src={embedSrc(video.id)}
                    title={video.title}
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                </div>
              </div>
              <figcaption className="mt-3 flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <PlayCircle className="h-4 w-4 shrink-0 text-tertiary" aria-hidden="true" />
                {video.title}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          <Button variant="outline" size="sm" asChild>
            <a
              href="https://www.youtube.com/results?search_query=popular+pharmaceuticals"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PlayCircle className="h-4 w-4" aria-hidden="true" />
              More on YouTube
            </a>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <a href="/media#videos">More corporate videos</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
