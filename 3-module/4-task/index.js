function showSalary(users, age) {
  return users
    .filter(({age: itemAge}) => itemAge <= age)
    .map(({name, balance}) => `${name}, ${balance}`)
    .join('\n');
}

