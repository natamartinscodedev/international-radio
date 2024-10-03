export async function GetDate(url: string) {
  try {
    const res = await fetch(url)

    if (!res.ok) {
      throw new Error(`Error status: ${res.status}`)
    }
    const date = await res.json()

    return date
  } catch (err) {
    console.error('Fetch error ==>', err)
    throw err
  }
}
