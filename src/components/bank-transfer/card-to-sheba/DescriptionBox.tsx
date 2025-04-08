import { cn } from '@/lib/utils';
import Image from 'next/image';
import PersonIllustrator from '@public/illustrator-1.png';

export default function DescriptionBox() {
  return (
    <section
      className={cn('flex flex-col items-center justify-start gap-5 p-8')}
    >
      <div className={cn('w-full max-w-[417px] text-xl font-bold')}>
        کارت به شبا با سامانه استعلام نوین{' '}
      </div>
      <div
        className={cn(
          'text-custom-gray-300 w-full max-w-[417px] text-xl font-light',
        )}
      >
        وم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
        گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
        لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف
        بهبود وم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
        طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است، و برای شرایط فعلی .
      </div>

      <div>
        <Image src={PersonIllustrator} alt="image" width={300} height={300} />
      </div>
    </section>
  );
}
