import PetItem from "./PetItem";
import { useState } from "react";
import SearchBar from "./SearchBar";

function PetsList({ pets }) {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("");
  const [adoptedPets, setAdoptedPets] = useState([]);

  function handleAdopt(id) {
    if (window.confirm("Would you like to confirm your aroption"))
      setAdoptedPets([...adoptedPets, id]);
    return;
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
      <SearchBar
        handleTextChange={handleTextChange}
        handleSelectorChange={handleSelectorChange}
      />
      <div className="py-12 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
        {petList}
      </div>
    </>
  );
}

export default PetsList;
