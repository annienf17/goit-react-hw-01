import FriendListItem from "./FriendListItem";
import css from "./FriendList.module.css";

export default function FriendList({ friends }) {
  const friendList = friends.map((friend) => (
    <FriendListItem
      avatar={friend.avatar}
      name={friend.name}
      isOnline={friend.isOnline}
      key={friend.id}
    />
  ));
  return <ul className={css.container}>{friendList}</ul>;
}
