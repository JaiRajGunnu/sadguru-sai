import { Button } from '@/components/ui/button'
import Link from 'next/link'
import MyCarousel from './MyCarousel';
import { Tv } from 'lucide-react';


const Payment = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-8 ">
      <div className='text-[white] font-nst text-2xl font-semibold text-center'>
      
       <p className='m-1'>సబ్కా మాలిక్ ఏక్</p>
       <p>మానవ సేవే.. మాధవ సేవ!</p>
       </div>
       
        <MyCarousel />
        <Button variant="link" className="bg-[#101115] rounded-xl text-white text-lg p-5 mt-[-5%] font-hso no-underline hover:no-underline hover:px-5 flex flex-row gap-2 text-center font-semibold leading-5">
        <Tv size={18} className='text-center mt-[-3%]'/>
        <Link href={"./payment"}>  Get Episodes</Link></Button>
    </div>
  )
}

export default Payment
