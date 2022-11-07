/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';

export const Card = ({ car }: any) => {
  return (
    <div className="
      w-[350px] h-auto
        col-span-1
        bg-white
        self-start
        mx-auto
        rounded-lg shadow-lg"
    >
      <div
        className="
        min-h-[170px]
        w-full
        rounded-t-lg
        bg-cover
        bg-center block"
      >
        <Image
          src={car.imageUrl}
          layout="responsive"
          width={300}
          height={200} className="rounded-t-lg" />
      </div>
      <div className='p-2'>
        <div className='text-blue-600'>{car.title}</div>
        <div>{'Price: '}<span className='text-blue-600'>{car.price}</span></div>
        <div>
          <span>{car.manufacturer}</span>{" | "}
          <span>{car.bodyType}</span>{' | '}
          <span className=' text-[#FFA500] font-semibold'>{car.state}</span>
        </div>
      </div>
    </div>);
};
