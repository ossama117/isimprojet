import React, { useState } from "react";
import "../style/Timtable.css";
import { emplois } from "../data";

function Timetable() {
  const [selectedGroup, setSelectedGroup] = useState("");

  const handleGroupChange = (event) => {
    setSelectedGroup(event.target.value);
  };

  const filteredEmplois = selectedGroup
    ? emplois.filter((emploi) => emploi.groupe === selectedGroup)
    : emplois;

  return (
    <div>
      <select onChange={handleGroupChange} value={selectedGroup}>
        <option value="">tout les Groupes</option>
              {emplois.map((groupe) => (
          <option key={groupe.groupe} value={groupe.groupe}>
            {groupe.groupe}
          </option>
        ))}
      </select>
      <table id="customers">
        <thead>
          <tr>
            <th>Filiere</th>
            <th>Groupe</th>
            <th>Emploi URL</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmplois.map((emploi) => (
            <tr key={emploi.groupe}>
              <td>{emploi.filiere}</td>
              <td>{emploi.groupe}</td>
              <td>
                <a href={emploi.url} target="_blank" rel="noopener noreferrer">
                  Cliquez ici pour voir les horaires
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Timetable;
