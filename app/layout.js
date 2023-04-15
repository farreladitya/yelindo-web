import './globals.css'

export const metadata = {
    
  title: 'Yelindo Surya Jaya',
  description: 'Yelindo Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">  
    

    <div>
    <nav class="w-full bg-gray-50 flex items-center fixed top-0 ">
        <div class=" max-w-screen-xl px-6 py-3 mx-auto">
            <div class="flex items-center">
                <ul class="flex flex-row font-semibold mt-0 mr-6 space-x-8 text-sm md:text-lg">
                    <li>
                        <a href="#" class="text-gray-400  hover:underline" aria-current="page">Beranda</a>
                    </li>
                    <li>
                        <a href="#" class="text-gray-400  hover:underline">Produk</a>
                    </li>
                    <li>
                        <a href="#" class="text-gray-400  hover:underline">Tentang Kami</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
        </div>
      <body className='py-10'>
        {children}
      </body>
      
<footer class=" bg-gray-200 dark:bg-gray-900 fix bottom-0">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 flex items-center md:mb-0">
              <a href="https://yelindo.id/" className="flex items-center">
                  <img src="https://media.discordapp.net/attachments/763335756403703839/1096388080556064778/logo_yel_baru.png?width=494&height=468" class=" h-16 md:h-28 mr-3" alt="Yelindo Logo" />
                  <span class="self-center text-3xl md:text-5xl font-bold whitespace-nowrap dark:text-white">PT. YELINDO <br></br> SURYA JAYA </span>
              </a>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6">
              <div>
                  <h2 class="mb-6 text-xl font-bold text-gray-900  dark:text-white">Halaman</h2>
                  <ul class="text-gray-600 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="#header" class="hover:underline">Beranda</a>
                      </li>
                      <li class="mb-4">
                          <a href="#" class="hover:underline">Produk</a>
                      </li>
                      <li class="mb-4">
                          <a href="#tentangkami" class="hover:underline">Tentang Kami</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-xl font-bold text-gray-900  dark:text-white">Temukan Kami di Sosial Media!</h2>
                  <ul class="flex text-gray-600 dark:text-gray-400 font-medium">
                      <li class="mr-3 flex flex-row">
                      <a href="#" class="text-gray-900 dark:hover:text-white">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" /></svg>
                  <span class="sr-only">Instagram page</span>
              </a>
                      </li>
                      <li>
                      <a href="#" class="text-gray-900 dark:hover:text-white">
                      <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-whatsapp w-5 h-5" viewBox="0 0 16 16"> <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/> </svg>                  <span class="sr-only">Instagram page</span>
              </a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr class="my-6 border-black sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div class="flex items-center justify-center">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400 md:text-lg">© 2023 <a href="https://flowbite.com/" class="hover:underline">Yelindo Web Development</a>.
          </span>
      </div>
    </div>
</footer>

    </html>
  )
}
