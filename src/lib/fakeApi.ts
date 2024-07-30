
export async function fakeRequest(data: FakeRequestData): Promise<FakeRequestResponse> {
  await new Promise<void>((resolve) => setTimeout(resolve, 500));

  const dogAvailability: Record<string, string> = {
    Nala: "2024-08-01",
    Daisy: "2024-08-04",
    Pawsly: "2024-08-12"
  };

  return {
    firstAvailableDate: dogAvailability[data.dog] || null
  };
}
