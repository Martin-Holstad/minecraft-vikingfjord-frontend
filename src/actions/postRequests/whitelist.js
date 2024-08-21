export default async function login(playerName, password) {
  const baseUrl = process.env.REACT_APP_BASE_URL;

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ playerName, password }),
  };

  const response = await fetch(`${baseUrl}/whitelist`, options);
  return await response.json();
}
