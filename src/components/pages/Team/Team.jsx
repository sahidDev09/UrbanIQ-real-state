import { useEffect, useState } from "react";
import SingleTeamCard from "./SingleTeamCard";
import { Helmet } from "react-helmet-async";

const Team = () => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    fetch("/team.json")
      .then((res) => res.json())
      .then((data) => setTeam(data));
  }, []);

  return (
    <div className="my-10">
         <Helmet>
            <title>UrbanIQ | team</title>
        </Helmet>
      <h1 className=" text-3xl font-bold text-center">Meet our Awesome Team</h1>
      <div className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 items-center text-center">
        {team.map((aTeam, index) => (
          <SingleTeamCard key={index} teams={aTeam}></SingleTeamCard>
        ))}
      </div>
    </div>
  );
};

export default Team;
