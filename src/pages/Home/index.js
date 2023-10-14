import { useEffect, useState } from "react";
import sliderImg from "../../assets/images/home/slider.png";
import home2 from "../../assets/images/home/home2.png";
import homeSlider2 from "../../assets/images/home/homeSlider2.png";

export const Home = () => {
  const images = [home2, sliderImg, homeSlider2];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div>
<div className="flex mt-5 flex-col md:flex-row home">
  <div className="flex-1 relative h-64 md:h-auto carousel">
    {images.map((image, index) => (
      <div
        key={index}
        className={`absolute h-full w-full transition-opacity duration-500 ${
          index === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <img src={image} alt={`Slide ${index + 1}`} className="home-slider-img h-full w-full object-cover" />
      </div>
    ))}

    <div className="absolute bottom-4 left-0 w-full flex justify-center">
      {images.map((_, index) => (
        <div
          key={index}
          onClick={() => goToSlide(index)}
          className={`h-2 w-2 cursor-pointer rounded-full mx-1 ${
            index === currentIndex ? "bg-black" : "bg-gray-300"
          }`}
        ></div>
      ))}
    </div>
  </div>

  <div className="md:flex-1  p-4 md:p-8">
    <div className="right-blk-wrap">
      <h2 className="text-primary font-futura text-xl md:text-4xl font-bold mb-4 md:mb-8">
        BharCo: Empowering Indian Farmers, Connecting Growers and Buyers for a Thriving Tomorrow!
      </h2>
      <p className="content bg-light-green text-black p-8 text-sm md:text-base leading-relaxed">
        At Bharco India, our mission is to empower farmers across India by revolutionizing
        the agricultural supply chain. We are committed to providing a cutting-edge platform
        that connects farmers directly with food product companies, laborers, and farming
        equipment providers. Through our technology-driven ecosystem, we aim to eliminate
        middlemen, foster fair trade practices, and promote sustainable agriculture, ensuring
        that farmers receive fair prices for their produce and gain access to a broader market.
      </p>
    </div>
  </div>
</div>


      <div className="bg-light-green mt-5 text-center py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-primary text-2xl md:text-4xl font-bold mb-6">Unique Value Proposition</h2>

          <p className="text-center text-primary mb-6">
            At Bharco India, we stand apart from traditional agricultural practices by offering a
            comprehensive platform that brings together farmers, food product companies, laborers,
            and farming equipment providers under one digital roof. Our unique value proposition includes:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            <div className="p-4 bg-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all">
              <h3 className="text-primary text-lg font-bold mb-2">Direct Transactions</h3>
              <p className="text-md leading-relaxed md:max-h-32 md:overflow-hidden">
                We facilitate direct transactions between farmers and food product companies,
                cutting out intermediaries and ensuring fair prices for farmers while enabling
                food companies to access fresh, traceable produce.
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all">
              <h3 className="text-primary text-lg font-bold mb-2">Labor and Equipment Access</h3>
              <p className="text-md leading-relaxed md:max-h-32 md:overflow-hidden">
                Farmers can easily connect with skilled laborers and farming equipment providers,
                streamlining their farming operations and boosting productivity.
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all">
              <h3 className="text-primary text-lg font-bold mb-2">Market Intelligence</h3>
              <p className="text-md leading-relaxed md:max-h-32 md:overflow-hidden">
                Our platform offers valuable market intelligence and insights, empowering farmers
                to make informed decisions based on demand trends, market prices, and consumer preferences.
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all">
              <h3 className="text-primary text-lg font-bold mb-2">Sustainability and Fair Trade</h3>
              <p className="text-md leading-relaxed md:max-h-32 md:overflow-hidden">
              We prioritize sustainable farming practices, ethical sourcing, and fair trade principles,
      aligning the interests of farmers and food product companies with responsible agriculture.
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all">
              <h3 className="text-primary text-lg font-bold mb-2">Efficiency and Cost Savings</h3>
              <p className="text-md leading-relaxed max-h-32 md:overflow-hidden">
              By eliminating multiple steps in the supply chain, we optimize the procurement process,
      reduce administrative tasks, and save costs for farmers and food companies alike.
              </p>
            </div>
         
          </div>
        </div>
      </div>
    </div>
  );
};
