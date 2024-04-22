import { FaLink } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const Repodisplay = () => {
  const { name } = useParams();
  const [RepoByData, setRepoByData] = useState([]);

  useEffect(() => {
    const FetchRepo = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/repos/Rolalove/${name}`
        );

        console.log(response.data);
        setRepoByData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    FetchRepo();
  }, []);

  useEffect(() => {
    console.log(RepoByData);
  }, [RepoByData]);

  return (
    <section className="bg-[#F5F5F5] flex  justify-center  items-center flex-col ">
      <div className="bg-white w-[70%] h-[75vh] bg-blue rounded shadow-md ">
        <div className="px-5 py-3">
          <h3 className="text-[#002147] font-defaultfont font-bold">{name}</h3>
          <div className="flex  gap-2 py-5"></div>
        </div>

        <div className="grid grid-cols-3 gap-6 px-5 py-3 text-center max-sm:flex col">
          <div className="ring-1 px-2 py-2  ">
            Branch: {RepoByData.default_branch}
          </div>
          <div className="ring-1 px-2 py-2">Fork: {RepoByData.forks}</div>
          <div className="ring-1 px-2 py-2">
            Language: {RepoByData.language}
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6 px-5 py-5  text-center max-sm:flex col">
          <div className="ring-1  px-2 py-2">Stars: 0</div>
          <div className="ring-1  px-2 py-2">Watchers: 0</div>
          <div className="ring-1  px-2 py-2">File Size: 268kb</div>
        </div>
        <div className="grid grid-cols-3 gap-6 px-5 py-5 text-center max-sm:flex col">
          <div className="ring-1  px-7 py-7">
            Visibility : {RepoByData.visibility}
          </div>
          <div className="ring-1  px-7 py-7">Open Issues : 0</div>
          <div className="ring-1 px-7 py-7">
            Created_at : {RepoByData.created_at}
          </div>
        </div>
        <div className="flex  justify-between px-5 py-5">
          <button className="p-3 bg-[#002147] px-6 py-2 rounded-2xl text-white  ">
            <Link target="_blank" to={RepoByData.clone_url}>
              ViewSite
            </Link>
          </button>
          <Link
            className="bg-[#007D56] p-3 px-6 py-2 rounded-3xl text-white"
            to="/"
          >
            Back
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Repodisplay;
