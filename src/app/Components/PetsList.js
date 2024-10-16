import PetItem from "./PetItem";
import { useState } from "react";

function PetsList({ pets }) {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("");
  const [adoptedPets, setAdoptedPets] = useState([]);

  function handleAdopt(id) {
    alert("You Have Adopted a Pet!!");
    setAdoptedPets([...adoptedPets, id]);
  }

  const petList = pets
    .filter((pet) => pet.type.includes(type))
    .filter((pet) =>
      pet.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
    )
    .filter((pet) => !adoptedPets.includes(pet.id))
    .map((pet) => <PetItem pet={pet} key={pet.id} handleAdopt={handleAdopt} />);

  function handleTextChange(event) {
    setQuery(event.target.value);
  }

  function handleSelectorChange(event) {
    setType(event.target.value);
  }

  return (
    <>
      <div className="mx-auto">
        <div className="flex justify-start space-x-2 w-full font-primary">
          <div className="flex flex-col items-start space-y-1 flex-grow">
            <input
              type="search"
              placeholder="search"
              className="text-gray-900 form-input border border-gray-300 w-full rounded-sm focus:border-palette-light focus:ring-palette-light"
              onChange={handleTextChange}
            />
          </div>
          <div className="flex flex-col items-start space-y-1 flex-grow-0">
            <select
              defaultValue={""}
              className="form-select border border-gray-300 rounded-sm w-full text-gray-900 focus:border-palette-light focus:ring-palette-light"
              onChange={handleSelectorChange}
            >
              <option value="">All</option>
              <option value="Cat">Cat</option>
              <option value="Dog">Dog</option>
              <option value="Rabbit">Rabbit</option>
            </select>
          </div>
        </div>
      </div>
      <div className="py-12 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
        {petList}
      </div>
    </>
  );
}

export default PetsList;
