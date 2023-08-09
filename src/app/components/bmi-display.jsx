function BMIDisplay({ bmi }) {
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
      <div className="text-body-s">Your BMI suggests you’re a healthy weight. Your ideal weight is between <span className="font-bold">63.3kgs - 85.2kgs</span>.</div>
    </div>
  );
}

export default BMIDisplay;
