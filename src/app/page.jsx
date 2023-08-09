import Image from "next/image";
import Calculator from "@/app/components/calculator";
import Card from "@/components/card";

export default function IndexPage() {
  return (
    <div className='flex flex-col font-custom min-h-screen items-center bg-pure-white gap-y-10'>
      <section className="flex flex-col w-full lg:flex-row">
        <main className="flex flex-col items-center gap-y-6 text-center rounded-b-heading p-6 min-h-[40rem] bg-gradient-to-r from-[#D6E6FE] to-[#D6FCFE] lg:py-24 md:px-22 lg:pl-24 lg:pr-[26rem] lg:max-w-[61rem] lg:h-[46rem] lg:items-start lg:text-left">
          <Image src="/images/logo.svg" width={40} height={40} alt="Company logo" className="lg:w-[64px] lg:h-[64px]" />
          <div className="flex flex-col gap-y-6 lg:mt-12 lg:gap-y-9">
            <h1 className="text-gunmetal text-heading-l leading-heading font-semibold md:px-[8rem] lg:px-0 lg:text-heading-xl">Body Mass Index Calculator</h1>
            <div className="text-dark-electric-blue leading-body">Better understand your weight in relation to your height using our body mass index (BM) calculator. While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and well-being.</div>
          </div>
        </main>
        <Calculator  />
      </section>
      <section className="flex flex-col mx-6 lg:gap-y-10 md:mx-10 lg:mx-[8.75rem]">
        <div className="flex flex-col justify-around gap-y-10 md:flex-row md:gap-x-[4rem] lg:gap-x-[8.75rem] md:-ml-[12%] lg:ml-0">
          <Image src="/images/image-man-eating.webp" alt="Man eating sushi" width={375} height={352} className="lg:w-[564px] lg:h-[533px]" />
          <Card></Card>
          <div className="flex flex-col gap-y-8">
            <Image src="/images/pattern-curved-line-left.svg" alt="Line curved to the left" width={85} height={200} className="hidden self-end lg:flex" />
            <h1 className="text-heading text-gunmetal leading-heading font-semibold leading-heading-s lg:text-heading-l">What your BMI result means</h1>
            <div className="text-dark-electric-blue leading body">A BMI range of 18.5 to 24.9 is considered a 'healthy weight.' Maintaining a healthy weight may lower your chances of experiencing health issues later on, such as obesity and type 2 diabetes. Aim for a nutritious diet with reduced fat and sugar content, incorporating ample fruits and vegetables. Additionally, strive for regular physical activity, ideally about 30 minutes daily for five days a week.</div>
          </div>
        </div>
        <div className="grid gap-y-10 gap-x-6 my-10 lg:grid-cols-3">
          <Card icon="/images/icon-eating.svg" alt="Food icon" title="Healthy eating">
            Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.
          </Card>
          <Card icon="/images/icon-exercise.svg" alt="Dumbell icon" title="Regular exercise">
            Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.
          </Card>
          <Card icon="/images/icon-sleep.svg" alt="Moon icon" title="Adequate sleep">
            Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.
          </Card>
        </div>
      </section>
    </div>
  );
};
