import { Suspense, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Technology from "./components/Technology/Technology";
import type { Technology as TechnologyType } from "./types/technology";
import Footer from "./components/Footer";

const technologyFetch = async (): Promise<TechnologyType[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};


const technologyPromise = technologyFetch();

function App() {
  const [selectedTechnologies, setSelectedTechnologies] = useState<
    TechnologyType[]>([]);

  const handleAddToStack = (technology: TechnologyType) => {
    const alreadyAdded = selectedTechnologies.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack!`);
      return;
    }

    setSelectedTechnologies((prev) => [...prev, technology]);

    toast.success(`${technology.name} added to your stack!`);
  };

  const handleRemove = (id: string) => {
    setSelectedTechnologies((prev) =>
      prev.filter((item) => item.id !== id)
    );

    toast.info("Technology removed from your stack.");
  };

  const handleRemoveAll = () => {
    setSelectedTechnologies([]);

    toast.info("All technologies removed from your stack.");
  };

  return (
    <>
      <Nav />

      <Banner />

      <Suspense fallback={<h2>Loading........</h2>}>
        <Technology
          technologyPromise={technologyPromise}
          selectedTechnologies={selectedTechnologies}
          onAddToStack={handleAddToStack}
          onRemove={handleRemove}
          onRemoveAll={handleRemoveAll}
        />
      </Suspense>

      <Footer />

      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}

export default App;