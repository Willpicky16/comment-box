import React from 'react';
import ReactDOM from 'react-dom';

function formatName(user) {
  return user.firstName + " " + user.lastName;
}

function getGreeting (user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, stranger!</h1>;
}

var user = {
  firstName: 'Will', lastName: 'Pickering'
};

ReactDOM.render(
  getGreeting(user),
  document.getElementById('root')
);
