import Image from "next/image";

export default function IndexPage() {
  return (
    <section className="flex h-full w-full">
      <main className="flex flex-col items-center gap-y-6 text-center font-custom rounded-b-custom-1 p-8 md:py-24 md:pl-24 md:pr-96 min-h-[640px] bg-gradient-to-r from-[#D6E6FE] to-[#D6FCFE] md:max-w-[978px] md:min-h-[737px] md:items-start md:text-left">
        <Image src="/images/logo.svg" width={64} height={64} alt="Company logo" />
        <h1 className="text-gunmetal text-heading leading-heading font-semibold md:text-heading-md">Body Mass Index Calculator</h1>
        <div className="text-dark-electric-blue leading-body">Better understand your weight in relation to your height using our body mass index (BM) calculator. While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and well-being.</div>
      </main>
    </section>
  )
}
