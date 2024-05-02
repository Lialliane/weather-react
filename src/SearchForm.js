import { React } from "react";

export default function SearchForm() {
  return [
    <form>
      <input
        type="text"
        id="search-field"
        required
        placeholder="Enter city name"
        spellCheck="true"
        pattern="^[a-zA-Z\s_\-]+$"
      />
      <input type="submit" value="Search" id="submit-button" />
    </form>,
  ];
}
