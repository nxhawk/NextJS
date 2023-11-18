import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeaders mainHeader={"About us"} subHeader={"Our story"} />
        <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
            quaerat hic similique quia maxime minus perferendis, accusantium, ab
            esse beatae ut labore quo et, assumenda aliquam in tempore omnis
            ducimus!
          </p>
          <p>
            Odit itaque numquam, cum eveniet dolore sunt provident optio. Harum
            ea, obcaecati officiis ducimus, eveniet minus debitis excepturi
            maxime, iusto totam adipisci.
          </p>
          <p>
            Esse, sapiente quasi nemo nam illum, architecto nulla eum odio vel
            doloribus dolore.
          </p>
        </div>
      </section>
      <section className="text-center my-8">
        <SectionHeaders
          subHeader={"Don't hesitate"}
          mainHeader={"Contact us"}
        />
        <div className="mt-8">
          <a
            className="text-4xl underline text-gray-500"
            href="tel:+46738123123"
          >
            +46 738 123 123
          </a>
        </div>
      </section>
      <footer className="border-t p-8 text-center text-gray-500 mt-16">
        &copy; 2023 All rights reserved
      </footer>
    </>
  );
}
