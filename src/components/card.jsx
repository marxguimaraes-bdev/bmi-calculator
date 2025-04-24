import Image from "next/image";

function Card({ icon, alt, title, children }) {
  return (
    <div className="flex flex-col gap-y-8 sm:gap-x-10 xl:gap-y-[2.8125rem] sm:flex-row xl:flex-col">
      {icon && <Image src={icon} alt={alt} width={64} height={64} />}
      <div className="flex flex-col gap-y-6">
        <h2 className="text-heading-m text-gunmetal leading-heading-m font-semibold sm:col-span-4">{title}</h2>
        <div className="text-body text-dark-electric-blue">{children}</div>
      </div>
    </div>
  )
}

export default Card;
