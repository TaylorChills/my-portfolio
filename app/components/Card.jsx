import Image from 'next/image';
import me from '../../public/me.jpg';

export default function Card({ props }) {
  return (
    <div className='py-4'>
      <Image src={me} alt='em' className='w-full h-48 object-cover' />
      <h3 className='text-2xl pt-4'>{props.title}</h3>
      <div className='flex items-center pt-4'>
        <div className='py-0.5 px-2.5 mr-4 rounded-2xl bg-red-400'>
          {props.year}
        </div>
      </div>
      <p className='pt-4'>{props.body}</p>
    </div>
  );
}
