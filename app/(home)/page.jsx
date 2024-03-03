import Image from 'next/image';
import me from '../../public/me.jpg';
import apps from '../../_data/db.json';
import Card from '../components/Card';
import MessageForm from './MessageForm';

export default function Home() {
  const data = apps;

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
            Hi, I am John, Creative Technologist
          </h1>
          <p className='pb-4'>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <div className='flex justify-center sm:justify-start'>
            <a
              target='_blank'
              href='https://violet-eugenia-34.tiiny.site'
              className='bg-red-400 p-4 font-medium text-lg rounded-md'
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
      {/* Work display */}
      <div id='portfolio' className='my-4 pb-8 border-b-2 border-gray-700'>
        <h2 className='text-lg text-center py-4'>Featured Works</h2>
        {data.map((app) => {
          return <Card key={app.id} props={app} />;
        })}
      </div>
      {/* About */}
      <div id='contact' className='flex flex-col justify-between sm:flex-row'>
        <div className='my-4 pb-8 sm:w-1/2 sm:pr-6 md:w-1/3 md:pr-0'>
          <h3 className='text-3xl py-4'>Lets work together</h3>
          <p>
            This is a template Figma file, turned into code using Anima. Learn
            more at AnimaApp.com This is a template Figma file, turned into code
            using Anima. Learn more at AnimaApp.com
          </p>
        </div>
        <MessageForm />
      </div>
    </main>
  );
}
