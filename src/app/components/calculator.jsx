'use client';
import { useForm, useWatch } from "react-hook-form";
import MetricForm from "@/app/components/metric-form";
import ImperialForm from "@/app/components/imperial-form";

function Calculator() {
  const { register, control } = useForm({
    system: 'metric',
    defaultValues: {
      system: 'metric',
    },
  });

  const system = useWatch({
    control,
    name: 'system',
  });

  return (
    <div className="flex flex-col gap-y-6 lg:gap-y-8 mx-5 -mt-[10.5625rem] bg-pure-white text-gunmetal drop-shadow-custom rounded-calculator p-6 md:-mt-[35%] lg:mt-[10.0625rem] lg:-ml-[16.625rem] lg:w-[35.25rem] lg:h-fit lg:p-8">
      <div className="text-heading-m font-semibold leading-heading">Enter your details below</div>
      <div className="grid grid-cols-2 gap-x-6">
        <div className="flex flex-start items-center">
          <input {...register('system')} id="metric-system" value="metric" type="radio" className="mr-5 w-8 h-8 appearance-none border bg-pure-white border-borders rounded-full transition-colors duration-200 hover:border-blue hover:cursor-pointer checked:hover:border-borders checked:border-8 checked:bg-blue"/>
          <label htmlFor="metric-system" className="text-body-m font-semibold">Metric</label>
        </div>
        <div className="flex flex-start items-center">
          <input {...register('system')} id="imperial-system" value="imperial" type="radio" className="mr-5 w-8 h-8 appearance-none border bg-pure-white border-borders rounded-full transition-colors duration-200 hover:border-blue hover:cursor-pointer checked:hover:border-borders checked:border-8 checked:bg-blue" />
          <label htmlFor="imperial-system" className="text-body-m font-semibold">Imperial</label>
        </div>
      </div>
      { system === 'metric' && (
        <MetricForm />
      )}
      { system === 'imperial' && (
        <ImperialForm />
      )}
    </div>
  );
};

export default Calculator;
