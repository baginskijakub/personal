import { Entry } from "./entry";

interface Props {
  entry: Entry;
}

export const Overview = (props: Props) => {
  const { entry } = props;
  const { calories, protein, meals } = entry;

  return (
    <>
      <div className="mt-4 flex flex-col gap-4 w-full md:flex-row">
        <div className="flex-1">
          <h5 className="font-medium text-sm mb-1 ml-1">Calorie intake</h5>

          <div className="font-mono flex-1 p-6 flex items-end justify-center gap-1 bg-white border-[0.5px] border-gray-100 rounded-md">
            <span className="text-2xl font-medium leading-6">{calories}</span>
            <span className="text-xs text-gray-400">/2300 kcal</span>
          </div>
        </div>

        <div className="flex-1">
          <h5 className="font-medium text-sm mb-1 ml-1">Protein intake</h5>

          <div className="font-mono flex-1 p-6 flex items-end justify-center gap-1 bg-white border-[0.5px] border-gray-100 rounded-md">
            <span className="text-2xl font-medium leading-6">{protein}</span>
            <span className="text-xs text-gray-400">/160 g</span>
          </div>
        </div>
      </div>

      <h5 className="font-medium text-sm mb-1 ml-1">Meals today</h5>

      <div className="flex-1 px-3 py-3 flex flex-col gap-1 bg-white border-[0.5px] border-gray-100 rounded-md">
        {meals.map((m, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="w-1 h-1 bg-gray-300 rounded-full" />
            <span className="flex-1 text-ellipsis text-sm">{m.title}</span>

            <p className="text-gray-400 text-sm font-mono flex items-center gap-4 ">
              {m.calories}kcal
              <span className="h-4 w-[0.5px] bg-gray-200" />
              {m.protein}g
            </p>
          </div>
        ))}
      </div>
    </>
  );
};
