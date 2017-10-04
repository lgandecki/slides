// Old syntax:
var author = {
  firstName: "Donald",
  lastName: "Duck"
}

var fullName = function(author) {
  return author.firstName + " " + author.lastName;
}

// New syntax:
const author = {
  firstName: "Donald",
  lastName: "Duck"
}

const fullName = ({ firstName, lastName }) => {
  return firstName + " " + lastName;
}

// Shorter
const fullName = ({ firstName, lastName }) =>
  firstName + " " + lastName
