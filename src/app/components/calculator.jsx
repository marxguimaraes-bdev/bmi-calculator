'use client';
import { useState } from "react";
import Input from "@/components/input";

const Calculator = () => {
  const [bmi, setBmi] = useState();
  const [system, setSystem] = useState('metric');

  const onSystemChange = ({ target }) => setSystem(target.id);

  return (
    <div className="flex flex-col gap-y-6 mx-5 -mt-[45%] bg-pure-white text-gunmetal drop-shadow-calculator rounded-calculator p-6 md:mt-[10.4rem] md:-ml-[15%] md:w-[30rem] md:h-fit md:p-8">
      <div className="text-heading-m font-semibold">Enter your details below</div>
      <div className="grid grid-cols-2 gap-x-6">
        <div className="flex flex-start items-center">
          <input id="metric" name="system" type="radio" checked={system==='metric'} onChange={onSystemChange} className="mr-5 w-8 h-8 appearance-none border bg-pure-white border-borders rounded-full checked:border-8 checked:bg-blue " />
          <label htmlFor="metric" className="text-body-m font-semibold">Metric</label>
        </div>
        <div className="flex flex-start items-center">
          <input id="imperial" name="system" type="radio" checked={system==='imperial'} onChange={onSystemChange} className="mr-5 w-8 h-8 appearance-none border bg-pure-white border-borders rounded-full checked:border-8 checked:bg-blue " />
          <label htmlFor="imperial" className="text-body-m font-semibold">Imperial</label>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-6">
        <div className="col-span-1 flex flex-col gap-y-2">
          <label htmlFor="height" className="text-body-s font-normal leading-body text-dark-electric-blue">Height</label>
          <Input id="height" unit="cm" />
        </div>
        <div className="col-span-1 flex flex-col gap-y-2">
          <label htmlFor="weight" className="text-body-s font-normal leading-body text-dark-electric-blue">Weight</label>
          <Input id="weight" unit="kg" />
        </div>
      </div>
      <div className="grid items-center gap-x-6 p-8 text-pure-white rounded-2xl bg-gradient-to-r from-blue to-[#587DFF] md:grid-cols-2 md:rounded-r-[5rem]">
        <div className="flex flex-col gap-y-2">
          <div className="text-body-m leading-body font-semibold">Your BMI is...</div>
          <div className="text-heading-xl leading-heading font-semibold">23.4</div>
        </div>
        <div className="text-body-s">Your BMI suggests you’re a healthy weight. Your ideal weight is between <span className="font-bold">63.3kgs - 85.2kgs</span>.</div>
      </div>
    </div>
  );
};

export default Calculator;
