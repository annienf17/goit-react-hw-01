import css from "./Profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.container}>
      <div className={css.profile}>
        <img src={image} alt="User avatar" />
        <p className={css.h1}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <span>Followers</span>
          <span className={css.counter}>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span className={css.counter}>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span className={css.counter}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
