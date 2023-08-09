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
    <div className="flex flex-col gap-y-6 mx-5 -mt-[45%] bg-pure-white text-gunmetal drop-shadow-calculator rounded-calculator p-6 md:-mt-[35%] lg:mt-[10.4rem] lg:-ml-[15%] lg:w-[30rem] lg:h-fit lg:p-8">
      <div className="text-heading-m font-semibold">Enter your details below</div>
      <div className="grid grid-cols-2 gap-x-6">
        <div className="flex flex-start items-center">
          <input {...register('system')} id="metric-system" value="metric" type="radio" className="mr-5 w-8 h-8 appearance-none border bg-pure-white border-borders rounded-full hover:border-blue hover:cursor-pointer checked:hover:border-borders checked:border-8 checked:bg-blue"/>
          <label htmlFor="metric-system" className="text-body-m font-semibold">Metric</label>
        </div>
        <div className="flex flex-start items-center">
          <input {...register('system')} id="imperial-system" value="imperial" type="radio" className="mr-5 w-8 h-8 appearance-none border bg-pure-white border-borders rounded-full hover:border-blue hover:cursor-pointer checked:hover:border-borders checked:border-8 checked:bg-blue" />
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
