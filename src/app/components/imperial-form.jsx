import { useState, useEffect } from 'react';
import { useForm, useWatch } from 'react-hook-form';

import BMIDisplay from '@/app/components/bmi-display';
import Input from '@/components/input';

function ImperialForm() {
  const [bmi, setBmi] = useState(NaN);

  const { register, control } = useForm({
    heightFt: '',
    heightIn: '',
    weightSt: '',
    weightLbs: '',
  });

  const [heightFt, heightIn, weightSt, weightLbs] = useWatch({
    control,
    name: ['heightFt', 'heightIn', 'weightSt', 'weightLbs'],
  }).map(parseFloat);
  
  useEffect(() => {
    if ([heightFt, heightIn, weightSt, weightLbs].some(isNaN)) {
      setBmi(NaN);
    } else {
      const height = (heightFt * 12) + heightIn;
      const weight = (weightSt * 14) + weightLbs;

      setBmi((weight/(height ** 2)) * 703);
    }
  }, [heightFt, heightIn, weightSt, weightLbs]);

  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="grid grid-cols-2 gap-x-6 gap-y-2">
          <label htmlFor="heightFt" className="col-span-2 text-body-s font-normal leading-body text-dark-electric-blue">Height</label>
          <Input id="heightFt" unit="ft" register={register} />
          <Input id="heightIn" unit="in" register={register} />
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-2">
          <label htmlFor="weightSt" className="col-span-2 text-body-s font-normal leading-body text-dark-electric-blue">Weight</label>
          <Input id="weightSt" unit="st" register={register} />
          <Input id="weightLbs" unit="lbs" register={register} />
        </div>
      </div>
      <BMIDisplay bmi={bmi} />
    </>
  )
};

export default ImperialForm;
