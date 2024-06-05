function makeFriendsList(friends) {
  const ul = document.createElement('ul');
  ul.innerHTML = friends.reduce((sum, {firstName, lastName}) => {
    return sum += `<li>${firstName} ${lastName}</li>`;
  }, '');

  return ul;
}
