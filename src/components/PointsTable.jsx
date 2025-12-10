import React, { useEffect, useState } from "react";
import "./PointsTable.css";

const PointsTable = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/FreSauce/json-ipl/data")
      .then((res) => res.json())
      .then((data) => {
        // Sort by NRR ascending
        const sortedData = data.sort((a, b) => a.NRR - b.NRR);
        setTeams(sortedData);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      <h2 className="title">IPL 2022 Points Table</h2>

      <table className="points-table">
        <thead>
          <tr>
            <th>Position</th>
            <th>Team</th>
            <th>Matches</th>
            <th>Won</th>
            <th>Lost</th>
            <th>NRR</th>
            <th>Points</th>
          </tr>
        </thead>

        <tbody>
          {teams.map((team, index) => (
            <tr key={team.id}>
              <td>{index + 1}</td>
              <td>{team.Team}</td>
              <td>{team.Matches}</td>
              <td>{team.Won}</td>
              <td>{team.Lost}</td>
              <td>{team.NRR}</td>
              <td>{team.Points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PointsTable;
