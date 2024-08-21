export default async function getOnlineUsers() {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const options = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  const response = await fetch(`${baseUrl}/online-users`, options);
  return await response.json();
}
