import Link from "next/link"

export default function Product(){
    return (
        <div>
        <div className=' text-[#5956E9] font-bold text-4xl p-8 flex items-center justify-center'>Produk</div>
      <div class=" min-[1000px]:px-48 gap-4 grid grid-cols-2 md:grid-cols-3 md:gap-20">
  <div class="bg-white max-w-md rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer flex flex-col justify-center items-center">
    <div>
      <img src="https://cdn.discordapp.com/attachments/1096660164439982181/1096722466656747581/1.png" alt="" />
    </div>
    <div class="bg-white flex flex-col items-center justify-center ">
    <h3 class="text-xl font-semibold text-black text-center mt-6 mb-4 md:p-4  min-[551px]:text-2xl md:text-3xl ">Medikasa Kasa Hidrophile</h3>  
    </div>
  </div>
  <div class="bg-white max-w-md  rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer flex flex-col justify-center items-center">
    <div className='align-top'>
      <img src="https://cdn.discordapp.com/attachments/1096660164439982181/1096722466891632710/2.png" alt="" />
    </div>
    <div class=" bg-white flex flex-col items-center justify-center">
    <h3 class="text-xl font-semibold text-black text-center mb-4 md:p-4 min-[551px]:text-2xl md:text-3xl">GEA Foley Catheter</h3>  
    </div>
  </div>
  <div class="bg-white max-w-md  rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer flex flex-col justify-center items-center">
    <div>
      <img src="https://media.discordapp.net/attachments/1096660164439982181/1096972274122362980/Mask_Group.png" alt="" />
    </div>
    <div class=" bg-white flex flex-col items-center justify-center">
    <h3 class="text-xl font-semibold text-black text-center mb-4 md:p-4 min-[551px]:text-2xl md:text-3xl">EasyTouch GCU</h3>  
    </div>
  </div>
  <div class="bg-white max-w-md  rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer flex flex-col justify-center items-center">
    <div>
      <img src="https://cdn.discordapp.com/attachments/1096660164439982181/1096722461741031626/4.png" alt="" />
    </div>
    <div class=" bg-white flex flex-col items-center justify-center">
    <h3 class="text-xl font-semibold text-black text-center mb-4 md:p-4 min-[551px]:text-2xl md:text-3xl">NESCO Uric Acid Test Strips</h3>  
    </div>
  </div>
  <div class="bg-white max-w-md rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer flex flex-col justify-center items-center">
    <div>
      <img src="https://cdn.discordapp.com/attachments/1096660164439982181/1096722466010824785/5.png" alt="" />
    </div>
    <div class=" bg-white flex flex-col items-center justify-center">
    <h3 class="text-xl font-semibold text-black text-center mb-4 md:p-4 min-[551px]:text-2xl md:text-3xl">Golden Glove Latex</h3>  
    </div>
  </div>
  <div class="bg-white max-w-md rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer flex flex-col justify-center items-center">
    <div>
      <img src="https://cdn.discordapp.com/attachments/1096660164439982181/1096722466371538995/6.png" alt="" />
    </div>
    <div class=" bg-white flex flex-col items-center justify-center">
    <h3 class="text-xl font-semibold text-black text-center mb-4 md:p-4 min-[551px]:text-2xl md:text-3xl">Cosmo Med I.V. Cannula</h3>  
    </div>
  </div>
  <div class="bg-white max-w-md rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer flex flex-col justify-center items-center">
    <div>
      <img src="https://cdn.discordapp.com/attachments/1096660164439982181/1096976081300496505/puremed.png" alt="" />
    </div>
    <div class="bg-white flex flex-col items-center justify-center ">
    <h3 class="text-xl font-semibold text-black text-center mt-6 mb-4 md:p-4  min-[551px]:text-2xl md:text-3xl ">Puremed Lampu Terapi Infrared</h3>  
    </div>
  </div>
  <div class="bg-white max-w-md  rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer flex flex-col justify-center items-center">
    <div className='align-top'>
      <img src="https://cdn.discordapp.com/attachments/1096660164439982181/1096976079928950897/tsilk.png" alt="" />
    </div>
    <div class=" bg-white flex flex-col items-center justify-center">
    <h3 class="text-xl font-semibold text-black text-center mb-4 md:p-4 min-[551px]:text-2xl md:text-3xl">T-SILK Jarum Jahit Ukuran  3-0</h3>  
    </div>
  </div>
  <div class="bg-white max-w-md  rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer flex flex-col justify-center items-center">
    <div>
      <img src="https://cdn.discordapp.com/attachments/1096660164439982181/1096976080742654052/lancingpen.png" alt="" />
    </div>
    <div class=" bg-white flex flex-col items-center justify-center">
    <h3 class="text-xl font-semibold text-black text-center mb-4 md:p-4 min-[551px]:text-2xl md:text-3xl">Lancing Pen Nesco</h3>  
    </div>
  </div>
  <div class="bg-white max-w-md  rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer flex flex-col justify-center items-center">
    <div>
      <img src="https://cdn.discordapp.com/attachments/1096660164439982181/1096976080155451493/xpressplast.png" alt="" />
    </div>
    <div class=" bg-white flex flex-col items-center justify-center">
    <h3 class="text-xl font-semibold text-black text-center mb-4 md:p-4 min-[551px]:text-2xl md:text-3xl">Xpresplast Plester Rol Kain 5 cm x 4,5 m</h3>  
    </div>
  </div>
  <div class="bg-white max-w-md rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer flex flex-col justify-center items-center">
    <div>
      <img src="https://cdn.discordapp.com/attachments/1096660164439982181/1096976080461627472/accuchek.png" alt="" />
    </div>
    <div class=" bg-white flex flex-col items-center justify-center">
    <h3 class="text-xl font-semibold text-black text-center mb-4 md:p-4 min-[551px]:text-2xl md:text-3xl">Accu-Chek Instant Test Strips</h3>  
    </div>
  </div>
  <div class="bg-white max-w-md rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer flex flex-col justify-center items-center">
    <div>
      <img src="https://cdn.discordapp.com/attachments/1096660164439982181/1096976081011097680/molex.png" alt="" />
    </div>
    <div class=" bg-white flex flex-col items-center justify-center">
    <h3 class="text-xl font-semibold text-black text-center mb-4 md:p-4 min-[551px]:text-2xl md:text-3xl">Molex Alkohol 70%</h3>  
    </div>
  </div>
    </div>
    


    </div>
    )
}