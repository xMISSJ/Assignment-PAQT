export async function fakeRequest(data) {
  // Fake delay that a request usually has.
  await new Promise((resolve) => setTimeout(resolve, 500));

  const dogAvailability = {
    Nala: "2024-08-01",
    Daisy: "2024-08-04",
    Pawsly: "2024-08-12"
  };

  return {
    firstAvailableDate: dogAvailability[data.dog] || null
  };
}