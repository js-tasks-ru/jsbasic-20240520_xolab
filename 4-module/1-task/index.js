function makeFriendsList(friends) {
  const ul = document.createElement('ul');
  ul.innerHTML = friends.reduce((sum, friend) => {
    return sum += `<li>${friend.firstName} ${friend.lastName}</li>`;
  }, '');

  return ul;
}
