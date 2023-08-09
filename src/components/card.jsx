import Image from "next/image";

function Card({ icon, alt, title, children }) {
  return (
    <div className="flex flex-col gap-y-4 md:flex-row lg:flex-col">
      { icon && <Image src={icon} alt={alt} width={64} height={64} />}
      <div className="flex flex-col gap-y-6 md:mx-10 md:gap-y-8 lg:mx-0">
        <h2 className="text-heading-m text-gunmetal leading-heading-m font-semibold md:col-span-4">{title}</h2>
        <div className="text-body text-dark-electric-blue">{children}</div>
      </div>
    </div>
  )
}

export default Card;
