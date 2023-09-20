"use client";

import Link from "next/link";

function Users({ users }) {
  return (
    <ul>
      {users.map((user) => (
        <Link 
        key={user.id}
        href={`/users/${user.id}`}>
        <li className="flex gap-2 bg-gray-400 mb-2 rounded-lg p-4 text-black justify-between">
          <div className=" justify-center items-center">
            <h5 className="font-bold  ">
              {user.id}: {user.firts_name} {user.last_name}
            </h5>
            <p className="text-slate-100"> Email: {user.email}</p>
          </div>
          <img src={user.avatar} alt="lojo" className="rounded-full w-20" />
        </li>
        </Link>
      ))}
    </ul>
  )
}

export default Users;