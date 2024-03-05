import Image from 'next/image';
import Link from 'next/link';
import me from '../../public/images/me.jpg';
import apps from '../../_data/db.json';
import Card from '../components/Card';
import github from '../../public/icons/github.svg';
import instagram from '../../public/icons/instagram.svg';
import linkedin from '../../public/icons/linkedin.svg';

export default function Home() {
  const data = apps;

  const iconSize = 50;

  return (
    <main className='pt-8'>
      {/* Introduction */}
      <div
        id='home'
        className='my-4 pb-8 sm:grid sm:grid-cols-2 border-b-2 border-gray-700'
      >
        <div className='flex justify-center pb-4'>
          <Image
            src={me}
            alt='me'
            className='rounded-full justify-center w-56 h-56 sm:w-64 sm:h-64'
          />
        </div>
        <div>
          <h1 className='text-3xl font-bold pb-4 text-center sm:text-left'>
            Hi, I&apos;m Taylor
          </h1>
          <p className='pb-4'>
            A full stack developer, skilled in turning ideas into fully
            functional web applications. Explore my portfolio to see how I blend
            creativity with technology
          </p>
          <div className='flex justify-center sm:justify-start'>
            <a
              target='_blank'
              href='https://violet-eugenia-34.tiiny.site'
              className='bg-orange-600 p-4 font-medium text-lg rounded-md'
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
      {/* Work display */}
      <div id='portfolio' className='my-4 pb-8 border-b-2 border-gray-700'>
        <h2 className='text-2xl text-center py-4'>Featured Works</h2>
        {data.map((app) => {
          return <Card key={app.id} props={app} />;
        })}
      </div>
      {/* About */}
      <div id='contact' className='flex justify-center'>
        <div className='pb-4 md:w-1/2'>
          <h3 className='text-3xl py-4'>Lets work together</h3>
          <p>
            Please contact me directly by email or through any of the provided
            social media links. I look forward to hearing from you and
            discussing how I can bring your project to life!
          </p>
          <div className='flex flex-col items-center py-8 '>
            <p className='text-lg pb-6'>chilestaylor@gmail.com</p>
            <div className='flex justify-center gap-6'>
              <Link href={'https://www.linkedin.com/in/taylor-chiles/'}>
                <Image
                  src={linkedin}
                  alt='linkedin-link'
                  width={iconSize}
                  height={iconSize}
                  className='invert'
                />
              </Link>
              <Link href={'https://github.com/TaylorChills'}>
                <Image
                  src={github}
                  alt='github-link'
                  width={iconSize}
                  height={iconSize}
                  className='invert'
                />
              </Link>
              <Link href={'https://www.instagram.com/tchills_ischillin/'}>
                <Image
                  src={instagram}
                  alt='instagram-link'
                  width={iconSize}
                  height={iconSize}
                  className='invert'
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
