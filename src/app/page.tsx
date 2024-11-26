import Image from "next/image";
import Marquee from "react-fast-marquee";
import { FaLongArrowAltRight } from "react-icons/fa";

const Ads = [
  '/ads/bitcoin.svg',
  '/ads/ankr.svg',
  '/ads/bitvavo.svg',
  '/ads/ftx.svg',
  '/ads/liqid.svg',
  '/ads/bitcoin.svg',
  '/ads/ankr.svg',
  '/ads/bitvavo.svg',
  '/ads/ftx.svg',
  '/ads/liqid.svg'

]


const safeOptions = [
  {
    title: "Safe and secure",
    text: "our platform prioritizes your protection with advanced security features and robust safeguards, ensuring your assets and information are always protected.",
    image: "/chooseus/unlock.png"
  },
  {
    title: "Good Trading App",
    text: "With real-time data, powerful analytical tools, and a secure platform, it empowers you to make informed decisions effortlessly.",
    image: "/chooseus/activity.png"
  },
  {
    title: "Integrated app",
    text: "By combining multiple functions—from communication to data management and analytics—Integrated App helps you stay organized and connected, all in a single, user-friendly interface.",
    image: "/chooseus/bootsrap.png"
  },
  {
    title: "Multi Currency Support",
    text: "Effortlessly switch between currencies, track your portfolio, and stay updated on exchange rates, all while enjoying Coinnect’s secure and user-friendly experience.",
    image: "/chooseus/bitcoin-convert.png"
  }
] 

export default function Home() {
  return (
    <>
      <header className="h-auto mt-7">
        <div className="container mx-auto px-4 xl:flex justify-between">
          <div className="xl:max-w-[50%] sm:max-w-[80%]">
            <h1 className="text-3xl md:text-6xl font-semibold mb-3">
              <span className="font-normal text-textyellow">Best Place</span> Buy And Sell Crypto Currency Assest
            </h1>
            <p className="mb-5 text-[#545D70] font-normal text-base xl:text-lg">
              Expand your reach with COINNet, where you can buy, sell, and engage in P2P trading. Access both American and crypto markets seamlessly through a multi-currency account.
            </p>
            <div className="flex items-center space-x-7">
              <Image src={'/googleplay.svg'} alt="google play" width={150} height={150}/>

              <Image src={'/appstore.svg'} alt="google play" width={150} height={150}/>
            </div>
          </div>
          <div className="flex justify-center items-center mt-10 xl:mt-0">
            <Image src={'/phone.svg'} alt="phone" width={500} height={400} className="w-[400px]"/>
          </div>
        </div>

        <div className="my-7 bg-gray-50">
          <Marquee
              className=""
              speed={70}
              pauseOnHover
            >
              {Ads.map((image, index: number) => {
                return (
                  <div
                    key={index}
                    className=""
                  >
                    <Image
                      loading="lazy"
                      src={image || ""}
                      alt="Images"
                      width={200}
                      height={30}
                      className="w-[200px] rounded-3xl"
                    />
                  </div>
                );
              })}
          </Marquee>
        </div>
      </header>

      <section className="container mx-auto px-4">
        <div className="flex justify-center items-center flex-col mb-10">
          <h2 className="font-extrabold text-3xl xl:text-5xl text-center xl:max-w-[65%]">
          Buy and sell with the lowest fees in the industry

          </h2>
          <h6 className="text-[#898CA9] text-center text-base max-w-[80%] xl:max-w-[50%] mt-5 ">
            Buy and sell 150+ cryptocurrencies with 20+ fiat currencies using bank transfers or your credit/debit card.

          </h6>

          <button className="mt-5 flex items-center space-x-2">
            <p>Learn more </p>
            <FaLongArrowAltRight />
          </button>
        </div>


        <div className="flex justify-center items-center">
          <Image src={'/table.svg'} alt="table" width={1000} height={400}/>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <div className="xl:flex justify-between items-centern my-7">
          <div className="xl:w-[50%] flex justify-center items-center xl:justify-start xl:items-start">
            <Image src={'/chatimage.svg'} alt="image" width={600} height={400}/>
          </div>
          <div className="xl:max-w-[50%] mt-10 xl:mt-0 p-3">
            <h2 className="text-3xl xl:text-5xl font-medium mb-5 text-[#000000]">Accelerate the world&apos;s transition</h2>
            <h5 className="text-base xl:text-lg text-[#373636] font-medium mb-5">At Coinnet, we&apos;re committed to driving the shift towards a more sustainable and inclusive financial future. Our platform empowers users to buy, sell, and trade cryptocurrencies effortlessly, fostering a global marketplace where innovation thrives. By providing access to both American and crypto markets through a multi-currency account, we enable individuals and businesses to engage in seamless transactions and P2P trading.</h5>
            <button className="bg-bgyellow p-3 rounded-lg text-lg font-semibold text-foreground text-center w-[200px]">
             More about Us
          </button>
          </div>
        </div>
      </section>


      <section className='container mx-auto px-4'>
        <div className="text-center">
          <h4 className="text-textyellow text-xl xl:text-3xl font-extrabold">Why Choose Us</h4>
          <h2 className="my-4 text-2xl xl:text-4xl text-[#000000] font-medium">Safe, guranteed, and easy to use</h2>
          <p className="text-[#444242] font-normal text-xs xl:text-sm">
            Coinnet offers a secure platform with built-in protections, ensuring your transactions are reliable and seamless every time. With an intuitive interface and dedicated support, Coinnet makes crypto accessible for everyone, from beginners to experts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-7">
          {safeOptions.map((item, index)=>(
            <div key={index} className="border-2 border-black rounded-lg p-4">
              <div className="p-[3px] border-2 border-[#000000] bg-bgyellow w-[50px] h-[50px] flex justify-center items-center rounded-full">
                <Image src={item.image} alt="icon" width={30} height={30}/>
              </div>

              <h2 className="text-2xl font-semibold text-[#000000] my-4">{item.title}</h2>
              <h6 className="text-sm font-normal text-[#000000]">{item.text}</h6>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
