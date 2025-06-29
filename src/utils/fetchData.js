export async function fetchData(url) {
  try {
    const data = await fetch(url);
    return data.json();
  } catch (err) {
    console.log(err);
  }
}