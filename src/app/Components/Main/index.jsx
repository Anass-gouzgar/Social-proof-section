import Image from 'next/image'
import star from "../../../../public/images/icon-star.svg"
import data from '../../data/data.js'
import Card from '../Card'

const index = () => {
  return (
    <div className=" w-full h-full md:max-w-[1450px] md:h-[700px]">
      <div className=" h-fullv flex flex-col md:h-1/2 md:flex md:flex-row md:max-w-full mt-10 md:mt-0 ">
        <div className="h-full md:w-[40%] flex flex-col p-4 gap-y-5 items-center md:items-start">
          <h1 className="text-center md:text-start text-5xl text-dark-magenta font-bold md:max-w-[340px] ">
            {" "}
            10,000+ of our users love our products.
          </h1>
          <p className="text-dark-grayish-magenta px-6 md:px-0 max-w-[450px] text-lg  text-center md:text-start">
            {" "}
            We only provide great products combined with excellent customer
            service. See what our satisfied customers are saying about our
            services.
          </p>
        </div>
        <div className="md:w-[60%] w-full p-5 h-full flex flex-col gap-5 md:pt-9 md:pl-11">
          <div className="flex flex-col items-center md:items-start gap-2 md:flex md:flex-row md:flex-wrap md:gap-8 bg-light-grayish-magenta md:max-w-[550px] md:pl-4 py-3 rounded-lg min-1350:translate-x-8">
            <p className="flex gap-4">
              <Image src={star} alt="star" className="size-5" />
              <Image src={star} alt="star" className="size-5" />
              <Image src={star} alt="star" className="size-5" />
              <Image src={star} alt="star" className="size-5" />
              <Image src={star} alt="star" className="size-5" />
            </p>
            <p className="text-dark-grayish-magenta text-xl font-bold">
              Rated 5 Stars in Reviews
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start gap-2 md:flex md:flex-wrap md:flex-row md:gap-8 bg-light-grayish-magenta md:max-w-[550px] md:pl-4 py-3 rounded-lg min-1350:translate-x-28">
            <p className="flex gap-4">
              <Image src={star} alt="star" className="size-5" />
              <Image src={star} alt="star" className="size-5" />
              <Image src={star} alt="star" className="size-5" />
              <Image src={star} alt="star" className="size-5" />
              <Image src={star} alt="star" className="size-5" />
            </p>
            <p className="text-dark-grayish-magenta text-xl font-bold">
              Rated 5 Stars in Report Guru
            </p>
          </div>
          <div className="flex flex-col md:flex md:flex-row gap-2 items-center md:flex-wrap md:items-start md:gap-8 bg-light-grayish-magenta md:max-w-[550px] md:pl-4 py-3 rounded-lg min-1350:translate-x-48">
            <p className="flex gap-4">
              <Image src={star} alt="star" className="size-5" />
              <Image src={star} alt="star" className="size-5" />
              <Image src={star} alt="star" className="size-5" />
              <Image src={star} alt="star" className="size-5" />
              <Image src={star} alt="star" className="size-5" />
            </p>
            <p className="text-dark-grayish-magenta text-xl font-bold">
              Rated 5 Stars in BestTech
            </p>
          </div>
        </div>
      </div>
      <div className="h-full md:h-1/2 w-full p-5 flex flex-col md:flex lg:flex-row items-center md:gap-8 mb-20 xl:mt-0">
        {data.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            icon={item.icon}
            name={item.name}
            status={item.status}
            review={item.review}
          />
        ))}
      </div>
    </div>
  );
}

export default index