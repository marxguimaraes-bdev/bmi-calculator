'use client';
import { useForm, useWatch } from "react-hook-form";
import MetricForm from "@/app/components/metric-form";
import ImperialForm from "@/app/components/imperial-form";
import { useEffect, useState } from "react";

function Calculator() {
  const [ref, setRef] = useState(null);

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

  useEffect(() => {
    if (ref) {
      if (system === 'metric') {
        ref.classList.add('sm:animate-shrink-medium');
        ref.classList.add('xl:animate-shrink-large');
        ref.classList.remove('sm:animate-stretch-medium');
        ref.classList.remove('xl:animate-stretch-large');
      } else {
        ref.classList.add('sm:animate-stretch-medium');
        ref.classList.add('xl:animate-stretch-large');
        ref.classList.remove('sm:animate-shrink-medium');
        ref.classList.remove('xl:animate-shrink-large');
      }
    }
  }, [system]);

  return (
    <div ref={(el) => setRef(el)} className={`
      flex flex-col bg-pure-white text-gunmetal drop-shadow-custom rounded-calculator h-fit mozilla-max-h-fit xl:absolute
      gap-y-6 xl:gap-y-8 mx-5 -mt-[10.5625rem] p-6 sm:-mt-[17.875rem] xl:mt-[10.4375rem] xl:ml-[44.5rem] xl:w-[35.25rem] xl:p-8`}
    >
      <div className="text-heading-m font-semibold leading-heading">Enter your details below</div>
      <div className="grid grid-cols-2 gap-x-6">
        <div className="flex flex-start items-center">
          <input {...register('system')} id="metric-system" value="metric" type="radio" className="mr-5 w-8 h-8 appearance-none border bg-pure-white border-borders rounded-full transition-colors duration-200 hover:border-blue hover:cursor-pointer checked:hover:border-borders checked:border-8 checked:bg-blue" />
          <label htmlFor="metric-system" className="text-body-m font-semibold">Metric</label>
        </div>
        <div className="flex flex-start items-center">
          <input {...register('system')} id="imperial-system" value="imperial" type="radio" className="mr-5 w-8 h-8 appearance-none border bg-pure-white border-borders rounded-full transition-colors duration-200 hover:border-blue hover:cursor-pointer checked:hover:border-borders checked:border-8 checked:bg-blue" />
          <label htmlFor="imperial-system" className="text-body-m font-semibold">Imperial</label>
        </div>
      </div>
      {system === 'metric' && (
        <MetricForm />
      )}
      {system === 'imperial' && (
        <ImperialForm />
      )}
    </div>
  );
};

export default Calculator;
