

import { use } from "react";

import type { Technology as TechnologyType } from "../../types/technology";

import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";

interface TechnologyProps {
  technologyPromise: Promise<TechnologyType[]>;
  selectedTechnologies: TechnologyType[];
  onAddToStack: (technology: TechnologyType) => void;
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

const Technology = ({
  technologyPromise,
  selectedTechnologies,
  onAddToStack,
  onRemove,
  onRemoveAll,
}: TechnologyProps) => {
  const technologies = use(technologyPromise);

  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="mb-7">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Explore the{" "}
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">

          {/* Technology Cards */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">

              {technologies.map((technology) => (
                <TechnologyCard
                  key={technology.id}
                  technology={technology}
                  isAdded={selectedTechnologies.some(
                    (item) => item.id === technology.id
                  )}
                  onAddToStack={onAddToStack}
                />
              ))}

            </div>
          </div>

          {/* Your Stack */}
          <YourStack
            selectedTechnologies={selectedTechnologies}
            onRemove={onRemove}
            onRemoveAll={onRemoveAll}
          />

        </div>
      </div>
    </section>
  );
};

export default Technology;