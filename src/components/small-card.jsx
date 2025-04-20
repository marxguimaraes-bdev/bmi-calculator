import Image from "next/image";

function SmallCard({ icon, alt, title, children, className }) {
  return (
    <div className={`flex flex-col p-6 gap-y-4 rounded-2xl bg-pure-white drop-shadow-custom md:p-8 lg:flex-col w-full sm:w-[335.5px] xl:w-[22.8125rem] ${className}`}>
      <div className="flex flex-row gap-x-4 md:gap-y-8">
        {icon && <Image src={icon} alt={alt} width={32} height={32} />}
        <h2 className="text-heading-m text-gunmetal leading-heading-m font-semibold md:col-span-4">{title}</h2>
      </div>
      <div className="text-body text-dark-electric-blue">{children}</div>
    </div>
  );
}

export default SmallCard;
