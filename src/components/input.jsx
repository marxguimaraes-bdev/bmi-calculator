const Input = ({ id, unit, onChange, register, ...props }) => (
  <div className="flex items-center">
    <input id={id} onChange={onChange} placeholder="0" className='font-custom font-semibold text-heading-m leading-heading w-full px-6 py-5 rounded-xl border border-borders bg-pure-white transition-colors duration-200 focus:border-blue focus:outline-none' {...props} {...register(id)} />
    <span className="text-heading-m text-blue font-semibold -ml-12 md:-ml-16">{unit}</span>
  </div>
);

export default Input;
