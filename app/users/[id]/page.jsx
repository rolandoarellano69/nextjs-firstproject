async function getUsers(id) {
  const res = await fetch(`https://reqres.in/api/users/${id}`)
  const data = await res.json();
  return data.data;


}


async function UserPage({ params }) {
  console.log(params)
  const user = await getUsers(params.id)
  return (

    <div className="bg-gray-200 text-black p-10 rounded-xl">
      <img src={user.avatar} alt="lojo" className=" m-auto my-4" />
      <h1 className="text-xl font-semibold p-2 mt-2 ">{user.id} : {user.first_name} {user.last_name}</h1>
      <div>
        <p className="font-extralight">Email: {user.email}</p>
      </div>
    </div>
  )

}

export default UserPage;
