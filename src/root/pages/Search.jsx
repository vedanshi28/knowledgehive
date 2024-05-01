import { useState } from "react";
import seacrh from "../../assets/icons/search-gray.svg";
import filter from "../../assets/icons/filter.svg";
import UserCard from "../../components/cards/UserCard";
import { similarminds } from "../../constant";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="explore-container">
      <div className="explore-inner_container">
        <h2 className="h3-bold md:h2-bold w-full">Search</h2>
        <div className="flex gap-1 px-4 w-full rounded-lg bg-dark-4">
          <img src={seacrh} width={24} height={24} alt="search" />
          <input
            type="text"
            placeholder="Search"
            className="explore-search w-full"
            value={searchValue}
            onChange={(e) => {
              const { value } = e.target;
              setSearchValue(value);
            }}
          />
        </div>
      </div>

      <div className="flex-between w-full max-w-5xl mt-10 mb-7">
        <h3 className="body-bold md:h3-bold">Popular Today</h3>

        <div className="flex-center gap-3 bg-dark-3 rounded-xl px-4 py-2 cursor-pointer">
          <p className="small-medium md:base-medium text-light-2">All</p>
          <img src={filter} width={20} height={20} alt="filter" />
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-20 w-full">
        {similarminds.map((people) => (
          <UserCard
            key={people.id}
            id={people.id}
            name={people.name}
            username={people.username}
            imgUrl={people.image}
            personType="User"
          />
        ))}
      </div>
    </div>
  );
};

export default Search;
