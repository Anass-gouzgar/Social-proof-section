import Image from 'next/image'

const index = ({id, icon, name, status , review}) => {
  return (
    <div
      className={`bg-dark-magenta rounded-xl max-w-[440px] max-h-[300px] flex flex-col gap-7 p-10 ${id === 2 && "translate-y-4" } ${id === 3 && "translate-y-8" }`}>
      <div className="flex gap-6">
        <Image
          src={icon}
          alt="logo"
          className="rounded-full"
          width={50}
          height={50}
        />
        <div className="flex flex-col justify-center">
          <h1 className='text-white'>{name}</h1>
          <h2 className="text-soft-pink">{status}</h2>
        </div>
      </div>
      <p className='text-white xl:text-xl'>{review}</p>
    </div>
  );
}

export default index
