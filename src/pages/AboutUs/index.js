import atul from "../../assets/images/about-us/atul.jpeg";
import abhinav from "../../assets/images/about-us/abhinav.jpg";
import ajay from "../../assets/images/about-us/ajay.jpeg";
import aakash from "../../assets/images/about-us/aakash.jpeg";
import sandeep from "../../assets/images/about-us/sandeep.jpeg";
import mission from "../../assets/images/about-us/vision.png";
import vision from "../../assets/images/about-us/mission.png";

export const AboutUs = () => {
  const teamDetails = [
    {
      image: abhinav,
      name: "Abhinav Gargvansi",
      title: "Co-Founder",
      linkedinurl: "https://www.linkedin.com/in/abhinav-gargvansi-81935a17a/",
    },
    {
      image: atul,
      name: "Atul Tiwari",
      title: "Co-Founder",
      linkedinurl: "https://www.linkedin.com/in/thisisaeytee",
    },
    {
      image: aakash,
      name: "Aakash Pandey",
      title: "Co-Founder",
      linkedinurl: "https://www.linkedin.com/in/aakash-pandey-b29203143",
    },
    {
      image: ajay,
      name: "Ajay Jangid",
      title: "Backend Lead",
      linkedinurl: "https://www.linkedin.com/in/ajay-jangid-70620016a",
    },
    {
      image: sandeep,
      name: "Sandeep Kumar Mishra",
      title: "Head of Agricultural Department",
      linkedinurl: "https://www.linkedin.com/in/sandeep-mishra-1b57b31a8",
    },
  ];

  return (
    <>
      <div className="about-us">
      <div className="container mx-auto px-10 my-10">
      {/* Mission Section */}
   
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
        {/* Mission Image */}
        <div className="w-full md:w-1/2 mb-4 md:mb-0 ">
          <img
            src={mission}
            alt="Mission"
            className="w-full h-auto p-10"
          />
        </div>

        {/* Mission Content */}
        <div className="w-full md:w-1/2 px-10">
          <h2 className="text-4xl text-primary font-bold mb-4">Our Mission</h2>
          <p className="text-md">
            At BharCo, we are on a mission to empower farmers across India,
            transforming the landscape of agriculture through innovation,
            transparency, and prosperity. We understand that farming is not just
            a livelihood; it's a way of life, and the backbone of our nation.
            Our platform is built on the firm belief that farmers deserve more
            than just survival – they deserve to thrive as successful
            businessmen, steering their destinies towards a brighter future.
          </p>
        </div>
      </div>


      {/* Vision Section */}


      <div className="flex flex-col md:flex-row-reverse items-center justify-center md:justify-between mt-10">
        {/* Vision Image */}
        <div className="w-full md:w-1/2 mb-4 md:mb-0 ">
          <img
            src={vision}
            alt="Vission"
            className="w-full h-auto p-10 "
          />
        </div>

        {/* Vision Content */}
        <div className="w-full md:w-1/2 px-10">
          <h2 className="text-4xl font-bold mb-4 text-primary">Our Vision</h2>
          <p className="text-md">
            At BharCo, our vision is to create a sustainable agricultural
            ecosystem that bridges the gap between farmers, food product
            companies, laborers, and farming equipment providers. We envision a
            future where every farmer has access to fair markets, cutting-edge
            technologies, and transparent business practices. Through our
            platform, we aim to revolutionize the agricultural supply chain,
            empowering farmers to prosper, businesses to thrive, and the nation
            to flourish.
          </p>
        </div>
      </div>

    </div>
 

    <br/>
    <div className="container mx-auto px-10 my-10">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Card 1 */}
    <div className="bg-white rounded-lg hover:shadow border hover:border-primary p-6 mt-8 transition-all">
  <h2 className="text-2xl font-bold text-primary mb-4">The Problem We Aim to Solve</h2>
  <p className="text-md">
    India's agricultural sector has long faced challenges rooted in inefficiencies,
    middlemen, and limited market access. Farmers often find themselves navigating
    a complex web of intermediaries, leading to lower returns on their labor and
    produce. Meanwhile, companies struggle to source high-quality produce directly
    from growers, impacting both the cost and quality of their products.
  </p>
  <p className="text-md mt-4">
    BharCo emerges as the answer to this age-old predicament. By providing an
    innovative platform, we dissolve barriers and bridge the gap between farmers
    and buyers, ushering in a new era of direct and transparent transactions.
    Through BharCo, farmers can confidently bid to sell their produce directly to
    companies, ensuring fair prices and eliminating unnecessary intermediaries.
    Simultaneously, companies benefit from sourcing the finest raw materials directly
    from farmers, fostering sustainable relationships and supporting the backbone of
    our nation's economy.
  </p>
</div>
    {/* Card 2*/}

<div className="bg-white rounded-lg hover:shadow border hover:border-primary p-6 mt-8 transition-all">
  <h2 className="text-2xl font-bold text-primary mb-4">Building Trust, Cultivating Prosperity</h2>
  <p className="text-md">
    At BharCo, trust is the cornerstone of everything we do. We are committed to
    creating a platform where farmers feel empowered and valued, where their hard
    work and dedication yield the rewards they deserve. Our team, driven by a passion
    for empowering the farming community, works tirelessly to ensure that every
    transaction is fair, transparent, and beneficial for all.
  </p>
  <p className="text-md mt-4">
    Join us in this extraordinary journey of transformation and empowerment.
    Together, we cultivate prosperity for farmers, foster sustainable practices,
    and nourish a vibrant and progressive future for Indian agriculture. Experience
    the power of BharCo today, as we connect growers, transform lives, and sow the
    seeds of prosperity for generations to come.
  </p>
</div>

  </div>
</div>
        <div className="flex items-center flex-col justify-center h-full m-auto pt-20 ">
        
          <h2 className="text-primary heading">Our Team</h2>

          <p className="text-primary content text-center w-3/4">
            Join us in this extraordinary journey of transformation and
            empowerment. Together, we cultivate prosperity for farmers, foster
            sustainable practices, and nourish a vibrant and progressive future
            for Indian agriculture. Experience the power of BharCo today, as we
            connect growers, transform lives, and sow the seeds of prosperity
            for generations to come.
          </p>
          <div>
            <br />
            <div className="overflow-x-visible pt-8 card-wrap flex gap-4">
              {teamDetails?.map((element) => (
                <div className="card">
                  <img src={element?.image} alt="team" />
                  <div className="p-4 content">
                    <p className="name text-center text-primary font-bold text-md">
                      {element?.name}
                    </p>
                    <p className="title text-center text-secondary font-family-secondary pt-4 text-sm">
                      {element?.title}
                    </p>
                    <div className="icons flex gap-4 justify-center pt-4">
                      <i class="fa fa-twitter"></i>

                      <a href={element?.linkedinurl}>
                        <i class="fa fa-linkedin-square"></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
