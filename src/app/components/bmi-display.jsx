import { getWeightClassification, getIdealWeightRange } from "@/utils/body-mass-index";

function renderWeight(bmi, height, system) {
  const [lower, upper] = getIdealWeightRange(height, system);
  const weightUnit = system === 'imperial' ? 'lbs' : 'kgs';
  return (
    <div className="text-body-s">Your BMI suggests you’re { getWeightClassification(bmi) }. Your ideal weight is between <span className="font-bold">{ `${lower.toFixed(1)}${weightUnit}` } - { `${upper.toFixed(1)}${weightUnit}` }</span>.</div>
  );
}

function BMIDisplay({ bmi, height, system }) {
  const parsedBmi = parseFloat(bmi);

  return (
    <div className="p-8 text-pure-white rounded-2xl bg-gradient-to-r from-blue to-[#587DFF] md:grid-cols-2 md:rounded-r-[99px] transition-all duration-1000 ease-in-out">
      { isNaN(parsedBmi) ? (
        <div className="flex flex-col items-start gap-y-4">
          <div className="text-heading-m leading-body font-semibold">Welcome</div>
          <div className="text-body-s">Enter your height and weight and you’ll see your BMI result here</div>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-x-6">
          <div className="flex flex-col gap-y-2">
            <div className="text-body-m leading-body font-semibold">Your BMI is...</div>
            <div className="text-heading-xl leading-heading font-semibold md:pr-[168px] lg:pr-[72px]">{ parsedBmi.toFixed(1) }</div>
          </div>
          {renderWeight(parsedBmi, height, system)}
        </div>
      )}
    </div>
  );
}

export default BMIDisplay;
