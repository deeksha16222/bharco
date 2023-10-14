import React from "react";
import signupImg from "../../assets/images/home/homeSlider.png";
import marketplace from "../../assets/images/how-it-works/marketplace.jpg";
import negotiation from "../../assets/images/how-it-works/negotiation.jpg";
import Connection from "../../assets/images/how-it-works/connection-management.jpg";

import thrive from "../../assets/images/how-it-works/thrivetogether.jpg";
import payments from "../../assets/images/how-it-works/payments.jpg";

import transparency from "../../assets/images/how-it-works/transparency.jpg";

export const HowItWorks = () => {
  const benefitsData = [
    {
      title: "Farmers",
      points: [
        "Direct Transactions: Farmers can sell their produce directly to food product companies without the involvement of middlemen, ensuring fair prices and better returns for their hard work.",
        "Improved Market Access: By connecting with a wide network of food product companies, farmers gain access to a larger market, increasing their chances of finding the best buyers for their produce.",
        "Efficiency and Cost Savings: With streamlined processes, farmers save time and resources by avoiding the complexities of traditional supply chains, allowing them to focus on their core farming activities.",
        "Transparency: BharCo offers complete transparency in pricing and transactions, empowering farmers with real-time information to make informed decisions about their produce sales.",
      ],
    },
    {
      title: "Food Product Companies",
      points: [
        "Access to Fresh Produce: Companies can directly source high-quality, fresh produce from farmers, ensuring a consistent supply of top-notch raw materials for their products.",
        "Cost Efficiency: By eliminating intermediaries, companies reduce procurement costs, contributing to overall cost savings and competitive pricing.",
        "Transparency and Traceability: BharCo provides a transparent sourcing process, enabling companies to track the origin of their raw materials and ensure compliance with quality standards and certifications.",
        "Diverse Supplier Network: Companies gain access to a diverse network of farmers, offering a wide range of agricultural products, varieties, and seasonal produce.",
      ],
    },
    {
      title: "Laborers and Farming Equipment Providers",
      points: [
        "Direct Connection with Farmers: Laborers and equipment providers can directly connect with farmers in need of their services, creating mutually beneficial partnerships.",
        "Increased Opportunities: BharCo expands the visibility of laborers and equipment providers to a broader audience of farmers, increasing their opportunities for engagement.",
        "Efficient Resource Allocation: With direct communication, farmers and service providers can efficiently schedule tasks, optimizing resource allocation and enhancing productivity.",
        "Prompt Payment and Fair Deals: By dealing directly with farmers, laborers, and equipment providers receive timely payment for their services and negotiate fair deals based on their expertise and market demand.",
      ],
    },
    {
      title: "Overall Advantages of BharCo",
      points: [
        "Sustainability: BharCo promotes sustainable agricultural practices by reducing food miles and supporting local farmers, contributing to environmental conservation.",
        "Empowerment: The platform empowers all stakeholders, fostering a sense of ownership and prosperity within the agricultural ecosystem.",
        "Market Insights: BharCo offers valuable market insights and trends, equipping users with essential information to make data-driven decisions.",
        "User-Friendly Experience: With an intuitive mobile application, BharCo provides a seamless and hassle-free user experience for all customer segments.",
      ],
    },
  ];
  return (
    <>
      <div className="container p-8 mx-auto my-10 custom-container">
        <h1 className="text-3xl font-bold mb-5 text-primary text-center">
          How It Works
        </h1>
        <br />
        <h5 className="text-lg font-semibold mb-5 text-primary text-center">
          Welcome to BharCo, where we've simplified the agricultural supply
          chain to empower farmers and connect them directly with food product
          companies, laborers, and farming equipment providers. With BharCo,
          transforming the way you do business has never been easier. Here's how
          it works:
        </h5>
        <br />
        <div className="">
          {/* Point 1 */}
      
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
            {/* Mission Image */}
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
              <img
                src={signupImg}
                alt="Mission"
                className="w-full h-auto pt-0 pb-0  p-10"
              />
            </div>

            {/* Mission Content */}
            <div className="w-full md:w-1/2 px-10">
              <h2 className="text-xl md:text-4xl text-primary font-bold mb-4">
                Sign Up and Create Your Profile
              </h2>
              <p className="text-md">
                Farmers, food product companies, laborers, and farming equipment
                providers can start their journey with BharCo by signing up
                through our user-friendly mobile application. Simply create your
                profile, providing essential details that will help us
                understand your unique needs and offerings.
              </p>
            </div>
          </div>

          {/* Point 2 */}

          <div className="flex flex-col md:flex-row-reverse items-center justify-center md:justify-between mt-10">
            {/* Vision Image */}
            <div className="w-full md:w-1/2 mb-4 md:mb-0 ">
              <img
                src={marketplace}
                alt="Vission"
                className="w-full h-auto pt-0 pb-0   p-10"
              />
            </div>

            {/* Vision Content */}
            <div className="w-full md:w-1/2 px-10">
              <h2 className="text-xl md:text-4xl font-bold mb-4 text-primary">
                Access a Vibrant Marketplace
              </h2>
              <p className="text-md">
                Once registered, you gain access to our dynamic marketplace
                bustling with opportunities. Farmers can list their agricultural
                goods, showcasing their finest produce and setting their desired
                prices. Food product companies explore an extensive catalog of
                fresh produce directly sourced from reliable growers. Laborers
                and farming equipment providers can showcase their expertise,
                creating a thriving ecosystem of services for farmers.
              </p>
            </div>
          </div>
          {/* Point 3 */}

          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between mt-10">
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
              <img
                src={negotiation}
                alt="Vission"
                className="w-full h-auto pt-0 pb-0  p-10"
              />
            </div>

            {/* Vision Content */}
            <div className="w-full md:w-1/2 px-10">
              <h2 className="text-xl md:text-4xl  font-bold mb-4 text-primary">
                Direct Bidding and Negotiations
              </h2>
              <p className="text-md">
                Farmers have the power to bid for their produce directly to food
                product companies, eliminating unnecessary intermediaries.
                Companies, in turn, can negotiate fair deals with farmers,
                fostering a transparent and efficient procurement process.
              </p>
            </div>
          </div>

          {/* Point 4 */}

          <div className="flex flex-col md:flex-row-reverse items-center justify-center md:justify-between mt-10">
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
              <img
                src={Connection}
                alt="Vission"
                className="w-full h-auto pt-0 pb-0  p-10"
              />
            </div>

            {/* Vision Content */}
            <div className="w-full md:w-1/2 px-10">
              <h2 className="text-xl md:text-4xl  font-bold mb-4 text-primary">
                Seamless Connections and Engagement
              </h2>
              <p className="text-md">
                With BharCo's intuitive platform, connecting with your ideal
                business partner is effortless. Farmers can easily engage with
                laborers and equipment providers, scheduling tasks and enhancing
                productivity. Food product companies can forge long-lasting
                relationships with reliable farmers, ensuring a consistent
                supply of top-quality produce.
              </p>
            </div>
          </div>
          {/* Point 5 */}
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between mt-10">
            <div className="w-full md:w-1/2 mb-4 md:mb-0 ">
              <img
                src={transparency}
                alt="Vission"
                className="w-full h-auto pt-0 pb-0  p-10 "
              />
            </div>

            <div className="w-full md:w-1/2 px-10">
              <h2 className="text-xl md:text-4xl  font-bold mb-4 text-primary">
                Transparency and Market Insights
              </h2>
              <p className="text-md">
                Transparency is at the core of BharCo's values. Our platform
                provides real-time pricing information, empowering farmers and
                companies alike to make informed decisions. Market insights and
                trends equip our users with valuable data, driving strategic
                choices for sustainable growth.
              </p>
            </div>
          </div>

          {/* Point 6 */}

          <div className="flex flex-col md:flex-row-reverse items-center justify-center md:justify-between mt-10">
            <div className="w-full md:w-1/2 mb-4 md:mb-0 ">
              <img
                src={payments}
                alt="Vission"
                className="w-full h-auto pt-0 pb-0 p-10 "
              />
            </div>

            <div className="w-full md:w-1/2 px-10">
              <h2 className="text-xl md:text-4xl font-bold mb-4 text-primary">
                Secure Transactions and Timely Payments
              </h2>
              <p className="text-md">
                BharCo takes pride in ensuring secure transactions for all
                parties involved. Farmers receive timely payments for their
                produce, and laborers and equipment providers get compensated
                fairly for their valuable services.
              </p>
            </div>
          </div>
          {/* Point 7 */}

               <div className="flex flex-col md:flex-row items-center justify-center md:justify-between mt-10">
            <div className="w-full md:w-1/2 mb-4 md:mb-0 ">
              <img
                src={thrive}
                alt="Vission"
                className="w-full h-auto pt-0 pb-0 p-10"
              />
            </div>

            <div className="w-full md:w-1/2 px-10">
              <h2 className="text-xl md:text-4xl font-bold mb-4 text-primary">
              Thrive Together with BharCo
              </h2>
              <p className="text-md">
              Join the agricultural revolution and experience the
              transformational power of BharCo. Embrace the opportunities for
              prosperity as we nurture sustainable practices, cultivate strong
              relationships, and empower every stakeholder in the agricultural
              ecosystem.
              <br />
              Get started today and let BharCo be your trusted partner on the
              path to success. Together, we stand united to reshape farming and
              propel India's agriculture into a brighter, more prosperous
              tomorrow.
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="bg-light-green py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-primary text-center text-4xl font-bold mb-8">
            Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefitsData.map((benefit, index) => (
              <div key={index} className="rounded-lg shadow-md bg-white">
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-4 text-primary">
                    {benefit.title}
                  </h3>
                  <ul className="text-sm text-primary space-y-2">
                    {benefit.points.map((point, pointIndex) => (
                      <li key={pointIndex}>
                        <svg
                          className="w-4 h-4 inline-block mr-2 stroke-current text-primary"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="none"
                            d="M13.293 20.293l-6.293-6.293a1 1 0 111.414-1.414l5.293 5.293 9.293-9.293a1 1 0 111.414 1.414l-10 10a1 1 0 01-1.414 0z"
                          />
                        </svg>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <br />
          <p className="font-semibold text-primary text-lg">
            Experience the transformative power of BharCo, where direct
            transactions, improved market access, efficiency, and transparency
            converge to revolutionize the way farmers, food product companies,
            laborers, and farming equipment providers thrive in the agricultural
            realm.
          </p>
        </div>
      </div>
    </>
  );
};
