const Input = ({ unit, onChange, ...props }) => (
  <div className="flex items-center">
    <input onChange={onChange} className='w-full px-6 py-5 rounded-xl border border-borders bg-pure-white focus:outline-none' {...props}/>
    <span className="text-heading-m text-blue font-semibold -ml-12 md:-ml-16">{unit}</span>
  </div>
);

export default Input;
