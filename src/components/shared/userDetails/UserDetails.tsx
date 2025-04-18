import Header from "../../ui/header/Header";
import { useParams } from "react-router";
import useFetch from "../../../utils/useFetchHook";
import { User } from "../../../utils/type";
import style from "./UserDetail.module.css";
import Post from "../../ui/post/Post";
import Loading from "../../ui/Loading";
import Error from "../../ui/Error";
import { TPost } from "../../../utils/type";

const UserDetails = () => {
  const { id } = useParams();
  const {
    data: user,
    loading: userLoading,
    error: userError,
  } = useFetch<User>(`https://jsonplaceholder.typicode.com/users/${id}`);

  const {
    data: posts,
    loading: postsLoading,
    error: postsError,
  } = useFetch<TPost[]>(
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`
  );
  if (userLoading || postsLoading)
    return <Loading message="Loading user and posts..." />;

  if (userError || postsError) return <Error error={userError || postsError} />;
  return (
    <div>
      <Header h1={user?.name} isUserPage />
      <ul className={style.listContainer}>
        <li>
          <b>Email:</b>
          {user?.email}
        </li>
        <li>
          <b>Phone:</b>
          {user?.phone}
        </li>
        <li>
          <b>Address:</b>
          {user?.address.city}, st:{user?.address.street}
        </li>
        <li>
          <b>Company:</b>
          {user?.company.name}
        </li>
      </ul>
      <div className={style.postContainer}>
        {posts?.map((post, index) => (
          <Post key={index} title={post.title} body={post.body} />
        ))}
      </div>
    </div>
  );
};

export default UserDetails;
