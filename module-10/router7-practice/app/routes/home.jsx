export function meta({}) {
  return [
    { title: "Home page title" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function loader(params) { // server side fetch
  const todos =  await fetch('https://dummyjson.com/todos?skip=10&limit=10')
  .then(response => response.json());
  console.log(todos)
  return todos;
}

export default function Home({loaderData}) { // loaderData for client
  console.log('loader data: ', loaderData);
  return <>
    <h1>Home page</h1>
  </>;
}
