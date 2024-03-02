import Image from 'next/image';
import me from '../public/me.jpg';

export default function Home() {
  return (
    <main className='text-green-300 text-xl'>
      <div className='grid md:grid-cols-3'>
        <div className='md:col-span-1 md:flex md:justify-end border-r-2 pr-4'>
          <nav className='text-right'>
            <div className='flex justify-between items-center'>
              <h1 className='py-4'>
                <a href='/' className='text-green-50 hover:text-green-300'>
                  Food Ninja
                </a>
              </h1>
              <div
                className='bg-primary w-6 h-6 rounded-md cursor-pointer md:hidden'
                id='burger'
              ></div>
            </div>
            <ul className='hidden text-sm mt-6 md:block' id='menu'>
              <li className='hover:text-green-500'>
                <a href='#'>
                  <span>Home</span>
                </a>
              </li>
              <li className='hover:text-green-500'>
                <a href='#'>
                  <span>About</span>
                </a>
              </li>
              <li className='hover:text-green-500'>
                <a href='#'>
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <main className='px-16 py-16 md:col-span-2'>
          <div className='flex justify-center md:justify-end'>
            <a href='#' className='test text-primary'>
              Log in
            </a>
            <a href='#' className='test text-primary ml-2'>
              Sign up
            </a>
          </div>

          <header>
            <h2 className='font-text-6xl font-semibold'>Recipes</h2>
            <h3>For Ninjas</h3>
          </header>

          <div>
            <h4 className='font-bold mt-12 pb-2 border-b border-yellow-800'>
              Latest Recipes
            </h4>

            <div className='mt-8 grid lg:grid-cols-3 gap-10'>
              <div className='card'>
                <Image
                  src={me}
                  alt='me'
                  className='w-full h-32 sm:h-48 object-cover'
                />
                <div className='m-4'>
                  <span className='font-bold'>5 Bean Chili Stew</span>
                  <span className='block text-grey-300 text-sm'>
                    Recipe by Mario
                  </span>
                </div>
                <div className='badge'>
                  <span>25 mins</span>
                </div>
              </div>
              <div className='card'>
                <Image
                  src={me}
                  alt='me'
                  className='w-full h-32 sm:h-48 object-cover'
                />
                <div className='m-4'>
                  <span className='font-bold'>5 Bean Chili Stew</span>
                  <span className='block text-grey-300 text-sm'>
                    Recipe by Mario
                  </span>
                </div>
                <div className='badge'>
                  <span>25 mins</span>
                </div>
              </div>
              <div className='card'>
                <Image
                  src={me}
                  alt='me'
                  className='w-full h-32 sm:h-48 object-cover'
                />
                <div className='m-4'>
                  <span className='font-bold'>5 Bean Chili Stew</span>
                  <span className='block text-grey-300 text-sm'>
                    Recipe by Mario
                  </span>
                </div>
                <div className='badge'>
                  <span>25 mins</span>
                </div>
              </div>
            </div>

            <h4 className='font-bold mt-12'>Most Popular</h4>
            <div className='mt-12 pb-2'></div>
          </div>

          <div className='flex justify-center'>
            <div className='test text-primary'>Load more</div>
          </div>
        </main>
      </div>
    </main>
  );
}
