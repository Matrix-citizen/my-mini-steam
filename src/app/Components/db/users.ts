import { User } from "../models/user";

export const Users = [
  {
    id: '1',
    username: 'Ronald',
    age: '25',
    friendsIds: ['1', '3'],
    library: ['2', '3'],
    email: 'ronald@yahoo.com',
    password: '123ronald'
  },
  {
    id: '2',
    username: 'Bill',
    age: '25',
    friendsIds: [],
    library: ['1', '4'],
    email: 'bill@yahoo.com',
    password: '123bill'
  },
  {
    id: '3',
    username: 'Jorge',
    age: '25',
    friendsIds: [],
    library: ['1', '2'],
    email: 'jorge@yahoo.com',
    password: '123jorge'
  },
  {
    id: '4',
    username: 'Barak',
    age: '25',
    friendsIds: [],
    library: ['4'],
    email: 'barak@yahoo.com',
    password: '123barak'
  },
]


