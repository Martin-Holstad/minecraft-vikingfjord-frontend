export default async function getServerStatus() {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const options = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  const response = await fetch(`${baseUrl}/server-status`, options);
  return await response.json();
}
