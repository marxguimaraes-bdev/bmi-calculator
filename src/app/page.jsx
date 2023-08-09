import Image from "next/image";
import Calculator from "@/app/components/calculator";

export default function IndexPage() {
  return (
    <section className="flex flex-col w-full lg:flex-row">
      <main className="flex flex-col items-center gap-y-6 text-center font-custom rounded-b-heading p-6 min-h-[40rem] bg-gradient-to-r from-[#D6E6FE] to-[#D6FCFE] lg:py-24 md:px-22 lg:pl-24 lg:pr-[26rem] lg:max-w-[61rem] lg:h-[46rem] lg:items-start lg:text-left">
        <Image src="/images/logo.svg" width={40} height={40} alt="Company logo" className="lg:w-[64px] lg:h-[64px]" />
        <div className="flex flex-col gap-y-6 lg:mt-12 lg:gap-y-9">
          <h1 className="text-gunmetal text-heading-l leading-heading font-semibold md:px-[8rem] lg:px-0 lg:text-heading-xl">Body Mass Index Calculator</h1>
          <div className="text-dark-electric-blue leading-body">Better understand your weight in relation to your height using our body mass index (BM) calculator. While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and well-being.</div>
        </div>
      </main>
      <Calculator  />
    </section>
  )
}
