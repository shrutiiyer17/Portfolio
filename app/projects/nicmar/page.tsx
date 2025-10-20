import Image from "next/image";
import Footer from "@/components/Footer";

interface ProjectPageProps {
  params: { slug: string };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  return (
    <main>
      <div className="w-full mt-16 flex justify-center">
        <div className="w-full px-8 flex justify-center">
          <div className="overflow-hidden rounded-[12px] w-full">
            <a href="https://www.nicmaronline.com/" target="_blank" rel="noopener noreferrer">
              <Image
                src="/NICMAR BANNER.jpg"
                alt="NICMAR Online Project"
                width={1820}
                height={500}
                className="w-full h-auto object-cover"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col px-[8%] xl:px-[24%] w-full">
        <div className="flex flex-col px-10 pt-16">
          <section className="mb-2 w-full">
            <p className="uppercase tracking-widest text-sm text-muted-foreground font-mono">
              FISTUDIOZ • UX Designer • 2025
            </p>
          </section>

          <section className="mb-12 w-full">
            <h1 className="text-xl font-semibold text-foreground mb-6">Accessible NICMAR Online</h1>
            <p className="text-muted-foreground leading-relaxed">
              In a world rapidly moving online, one of India’s most profound AEC institutions,
              NICMAR (National Institute of Construction Management and Research), set out to
              translate their 40-year legacy into a credible and accessible digital platform;
              launching their first online BIM course.
            </p>
            <br />
            <p className="text-muted-foreground leading-relaxed">
              Our goal was to build NICMAR Online’s digital presence from the scratch by developing
              the foundational UX and visual design.
            </p>
          </section>

          <section className="mb-12 w-full">
            <h2 className="text-l font-normal text-foreground/90 mb-2">Strategy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Studying the competitors showed us that premium courses need simple discovery and
              strong credibility. We mapped a user flow from discovery to application to payment;
              connecting the experience with a visual system and make sure we balance NICMAR’s
              academic stature with modern trends while remaining intuitive for a
              traditionally-inclined user base.
            </p>
          </section>
        </div>

        {/* Secondary image matching first image width */}
        <section className="-mx-[8%] xl:-mx-[24%] mt-4">
          <div className="w-full flex justify-center">
            <div className="w-full px-8 flex justify-center">
              <div className="overflow-hidden rounded-[12px] w-full">
                <Image
                  src="/Accessibility.png"
                  alt="Accessibility Overview"
                  width={1820}
                  height={1020}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Additional text section */}
        <div className="flex flex-col px-10">
          <section className="mb-12 w-full">
            <h2 className="text-l font-normal text-foreground/90 mb-2">
              Accessibility as a Non-Negotiable
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              At NICMAR Online, accessibility was essential. We integrated WCAG 2.1 Level A/AA
              compliance into all design and development.
            </p>

            <br />

            <p className="text-muted-foreground leading-relaxed">
              Key accessibility details included:
            </p>

            <ul className="list-disc pl-6 mt-2 text-muted-foreground leading-relaxed">
              <li>Contrast ratios for clarity in dark mode</li>
              <li>Keyboard navigation for a mouse-free journey</li>
              <li>
                Screen reader validation with Mac’s VoiceOver for accurate interpretation of the
                content
              </li>
              <li>And more...</li>
            </ul>
          </section>

          <section className="mb-12 w-full">
            <h2 className="text-l font-normal text-foreground/90 mb-2">Results</h2>
            <p className="text-muted-foreground leading-relaxed">
              Through testing and iterative refinements, we made sure to comply to WCAG 2.1 Level
              A/AA standards; opening educational opportunities to more learners and making learning
              more accessible.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-3">
              Explore the platform at{" "}
              <a
                href="https://www.nicmaronline.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground/60"
              >
                www.nicmaronline.com
              </a>
              .
            </p>
          </section>
        </div>

        <div className="px-10 py-4">
          <Footer />
        </div>
      </div>
    </main>
  );
}
