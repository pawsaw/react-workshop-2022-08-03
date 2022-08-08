import { onErrorResumeNext } from 'rxjs';

export interface Person {
  first: string;
  last: string;
  address: {
    city: string;
    country: string;
  };
}

let person: Person = {
  first: 'Pawel',
  last: 'Sawicki',
  address: {
    city: 'Berlin',
    country: 'Deutschland',
  },
};

function marry(person: Person, last: string, city: string): Person {
  return {
    ...person,
    last,
    address: {
      ...person.address,
      city,
    },
  };
}

let marriedPerson = marry(person, 'Musterfrau', 'Hamburg');

function hasChanged(prevPerson: Person, currPerson: Person): boolean {
  if (
    // leafes + nodes = n, complexity O(n)
    // is this possible within O(1)?

    prevPerson !== currPerson
    // prevPerson.first !== currPerson.first ||
    // prevPerson.last !== currPerson.last ||
    // prevPerson.address !== currPerson.address ||
    // prevPerson.address.city !== currPerson.address.city ||
    // prevPerson.address.country !== currPerson.address.country
  ) {
    return true;
  } else {
    return false;
  }
}
