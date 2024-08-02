import { Button } from '@/components/ui/button'
import Link from 'next/link'
import MyCarousel from './MyCarousel';
import { Tv } from 'lucide-react';


const Payment = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-3 ">
      
      <div className='text-[white] font-nst text-2xl font-semibold text-center gap-2 rounded-sm'>
      <p className='m-1'>సబ్కా మాలిక్ ఏక్</p>
      <p>మానవ సేవే.. మాధవ సేవ!</p>
      </div>

      <Button variant="link" className="bg-[#101115] w-full rounded-xl text-white text-lg p-6 font-hso no-underline hover:no-underline hover:px-5 flex flex-row gap-2 text-center font-semibold tracking-widest leading-5">
      <Tv size={18} className='text-center mt-[-3%] ml-[-2%]'/>
      <Link href={"./payment"}>     Get Episodes</Link></Button>
      
      <div className='p-1'>
        <MyCarousel />
        </div>

      <p className="font-hso text-2xl  ml-10 text-center md:text-[25px] ld:text-[25px] lg:ml-20  lg:w-full lg:text-left ">  Om Sai Ram  ❤️🙏  </p>

    </div>
  )
}

export default Payment
