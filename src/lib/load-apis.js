export async function loadApis() {
  const res = await fetch('https://ch-api-production.up.railway.app/api/apis');
  const data = await res.json()
  
  return data
}