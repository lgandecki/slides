// Old syntax
const fullName = ({ firstName, lastName }) =>
  firstName + " " + lastName; 


// New syntax:
const fullName = ({ firstName, lastName }) =>
  `${firstName} ${lastName}`
