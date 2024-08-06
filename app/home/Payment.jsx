import { Button } from '@/components/ui/button'
import Link from 'next/link'
import MyCarousel from './MyCarousel';
import { Tv } from 'lucide-react';


const Payment = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-5 md:mt-[0%] md:scale-1 lg:scale-[1.0]">
      <div className='text-[white] font-nst text-2xl font-semibold text-center gap-2 rounded-sm'>
      <p className='m-1'>సబ్కా మాలిక్ ఏక్</p>
      <p>మానవ సేవే.. మాధవ సేవ!</p>
      </div>
      
      <Button variant="link" className="bg-[#550679] w-[95%] rounded-xl text-white text-lg p-4 font-hso no-underline hover:no-underline py-4 hover:px-5 hover:py-5 leading-8 transition-all duration-300 delay-150 hover:bg-black hover:opacity-90">
      <Link href={"./payment"} className='flex flex-row'>
      <Tv size={22} className='text-center mr-2 mt-1'/>
        Get Episodes</Link></Button>
      
      <div className='p-1 w-[95%] lg:w-full'>
        <MyCarousel />
        </div>

      <p className="font-hso text-xl text-center md:text-[25px] lg:text-[25px] ">  Om Sai Ram ❤️🙏  </p>

    </div>
  )
}

export default Payment;
