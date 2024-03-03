import Image from 'next/image';
import me from '../../public/me.jpg';

export default function Card({ props }) {
  return (
    <div className='flex flex-col py-4 md:flex-row'>
      <Image src={me} alt='em' className='w-full h-48 object-cover' />
      <div className='pt-4 md:pt-0 md:pl-4'>
        <h3 className='text-2xl pb-4'>{props.title}</h3>
        <div className='flex items-center pb-4'>
          <div className='py-0.5 px-2.5 mr-4 rounded-2xl bg-red-400'>
            {props.year}
          </div>
        </div>
        <p>{props.body}</p>
      </div>
    </div>
  );
}
