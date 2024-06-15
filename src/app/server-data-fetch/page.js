import Link from "next/link";

async function fetchListOfUsers() {
  try {
    const apiResponse = await fetch("https://dummyjson.com/users");
    const result = await apiResponse.json();
    return result.users;
  } catch (error) {
    throw new Error(error);
  }
}

export default async function ServerSideDataFetching() {
  const listOfUsers = await fetchListOfUsers();
  console.log(listOfUsers);
  return (
    <div>
      <h1 className="font-medium">Server Side data fetching</h1>
      <ul>
        {listOfUsers.map((user) => (
          <li className="cursor-pointer">
            <Link href={`/server-data-fetch/${user.id}`}>
              {user.university}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
