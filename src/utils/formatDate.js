export const formatDate = (isoString) => {
  const date = new Date(isoString);
  return date.toLocaleString("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
