export async function getData() {
    const url = "http://localhost:4000/api/*";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      console.log(json);
      return json;
    } catch (error: any) {
      console.error(error.message);
    }
  }
  