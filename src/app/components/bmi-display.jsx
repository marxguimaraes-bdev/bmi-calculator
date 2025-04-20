import { getWeightClassification, getIdealWeightRange } from "@/utils/body-mass-index";

const NAN_CLASSES = 'h-[9.875rem] md:h-[8.5625rem] xl:h-[8.5625rem]';
const BMI_CLASSES = 'h-[16.0625rem] md:h-[10.4375rem] xl:h-[10.375rem]';

function renderWeight(bmi, height, system) {
  const [lower, upper] = getIdealWeightRange(height, system);
  const weightUnit = system === 'imperial' ? 'lbs' : 'kgs';
  return (
    <div className="text-body-s">Your BMI suggests you're {getWeightClassification(bmi)}. Your ideal weight is between <span className="font-bold">{`${lower.toFixed(1)}${weightUnit}`} - {`${upper.toFixed(1)}${weightUnit}`}</span>.</div>
  );
}

function BMIDisplay({ bmi, height, system }) {
  const parsedBmi = parseFloat(bmi);

  return (
    <div className={
      `md:mt-2 p-8 text-pure-white rounded-2xl bg-gradient-to-r from-blue to-[#587DFF] md:grid-cols-2 md:rounded-r-[6.1875rem]
      ${isNaN(parsedBmi) ? NAN_CLASSES : BMI_CLASSES} transition-[height] duration-100 ease-linear`}
    >
      {isNaN(parsedBmi) ? (
        <div className="flex flex-col items-start gap-y-4">
          <div className="text-heading-m leading-body font-semibold">Welcome</div>
          <div className="text-body-s">Enter your height and weight and you'll see your BMI result here</div>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row items-start md:items-center gap-x-6 gap-y-6">
          <div className="flex flex-col gap-y-2">
            <div className="text-body-m leading-body font-semibold">Your BMI is...</div>
            <div className="text-heading-xl leading-heading font-semibold md:pr-[10.5rem] lg:pr-[4.5rem]">{parsedBmi.toFixed(1)}</div>
          </div>
          {renderWeight(parsedBmi, height, system)}
        </div>
      )}
    </div>
  );
}

export default BMIDisplay;
