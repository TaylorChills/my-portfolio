import Image from 'next/image';
import Link from 'next/link';
import em from '../../public/em-app.png';
import reactIcon from '../../public/react.svg';
import nodeIcon from '../../public/nodejs.svg';
import tsIcon from '../../public/typescript.svg';
import sassIcon from '../../public/sass.svg';

export default function Card({ props }) {
  const stackIcon = 28;

  return (
    <div className='flex flex-col py-4 md:flex-row'>
      <Image src={em} alt='em' className='w-full h-48 object-cover' />
      <div className='pt-4 md:pt-0 md:pl-4'>
        <div className='flex justify-between pb-4'>
          <h3 className='text-xl'>{props.title}</h3>
          <a
            target='_blank'
            href='https://reader.app.excelmandarin.com/login'
            className='bg-orange-600 py-1 px-4 rounded-2xl'
          >
            View
          </a>
        </div>
        <div className='flex flex-row items-center pb-4'>
          <div className='flex flex-wrap gap-4 py-0.5 mr-4 rounded-2xl'>
            <div className='stack'>
              <Image
                src={reactIcon}
                alt='react-icon'
                width={stackIcon}
                height={stackIcon}
              />
              <p>React</p>
            </div>
            <div className='stack'>
              <Image
                src={tsIcon}
                alt='typescript-icon'
                width={stackIcon}
                height={stackIcon}
              />
              <p>Typescript</p>
            </div>
            <div className='stack'>
              <Image
                src={nodeIcon}
                alt='nodejs-icon'
                width={stackIcon}
                height={stackIcon}
              />
              <p>NodeJS</p>
            </div>
            <div className='stack'>
              <Image
                src={sassIcon}
                alt='sass-icon'
                width={stackIcon}
                height={stackIcon}
              />
              <p>Sass</p>
            </div>
          </div>
        </div>
        <p>{props.body}</p>
      </div>
    </div>
  );
}
