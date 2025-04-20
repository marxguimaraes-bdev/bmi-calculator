import Image from "next/image";
import Calculator from "@/app/components/calculator";
import Card from "@/components/card";
import SmallCard from "@/components/small-card";

export default function IndexPage() {
  return (
    <div class="bg-pure-white">
      <main className='flex flex-col font-custom items-center bg-pure-white gap-y-10 xl:max-w-[90rem] xl:mx-auto'>
        <section title="Body Mass Index Calculator" className="flex flex-col w-full xl:overflow-visible xl:flex-row xl:px-6">
          <div className="flex flex-col items-center gap-y-[1.5rem] sm:gap-y-[2.5rem] xl:gap-y-[7.9375rem] text-center rounded-b-heading p-6 min-h-[40rem] bg-gradient-linear xl:py-[4.47625rem] sm:px-22 xl:pl-[7.25rem] xl:pr-[18.625rem] xl:max-w-[61.125rem] xl:h-[46.0625rem] xl:items-start xl:text-left">
            <Image src="/images/logo.svg" width={40} height={40} alt="Company logo" className="xl:w-[4rem] xl:h-[4rem]" />
            <div className="flex flex-col gap-y-6 xl:mt-12 xl:gap-y-[2.1875rem]">
              <h1 className="text-gunmetal text-heading-l leading-heading font-semibold sm:px-[8rem] xl:pl-0 xl:pr-12 xl:text-heading-xl">Body Mass Index Calculator</h1>
              <div className="text-dark-electric-blue leading-body xl:pr-[6.1875rem]">Better understand your weight in relation to your height using our body mass index (BM) calculator. While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and well-being.</div>
            </div>
          </div>
          <Calculator />
        </section>
        <section title="What your BMI result means" className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 sm:mx-[2.6875rem] xl:mx-[8.75rem] gap-y-8 xl:gap-y-[2.1875rem] xl:mt-[1.5625rem]">
          <Image src="/images/image-man-eating.webp" alt="Man eating sushi" width={564} height={533} className="mb-4 sm:mb-0 sm:row-span-3 sm:-ml-[9.9375rem] xl:ml-0 sm:min-w-[27.1875rem] xl:w-[35.25rem] xl:h-[33.3125rem] xl:self-end" />
          <Image src="/images/pattern-curved-line-left.svg" alt="Line curved to the left" width={85} height={200} className="hidden xl:flex justify-self-end self-start absolute xl:mr-[1.6875rem] xl:-mt-[3.25rem]" />
          <h1 className="px-6 sm:px-0 sm:mt-[2.1875rem] xl:mt-[11.5rem] xl:w-[29.0625rem] xl:justify-self-end text-heading text-gunmetal leading-heading font-semibold leading-heading-s xl:text-heading-l xl:tracking-tighter">What your BMI result means</h1>
          <div className="px-6 sm:px-0 xl:w-[29.0625rem] xl:justify-self-end text-dark-electric-blue text-body-m leading-body">
            A BMI range of 18.5 to 24.9 is considered a 'healthy weight.' Maintaining a healthy weight may lower your chances of experiencing health issues later on, such as obesity and type 2 diabetes. Aim for a nutritious diet with reduced fat and sugar content, incorporating ample fruits and vegetables. Additionally, strive for regular physical activity, ideally about 30 minutes daily for five days a week.
          </div>
        </section>
        <section title="health tips" className={`
          grid gap-y-10 gap-x-6 xl:grid-cols-3 bg-gradient-linear
          my-[72px] py-[56px] pl-[19px] pr-[29px]
          sm:my-24 sm:py-[60px] sm:pl-[39px] sm:pr-[43px]
          xl:mx-6 xl:px-[116px] xl:pt-[72px] xl:pb-[96px] xl:rounded-[35px]
        `}>
          <Card icon="/images/icon-eating.svg" alt="Food icon" title="Healthy eating">
            Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.
          </Card>
          <Card icon="/images/icon-exercise.svg" alt="Dumbell icon" title="Regular exercise">
            Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.
          </Card>
          <Card icon="/images/icon-sleep.svg" alt="Moon icon" title="Adequate sleep">
            Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.
          </Card>
        </section>
        <section title="Limitations of BMI" className={`
          grid gap-y-4 grid-cols-1 sm:grid-cols-2 sm:gap-x-5 xl:grid-cols-3 xl:gap-6 w-full
          pt-8 pb-24 pl-[19px] pr-[29px]
          sm:pt-14 sm:pl-[39px] sm:pr-[43px]
          xl:pt-6 xl:pb-[120px] xl:pr-0 xl:pl-0
        `}>
          <div className="flex flex-col text-center xl:text-left gap-y-8 pb-10 sm:col-span-2 xl:max-w-[564px] xl:ml-[140px]">
            <h1 className="text-heading text-gunmetal leading-heading font-semibold leading-heading-s xl:text-heading-l">Limitations of BMI</h1>
            <div className="text-dark-electric-blue leading body">Although BMI is often a practical indicator of healthy weight, it is not suited for every person. Specific groups should carefully consider their BMI outcomes, and in certain cases, the measurement may not be beneficial to use.</div>
          </div>
          <Image src="/images/pattern-curved-line-right.svg" alt="Line curved to the right" width={94} height={122} className="hidden xl:block absolute col-start-1 justify-self-start ml-[305px] mt-[251px]" />
          <SmallCard icon="/images/icon-gender.svg" alt="Mars and venus icon" title="Gender" className="xl:col-start-3 xl:mb-[12px] xl:justify-self-end xl:mr-[239px]">
            The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI.
          </SmallCard>
          <SmallCard icon="/images/icon-age.svg" alt="Cake icon" title="Age" className="xl:col-start-1 xl:justify-self-start xl:ml-[538px]">
            In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.
          </SmallCard>
          <SmallCard icon="/images/icon-muscle.svg" alt="Biceps icon" title="Muscle" className="xl:col-start-3 xl:justify-self-end xl:mr-[140px]">
            BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat.
          </SmallCard>
          <SmallCard icon="/images/icon-pregnancy.svg" alt="Baby icon" title="Pregnancy" className="xl:col-start-1 xl:justify-self-start xl:ml-[339px]">
            Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child.
          </SmallCard>
          <SmallCard icon="/images/icon-race.svg" alt="Person icon" title="Race" className="sm:!w-[365px] sm:ml-[160.5px] sm:col-start-1 xl:col-start-3 xl:justify-self-end xl:mr-[339px]">
            Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse.
          </SmallCard>
        </section>
      </main >
    </div >
  );
};
