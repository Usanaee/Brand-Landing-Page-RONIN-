// import "./App.css";
import Nav from "./components/Navbar/Nav";
import {
  Hero,
  PapularProduct,
  SpecialProducts,
  CustomerReviews,
  Services,
  SuperQualityProduct,
  Subscribe,
  Fotter,
} from "./sections";
function App() {
  return (
    <>
      <main className="relative max-width">
        <Nav/>
      </main>
      <section className="xl:padding-1 padding-b max-width">
        <Hero />
      </section>
      <section className="padding max-lg:border">
        <PapularProduct/>
      </section>
      <section className="padding">
        <SuperQualityProduct />
      </section>
      <section className="padding-x padding-y">
        <Services />
      </section>
      <section className="padding">
        <SpecialProducts />
      </section>
      <section className="bg-pale-blue padding -mt-64">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="bg-black padding-t padding-x pb-8">
        <Fotter />
      </section>
    </>
  );
}

export default App;
