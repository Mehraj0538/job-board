import { useState } from "react";

export default function SearchBar({ onSearch, onReset }) {
  const [kw, setKw] = useState("");
  const [loc, setLoc] = useState("");
  const [type, setType] = useState("");

  function submit(e) {
    e.preventDefault();
    onSearch({ keyword: kw, location: loc, jobType: type });
  }

  function reset() {
    setKw("");
    setLoc("");
    setType("");
    onReset();
  }

  return (
    <form className="search-bar" onSubmit={submit}>
      <input
        type="text"
        placeholder="Keyword (e.g. Java)"
        value={kw}
        onChange={(e) => setKw(e.target.value)}
      />
      <input
        type="text"
        placeholder="Location"
        value={loc}
        onChange={(e) => setLoc(e.target.value)}
      />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="">Any type</option>
        <option value="FULL_TIME">Full Time</option>
        <option value="INTERNSHIP">Internship</option>
        <option value="CONTRACT">Contract</option>
      </select>
      <button type="submit">Search</button>
      <button type="button" onClick={reset}>Reset</button>
    </form>
  );
}
