
export async function getPost() {
  const response = await fetch(`${API_URL}/posts`, {
    method: "GET",
  });

  const json = await response.json();

  return json.data.posts;
}

export async function NewUser(userData) {
    const response = await fetch(`${API_URL}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error("Error en el registro");
      }

      const data = await response.json();
      console.log(data); 
}

export async function LoginUser(userData) {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    throw new Error("Error en el login");
  }

  const data = await response.json();
  console.log(data);
  return data; 
}

export async function CreateNewPost(userData) {
const token = localStorage.getItem("token")
  const response = await fetch(`${API_URL}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    throw new Error("Error en la creación del post");
  }

  const data = await response.json();
  console.log(data);
  return data
}
 