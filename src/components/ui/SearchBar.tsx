import React from "react";

type SearchBarProps = {
  searchTerm: string;
  onSearchChange: (value: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  onSearchChange,
}) => {
  return (
    <input
      type="text"
      placeholder="Search users..."
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
      style={{
        padding: "8px",
        fontSize: "16px",
        margin: "16px auto",
        display: "block",
        width: "80%",
        maxWidth: "400px",
        borderRadius: "4px",
        border: "1px solid #ccc",
      }}
    />
  );
};

export default SearchBar;
