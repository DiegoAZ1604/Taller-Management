import { useState } from "react";

const users = [
  { username: 'admin', password: '1234' }
];

export function Authenticate(username, password) {
  const user = users.find((user) => user.username === username && user.password === password);
  return user || null;
}