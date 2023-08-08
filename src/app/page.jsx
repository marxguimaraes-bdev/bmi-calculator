import Image from "next/image";
import Calculator from "@/app/components/calculator";

export default function IndexPage() {
  return (
    <section className="flex flex-col w-full md:flex-row">
      <main className="flex flex-col items-center gap-y-6 text-center font-custom rounded-b-heading p-8 md:py-24 md:pl-24 md:pr-96 min-h-[40rem] bg-gradient-to-r from-[#D6E6FE] to-[#D6FCFE] md:max-w-[61rem] md:min-h-[48rem] md:items-start md:text-left">
        <Image src="/images/logo.svg" width={40} height={40} alt="Company logo" className="md:w-[64px] md:h-[64px]" />
        <h1 className="text-gunmetal text-heading-l leading-heading font-semibold md:text-heading-xl">Body Mass Index Calculator</h1>
        <div className="text-dark-electric-blue leading-body">Better understand your weight in relation to your height using our body mass index (BM) calculator. While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and well-being.</div>
      </main>
      <Calculator  />
    </section>
  )
}
