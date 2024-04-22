import { Octokit } from "@octokit/rest";
import { FaCodeFork } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { CiLocationOn } from "react-icons/ci";
import { IoIosLink } from "react-icons/io";
import { PiUsersThree } from "react-icons/pi";
import { PiUsersThreeThin } from "react-icons/pi";
import img1 from "../assets/rolaimg.jpg";
import { IoMdListBox } from "react-icons/io";
import { Link } from "react-router-dom";
import { GoPencil } from "react-icons/go";

const Body = () => {
  const arrowColor = "rgb(0,125,86)";
  const profileColor = "rgb(244, 191, 58)";
  const [getRepo, setGetRepo] = useState([]);
  const [repoToShow, setRepoToShow] = useState([]);
  const [countPage, setCountPage] = useState(0);
  const [profile, setProfile] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const octokit = new Octokit({
      auth: import.meta.env.VITE_REACT_APP_GITHUB_TOKEN,
    });
    octokit
      .request("GET /user/repos")
      .then((respo) => {
        console.log(respo);
        console.log(respo.data);
        if (respo.status === 200) {
          setLoading(false);
        }
        setGetRepo(respo.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const startCount = countPage;
    const endCount = startCount + 4;
    const setRepo = getRepo.slice(startCount, endCount);
    setRepoToShow(setRepo);
    // console.log(getRepo);

    repoToShow.map((repo) => {
      const myProfile = repo.owner;
      console.log(myProfile);
      setProfile(myProfile);
    });
  });

  const handlePrev = (e) => {
    e.preventDefault();
    setCountPage((prevState) => prevState - 1);
  };

  const handleNext = (e) => {
    e.preventDefault();
    setCountPage((prevState) => prevState + 1);
  };
  return (
    <>
      {loading ? (
        <div className="h-screen w-full">
          <div className="border shadow rounded-md p-4 w-full h-full">
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-slate-200 h-10 w-10"></div>
              <div className="flex-1 space-y-6 py-1">
                <div className="h-2 bg-slate-200 rounded"></div>
                <div className="space-y-3 h-full">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                    <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                  </div>
                  <div className="h-2 bg-slate-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <main className="flex  px-10  gap-10 max-sm:px-2  max-sm:flex-col-reverse  sm:gap-0 ">
          <div className="grid grid-cols-2 w-[70%] gap-5  max-sm:flex max-sm:flex-col max-sm:w-full">
            {repoToShow.map((Repos, index) => (
              <div
                className="text-center flex flex-col justify-between shadow-xl border rounded-lg  h-[45vh] max-sm:w-full"
                key={index}
              >
                <div className="flex justify-between px-5  py-5">
                  <h1 className="font-defaultfont text-xl text-[#002147] font-bold  ">
                    {Repos.name}
                  </h1>
                  <Link to={`/repos/${Repos.name}`}>
                    {" "}
                    <FaExternalLinkAlt color={arrowColor} size="20" />
                  </Link>
                </div>
                <p className="py-5 text-xl mb-10 text-[#002147]">
                  {Repos.description}
                </p>
                <div className="flex justify-between  px-2  mb-5">
                  <button className="p-2 px-4 text-white bg-[#002147] rounded-2xl">
                    Public
                  </button>
                  <button className="p-2 px-6 text-white bg-[#007d56] rounded-2xl flex items-center gap-2">
                    <FaCodeFork />
                    {Repos.forks}
                  </button>

                  <button className="p-2 px-6 text-white bg-[#7fd77b] rounded-2xl">
                    <FaRegStar />
                  </button>
                  <button className="p-2 px-4 text-white bg-lastbutton rounded-2xl">
                    {Repos.language}
                  </button>
                </div>
              </div>
            ))}
            <div className="flex justify-between gap-5 ">
              <div className="h-0">
                <button
                  className="px-2 py-2 border-[#a33e3d] text-[#a33e3d]  border-2 font-bold rounded"
                  onClick={handlePrev}
                  disabled={countPage === 0}
                >
                  Previous
                </button>
              </div>
              <div>
                <button
                  className="px-2 py-2 border-[#a33e3d] border-2 text-[#a33e3d] font-bold rounded"
                  onClick={handleNext}
                  disabled={countPage.length > 4}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
          <div className=" w-[30%] h-[100vh] bg-[#002147] ml-6 rounded px-6 py-3  max-sm:ml-0 max-sm:w-full max-sm:rounded max-sm:mt-5  max-sm:py-3">
            <img className="h-[50vh] w-full rounded mb-3" src={img1} alt="" />

            <h1 className="text-[#70facb] w-full text-lg mb-2 font-semibold">
              {" "}
              kofoworola Shonuyi
            </h1>
            <h1 className="text-white w-full  mb-3 text-sm">{profile.login}</h1>

            <p className="text-white text-sm mb-4">Frontend Developer</p>
            <div className="flex items-center text-white text-sm mb-2 gap-5">
              <p>
                <CgMail color={profileColor} size="20" />
              </p>
              <p> skofoworola3@gmail.com</p>
            </div>
            <div className="flex  text-white items-center mb-4 text-sm gap-5">
              <p>
                <CiLocationOn color={profileColor} size="20" />
              </p>
              <p>Lagos Nigeria</p>
            </div>
            <div className="flex gap-5 text-white items-center mb-3   text-sm">
              <p>
                <IoIosLink color={profileColor} size="20" />
              </p>
              <a href="https://github.com/Rolalove" target="_blank">
                https://github.com/Rolalove
              </a>
            </div>
            <div className="flex text-white gap-20 mb-4 text-sm ">
              <div className="flex gap-3">
                <p>
                  <PiUsersThree color={profileColor} size="20" />
                </p>
                <p className="text-white text-sm">Followers: 2</p>
              </div>
              <div className="flex gap-3">
                <p>
                  {" "}
                  <PiUsersThreeThin color={profileColor} size="20" />
                </p>

                <p className="text-white text-sm">Following: 2</p>
              </div>
            </div>
            <div className="flex text-white gap-16 mb-4 text-sm ">
              <div className="flex gap-3">
                <IoMdListBox color={profileColor} size="20" />
                <p className="text-white text-sm">Public Repo:34</p>
              </div>
              <div className="flex gap-3">
                <GoPencil color={profileColor} size="20" />

                <p className="text-white text-sm">Public Gists: 1</p>
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default Body;
