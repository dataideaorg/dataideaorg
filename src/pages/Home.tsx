import Python from "../assets/images/python_programming.jpg";
import DataAnalysis from "../assets/images/python_data_analysis.jpg";
import MachineLearning from "../assets/images/python_machine_learning.jpg";
import ProgrammingHard from "../assets/images/programming_hard.jpg";
import DotEnv from "../assets/images/dot-env.jpg";
import ReactThumb from "../assets/images/react-thumbnails.jpg";
import { FaCode, FaChartLine, FaGlobe, FaExternalLinkAlt } from 'react-icons/fa'

const Home: React.FC = () => {
  return (
    <>
      <section className="font-default bg-[#008374] py-16 mb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="text-center">
            <div className="flex justify-center"><FaCode color="white" size={45}/></div>
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
              Programming for Data Science
            </h1>
            <p className="my-4 text-xl text-white md:w-3/4 md:m-auto md:p-6">
              We teach people to Programming for Data Science and Web
              Development. We also Develop Software solutions for individuals
              and organizations
            </p>
          </div>
        </div>
      </section>

      <section className="py-4 font-default">
        <div className="container-xl lg:container m-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <div className="flex flex-row space-x-3">
            <FaChartLine size={25}/>
              <h2 className="text-2xl font-bold">
                Data Science
                </h2>
            </div>
              <p className="mt-2 mb-4 ">
                A comprehensive and dynamic course designed to equip you with
                the skills to thrive in data science.
              </p>
              <a
                href="https://science.dataidea.org"
                className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
              >
                Get Started
                <span className="inline-block pl-3"><FaExternalLinkAlt/></span> 
              </a>
            </div>
            <div className="bg-cyan-50 p-6 rounded-lg shadow-md">
              <div className="flex flex-row space-x-3">
              <FaGlobe size={25}/>
              <h2 className="text-2xl font-bold">Web Development</h2>
              </div>
              <p className="mt-2 mb-4">
                A comprehensive subject designed to cover the various
                programming components essential for web development.
              </p>
              <a
                href="https://web.dataidea.org"
                className="inline-block bg-[#008374] text-white rounded-lg px-4 py-2 hover:bg-[#019b89]"
              >
                Get Started
                <span className="inline-block pl-3"><FaExternalLinkAlt/></span> 
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="courses" className="bg-cyan-50 px-4 py-10 font-default">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-[#008374] mb-6 text-center">
            Browse Courses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-md relative">
              <div className="p-4">
                <div className="mb-6">
                  {/* <div className="text-gray-600 my-2">Online</div> */}
                  <img src={Python} alt="" className="rounded-xl" />
                  {/* <h3 className="text-xl font-bold">Python3 Programming</h3> */}
                </div>

                <div className="mb-5">
                  Start with the basics of Python, a versatile and powerful
                  programming language. This course lays the foundation for your
                  data science journey
                </div>

                <h3 className="text-[#008374] mb-2">Juma Shafara</h3>

                <div className="border border-gray-100 mb-5"></div>

                <div className="flex flex-col lg:flex-row justify-between mb-4">
                  <div className="text-orange-700 mb-3">
                    <i className="fa-solid fa-location-dot text-lg"></i>4 Weeks
                    15 Seats
                  </div>
                  <a
                    href="https://science.dataidea.org/Python/00_python_programming_outline.html"
                    className="h-[36px] bg-[#008374] hover:bg-[#019b89] text-white px-4 py-2 rounded-lg text-center text-sm"
                  >
                    Get Started
                    <span className="inline-block pl-3"><FaExternalLinkAlt/></span>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md relative">
              <div className="p-4">
                <div className="mb-6">
                  {/* <div className="text-gray-600 my-2">Online</div> */}
                  <img src={DataAnalysis} alt="" className="rounded-xl" />
                </div>

                <div className="mb-5">
                  Explore data analysis using libraries like Pandas, NumPy, and
                  Matplotlib. Learn to transform raw data into actionable
                  insights
                </div>

                <h3 className="text-[#008374] mb-2">Juma Shafara</h3>

                <div className="border border-gray-100 mb-5"></div>

                <div className="flex flex-col lg:flex-row justify-between mb-4">
                  <div className="text-orange-700 mb-3">
                    <i className="fa-solid fa-location-dot text-lg"></i>4 Weeks
                    10 seats
                  </div>
                  <a
                    href="https://science.dataidea.org/Python-Data-Analysis/python_data_analysis_outline.html"
                    className="h-[36px] bg-[#008374] hover:bg-[#019b89] text-white px-4 py-2 rounded-lg text-center text-sm"
                  >
                    Get Started
                    <span className="inline-block pl-3"><FaExternalLinkAlt/></span>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md relative">
              <div className="p-4">
                <div className="mb-6">
                  {/* <div className="text-gray-600 my-2">Online</div> */}
                  <img src={MachineLearning} alt="" className="rounded-xl" />
                  {/* <h3 className="text-xl font-bold">Machine Learning</h3> */}
                </div>

                <div className="mb-5">
                  Discover the principles of machine learning and gain hands-on
                  experience in building and optimizing models
                </div>

                <h3 className="text-[#008374] mb-2">Juma Shafara</h3>

                <div className="border border-gray-100 mb-5"></div>

                <div className="flex flex-col lg:flex-row justify-between mb-4">
                  <div className="text-orange-700 mb-3">
                    <i className="fa-solid fa-location-dot text-lg"></i>4 Weeks
                    10 seats
                  </div>
                  <a
                    href="https://science.dataidea.org/Python-Data-Analysis/Week4-ML-Intro/41_overview_of_machine_learning.html"
                    className="h-[36px] bg-[#008374] hover:bg-[#019b89] text-white px-4 py-2 rounded-lg text-center text-sm"
                  >
                    Get Started
                    <span className="inline-block pl-3"><FaExternalLinkAlt/></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="blog" className="m-auto max-w-lg my-10 px-6">
        <a
          href="https://science.dataidea.org"
          className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >
          View All Courses
        </a>
      </section>

      {/* Blog */}
      <section className="bg-gray-100 px-4 py-10 font-default">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-[#008374] mb-6 text-center">
            Latest on the Blog
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-md relative">
              <div className="p-4">
                <div className="mb-6">
                  <img src={ReactThumb} alt="" className="rounded-xl" />
                </div>

                <div className="mb-5">
                  In this guide, we’ll create a new React project with Vite,
                  TypeScript, Tailwind CSS, and add a basic navigation bar using
                  React components.
                </div>

                <h3 className="text-[#008374] mb-2">Nov 7, 2024</h3>

                <div className="border border-gray-100 mb-5"></div>

                <div className="flex flex-col lg:flex-row justify-between mb-4">
                  <div className="text-orange-700 mb-3">
                    <i className="fa-solid fa-location-dot text-lg"></i>
                    Juma Shafafa
                  </div>
                  <a
                    href="https://jumashafara.dataidea.org/posts/2024/react-naviagaion/"
                    className="h-[36px] bg-[#008374] hover:bg-[#019b89] text-white px-4 py-2 rounded-lg text-center text-sm"
                  >
                    Read More
                    <span className="inline-block pl-3"><FaExternalLinkAlt/></span>
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md relative">
              <div className="p-4">
                <div className="mb-6">
                  <img src={DotEnv} alt="" className="rounded-xl" />
                </div>

                <div className="mb-5">
                  Environment variables are crucial in programming for storing
                  sensitive information
                </div>

                <h3 className="text-[#008374] mb-2">Oct 31, 2024</h3>

                <div className="border border-gray-100 mb-5"></div>

                <div className="flex flex-col lg:flex-row justify-between mb-4">
                  <div className="text-orange-700 mb-3">
                    <i className="fa-solid fa-location-dot text-lg"></i>
                    Juma Shafara
                  </div>
                  <a
                    href="https://jumashafara.dataidea.org/posts/2024/setting-up-dotenv/"
                    className="h-[36px] bg-[#008374] hover:bg-[#019b89] text-white px-4 py-2 rounded-lg text-center text-sm"
                  >
                    Read More
                    <span className="inline-block pl-3"><FaExternalLinkAlt/></span>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md relative">
              <div className="p-4">
                <div className="mb-6">
                  <img src={ProgrammingHard} alt="" className="rounded-xl" />
                </div>

                <div className="mb-5">
                  Why is programming so difficult to learn, and how can you make
                  the process smoother? Let’s dive in.
                </div>

                <h3 className="text-[#008374] mb-2">Aug 12, 2024</h3>

                <div className="border border-gray-100 mb-5"></div>

                <div className="flex flex-col lg:flex-row justify-between mb-4">
                  <div className="text-orange-700 mb-3">
                    <i className="fa-solid fa-location-dot text-lg"></i>
                    Juma Shafara
                  </div>
                  <a
                    href="https://jumashafara.dataidea.org/posts/2024/why-coding-is-hard/"
                    className="h-[36px] bg-[#008374] hover:bg-[#019b89] text-white px-4 py-2 rounded-lg text-center text-sm"
                  >
                    Read More
                    <span className="inline-block pl-3"><FaExternalLinkAlt/></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="m-auto max-w-lg my-10 px-6">
        <a
          href="https://blog.dataidea.org"
          className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >
          View All Blogs
        </a>
      </section>
    </>
  );
};

export default Home;
