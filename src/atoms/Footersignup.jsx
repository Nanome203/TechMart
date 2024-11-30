export default function Footersignup() {
    return (
        <div> <hr style={{ borderColor: 'black' }} />
        <div className='flex  flex-col items-center my-2'>
            <div className='font-bold text-xl'>See personalized recommendations</div>
            <a href='/signin' className='bg-[#FFAD33] text-white font-bold w-[152px] h-[24px] text-center rounded-2xl' >Sign in</a>
            <div>
              <a href='/login'>Don’t have an account? </a>
              <a href="/login" className='underline text-[#0071CE]'> Sign up.</a>
            </div>
        </div></div>
      
    );
  }
  