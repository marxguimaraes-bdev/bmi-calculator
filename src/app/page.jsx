import Image from "next/image";
import Calculator from "@/app/components/calculator";
import Card from "@/components/card";
import SmallCard from "@/components/small-card";

export default function IndexPage() {
  return (
    <main className='flex flex-col font-custom min-h-screen items-center bg-pure-white gap-y-10 pb-10'>
      <section title="Body Mass Index Calculator" className="flex flex-col w-full lg:overflow-visible lg:flex-row lg:px-6">
        <div className="flex flex-col items-center gap-y-[24px] md:gap-y-[40px] lg:gap-y-[127px] text-center rounded-b-heading p-6 min-h-[40rem] bg-gradient-linear lg:py-[4.47625rem] md:px-22 lg:pl-[7.25rem] lg:pr-[18.625rem] lg:max-w-[61.125rem] lg:h-[46.0625rem] lg:items-start lg:text-left">
          <Image src="/images/logo.svg" width={40} height={40} alt="Company logo" className="lg:w-[4rem] lg:h-[4rem]" />
          <div className="flex flex-col gap-y-6 lg:mt-12 lg:gap-y-[35px]">
            <h1 className="text-gunmetal text-heading-l leading-heading font-semibold md:px-[8rem] lg:pl-0 lg:pr-12 lg:text-heading-xl">Body Mass Index Calculator</h1>
            <div className="text-dark-electric-blue leading-body lg:pr-[6.1875rem]">Better understand your weight in relation to your height using our body mass index (BM) calculator. While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and well-being.</div>
          </div>
        </div>
        <Calculator  />
      </section>
      <section title="What your BMI result means" className="flex flex-col mx-6 lg:gap-y-10 md:mx-10 lg:mx-[8.75rem]">
        <div className="flex flex-col justify-around gap-y-10 md:flex-row md:gap-x-[4rem] lg:gap-x-[8.75rem] md:-ml-[12%] lg:ml-0">
          <Image src="/images/image-man-eating.webp" alt="Man eating sushi" width={375} height={352} className="lg:w-[35.25rem] lg:h-[33.3125rem]" />
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
      <section title="Limitations of BMI" className="flex flex-col mx-6 gap-y-14 md:mx-10 lg:mx-[8.75rem]">
        <div className="flex flex-col text-center gap-y-10 md:flex-row md:gap-x-[4rem] lg:gap-x-[8.75rem] lg:grid lg:grid-cols-2">
          <div className="flex flex-col gap-y-8 lg:text-start">
            <h1 className="text-heading text-gunmetal leading-heading font-semibold leading-heading-s lg:text-heading-l">Limitations of BMI</h1>
            <div className="text-dark-electric-blue leading body">Although BMI is often a practical indicator of healthy weight, it is not suited for every person. Specific groups should carefully consider their BMI outcomes, and in certain cases, the measurement may not be beneficial to use.</div>
            <Image src="/images/pattern-curved-line-right.svg" alt="Line curved to the right" width={94} height={122} className="hidden self-start lg:flex lg:self-center" />
          </div>
        </div>
        <div className="grid gap-y-5 md:grid-cols-4 md:gap-x-5 lg:grid-cols-6 lg:gap-10 lg:-mt-[18rem]">
          <SmallCard icon="/images/icon-gender.svg" alt="Mars and venus icon" title="Gender" className="md:col-span-2 lg:col-start-4 lg:ml-[5rem] lg:-mr-[5rem]">
            The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI.
          </SmallCard>
          <SmallCard icon="/images/icon-age.svg" alt="Cake icon" title="Age" className="md:col-span-2 lg:col-start-3">
            In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.
          </SmallCard>
          <SmallCard icon="/images/icon-muscle.svg" alt="Biceps icon" title="Muscle" className="md:col-span-2 lg:col-start-5">
            BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat.
          </SmallCard>
          <SmallCard icon="/images/icon-pregnancy.svg" alt="Baby icon" title="Pregnancy" className="md:col-span-2 lg:col-start-2">
            Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child.
          </SmallCard>
          <SmallCard icon="/images/icon-race.svg" alt="Person icon" title="Race" className="md:col-span-2 md:col-start-2 lg:col-start-4">
            Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse.
          </SmallCard>
        </div>
      </section>
    </main>
  );
};
