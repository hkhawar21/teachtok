export const getMCQs = async () => {
  const res = await fetch("https://cross-platform.rp.devfactory.com/for_you");

  if (!res.ok) return undefined;

  return res.json();
};

export const getAnswer = async (id: string) => {
  const res = await fetch(
    `https://cross-platform.rp.devfactory.com/reveal?id=${id}`
  );

  if (!res.ok) return undefined;

  return res.json();
};
