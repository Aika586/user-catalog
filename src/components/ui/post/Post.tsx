import styles from "./Post.module.css";
const Post = ({ title, body }: { title: string; body: string }) => {
  return (
    <div className={styles.postContainer}>
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.body}>{body}</p>
    </div>
  );
};

export default Post;
