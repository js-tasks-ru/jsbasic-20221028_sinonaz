function makeFriendsList(friends) {
  // ваш код...
  const list = document.createElement(`ul`);
  friends.forEach((friend) => {
    const item = document.createElement(`li`);
    list.append(item);
    item.textContent = `${friend.firstName}, ${friend.lastName}`;
  });
  return list;
}
