import { useState, useMemo } from "react";
import Header from "../../ui/header/Header";
import useFetch from "../../../utils/useFetchHook";
import Card from "../../ui/card/Card";
import styles from "./Home.module.css";
import Loading from "../../ui/Loading";
import Error from "../../ui/Error";
import { User } from "../../../utils/type";
import SearchBar from "../../ui/SearchBar";
import useDebouncedValue from "../../../utils/useDebouncedValue";
const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebouncedValue(searchTerm, 300);
  const {
    data: users,
    loading,
    error,
  } = useFetch<User[]>("https://jsonplaceholder.typicode.com/users");

  const filteredUsers = useMemo(() => {
    if (!users) return [];
    if (!debouncedSearchTerm.trim()) return users;

    return users.filter(
      (user) =>
        user.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
        user.username.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
    );
  }, [debouncedSearchTerm, users]);

  if (loading) return <Loading message="Loading user and posts..." />;

  if (error) return <Error error={error} />;
  return (
    <>
      <Header h1="List Of Users" />
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      {filteredUsers.length ? (
        <div className={styles.cards_container}>
          {filteredUsers?.map((user) => (
            <Card
              key={user.id}
              email={user.email}
              city={user.address.city}
              name={user.name}
              id={user.id}
            />
          ))}
        </div>
      ) : (
        <p style={{ textAlign: "center", color: "gray" }}>No users found.</p>
      )}
    </>
  );
};

export default Home;
