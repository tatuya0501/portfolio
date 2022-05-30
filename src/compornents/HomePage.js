import React from 'react';
import 'animate.css';

function HomePage() {
  return (
    <div className='HomeP'>
    <div className='animate__animated animate__fadeIn'>
    
    <div id='Welcome' className='flex flex-col justify-center items-center py-20 md:py-30'>
      
      <div className='mockup-window bg-slate-400 md:w-9/12 w-11/12 shadow-2xl max-w-5x1'>
        <div className='name'>
        <p>長田龍哉</p>
        </div>
                <div className='flex flex-col justify-center items-center gap-4 bg-slate-500 bg-opacity-90 py-10'>
                <div className='relative md:w-50 md:h-50 w-40 h-50'>

                  <img className='mask mask-squircle' id='icon' src="./img7.png" />
                 </div>
              <div className='md:block hidden mockup-code bg-opacity-80 border-base-content border-2 border-opacity-10 w-4/6'>
                 <pre data-prefix="$"><code>ポートフォリオサイトです！</code></pre>
             </div>
          <div className='md:hidden text-white font-mono'>ポートフォリオサイトです！</div>
           </div>
        </div>
      </div>
    </div>
   </div>
   
    
  )
}

export default HomePage;
