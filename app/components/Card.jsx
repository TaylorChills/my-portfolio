import Image from 'next/image';

import StackIcon from './StackIcon';

export default function Card({ props }) {
  return (
    <div className='flex flex-col py-4 md:flex-row'>
      <Image
        src={props.image}
        alt={props.imageAlt}
        width={500}
        height={501}
        className='w-full h-48 object-cover'
      />
      <div className='pt-4 md:pt-0 md:pl-4'>
        <div className='flex justify-between pb-4'>
          <h3 className='text-xl'>{props.title}</h3>
          <a
            target='_blank'
            href={props.link}
            className='btn-primary py-1 px-4 rounded-2xl h-min'
          >
            Open App
          </a>
        </div>
        <div className='flex flex-row items-center pb-4'>
          <div className='flex flex-wrap gap-4 py-0.5 mr-4 rounded-2xl'>
            {props.stack.map((s, i) => {
              return (
                <>
                  <StackIcon key={i} stackName={s} />
                </>
              );
            })}
          </div>
        </div>
        <p>{props.body}</p>
      </div>
    </div>
  );
}
