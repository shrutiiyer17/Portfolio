import Footer from "@/components/Footer";
import Work from "@/components/Work";
import Art from "@/components/Photos";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col px-[8%] xl:px-[24%] min-h-screen w-full">
      {/* Header section with name and bio */}
      <div className="flex flex-col py-12 px-12 pt-32">
        <h1
          className="text-[28px] md:text-[24px] mb-2 leading-none text-foreground"
          style={{ fontFamily: "IBM Plex Serif", fontWeight: 400 }}
        >
          Shruti
        </h1>
        <p
          className="text-muted-foreground text-[16px] max-w-2xl"
          style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
        >
          A running log of I’ve been doing, <br />
          and what's in my head.
        </p>
      </div>

      <div className="flex flex-col md:flex-row px-10 py-4 -mt-[0.5px]">
        {/* Section 2: Featured Work*/}
        <div className="w-full">
          {/* <h2 className="text-sm uppercase tracking-wider text-muted-foreground pl-2 "> FEATURED WORK</h2> */}
          <Work />
        </div>
      </div>

      <div className="flex flex-col md:flex-row py-4 px-12 -mt-[0.5px]">
        {/* Footer */}
        <Art />
      </div>

      <div className=" md:flex-row px-10 -mt-[0.5px] py-4">
        {/* Footer */}
        <Footer />
      </div>
    </main>
  );
}
