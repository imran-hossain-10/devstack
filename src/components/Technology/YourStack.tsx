import type { Technology as TechnologyType } from "../../types/technology";

interface YourStackProps {
  selectedTechnologies: TechnologyType[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

const YourStack = ({
  selectedTechnologies,
  onRemove,
  onRemoveAll,
}: YourStackProps) => {
  return (
    <aside className="lg:col-span-1">
      <div className="rounded-xl border border-gray-200 bg-white p-5 lg:sticky lg:top-20">

        {/* Header */}
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-base font-semibold text-gray-900">
            Your Stack
          </h3>

          <span className="text-xs text-gray-500">
            {selectedTechnologies.length}{" "}
            {selectedTechnologies.length === 1
              ? "Technology"
              : "Technologies"}{" "}
            Selected
          </span>
        </div>

        {/* Empty State */}
        {selectedTechnologies.length === 0 ? (
          <div className="mt-5 rounded-lg border border-dashed border-gray-300 px-4 py-8 text-center">
            <p className="text-sm font-medium text-gray-600">
              Your stack is empty.
            </p>

            <p className="mt-1 text-xs text-gray-400">
              Add technologies to build your stack.
            </p>
          </div>
        ) : (
          <>
            {/* Selected Technologies */}
            <div className="mt-4 space-y-3">
              {selectedTechnologies.map((technology) => (
                <div
                  key={technology.id}
                  className="flex items-center gap-3 rounded-lg border border-gray-200 p-3"
                >
                  <img
                    src={technology.icon}
                    alt={technology.name}
                    className="h-8 w-8 object-contain"
                  />

                  <div className="min-w-0 flex-1">
                    <h4 className="truncate text-sm font-medium text-gray-900">
                      {technology.name}
                    </h4>

                    <p className="text-[10px] text-gray-500">
                      {technology.category}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => onRemove(technology.id)}
                    className="shrink-0 text-sm font-semibold text-gray-400 hover:text-red-500"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>

            {/* Remove All */}
            <button
              type="button"
              onClick={onRemoveAll}
              className="mt-4 w-full rounded-md border border-gray-200 py-2 text-xs font-medium text-gray-600 transition hover:border-red-200 hover:text-red-500"
            >
              Remove All
            </button>
          </>
        )}

      </div>
    </aside>
  );
};

export default YourStack;