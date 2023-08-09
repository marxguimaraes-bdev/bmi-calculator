const BMI_CLASSIFICATION = {
  lower_healthy: 18.5,
  upper_healthy: 24.9,
  overweight: 29.9,
};

function getWeightClassification(bmi) {
  if (bmi < BMI_CLASSIFICATION.lower_healthy) {
    return 'underweight';
  }

  if (bmi <= BMI_CLASSIFICATION.upper_healthy) {
    return 'a healthy weight';
  }

  if (bmi <= BMI_CLASSIFICATION.overweight) {
    return 'overweight';
  }

  return 'obese';
}

function getIdealWeightMetric(height) {
  const lowerLimit = ((height/100) ** 2) * BMI_CLASSIFICATION.lower_healthy;
  const upperLimit = ((height/100) ** 2) * BMI_CLASSIFICATION.upper_healthy;

  return `${lowerLimit.toFixed(1)}kgs - ${upperLimit.toFixed(1)}kgs`;
}

function BMIDisplay({ bmi, height }) {
  const floatValue = parseFloat(bmi);

  return isNaN(floatValue) ? (
    <div className="flex flex-col items-start gap-y-4 p-8 text-pure-white rounded-2xl bg-gradient-to-r from-blue to-[#587DFF] md:grid-cols-2 md:rounded-r-[5rem]">
      <div className="text-heading-m leading-body font-semibold">Welcome</div>
      <div className="text-body-s">Enter your height and weight and you’ll see your BMI result here</div>
    </div>
  ) : (
    <div className="grid items-center gap-x-6 p-8 text-pure-white rounded-2xl bg-gradient-to-r from-blue to-[#587DFF] md:grid-cols-2 md:rounded-r-[5rem]">
      <div className="flex flex-col gap-y-2">
        <div className="text-body-m leading-body font-semibold">Your BMI is...</div>
        <div className="text-heading-xl leading-heading font-semibold">{ floatValue.toFixed(1) }</div>
      </div>
      <div className="text-body-s">Your BMI suggests you’re { getWeightClassification(bmi) }. Your ideal weight is between <span className="font-bold">{ getIdealWeightMetric(height) }</span>.</div>
    </div>
  );
}

export default BMIDisplay;
