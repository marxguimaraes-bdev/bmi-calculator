import { useState, useEffect } from 'react';
import { useForm, useWatch } from 'react-hook-form';

import BMIDisplay from '@/app/components/bmi-display';
import Input from '@/components/input';
import { calculateBMI } from '@/utils/body-mass-index';

function MetricForm() {
  const [bmi, setBmi] = useState(NaN);

  const { register, control } = useForm({
    height: '',
    weight: ''
  });

  const [height, weight] = useWatch({
    control,
    name: ['height', 'weight'],
  }).map(parseFloat);

  useEffect(() => {
    if ([height, weight].some(isNaN)) {
      setBmi(NaN);
    } else {
      setBmi(calculateBMI(height, weight));
    }
  }, [height, weight]);

  return (
    <div className="flex flex-col gap-y-6 animate-fade-in">
      <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="col-span-1 flex flex-col gap-y-2">
          <label htmlFor="height" className="text-body-s font-normal leading-body text-dark-electric-blue">Height</label>
          <Input id="height" unit="cm" register={register} />
        </div>
        <div className="col-span-1 flex flex-col gap-y-2">
          <label htmlFor="weight" className="text-body-s font-normal leading-body text-dark-electric-blue">Weight</label>
          <Input id="weight" unit="kg" register={register} />
        </div>
      </form>
      <BMIDisplay bmi={bmi} height={height} />
    </div>
  )
};

export default MetricForm;
