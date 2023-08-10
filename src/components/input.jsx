const Input = ({ id, unit, onChange, register, ...props }) => (
  <div className="flex items-center">
    <input id={id} onChange={onChange} placeholder="0" className='font-custom text-heading-m w-full px-6 py-5 rounded-xl border border-borders bg-pure-white focus:outline-none' {...props} {...register(id)} />
    <span className="text-heading-m text-blue font-semibold -ml-12 md:-ml-16">{unit}</span>
  </div>
);

export default Input;
