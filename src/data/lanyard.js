export const formatTime = (secs) => {
  const rel = Math.floor((Date.now() - secs) / 1000);
  let hours = Math.floor(rel / 3600);
  let minutes = Math.floor(rel / 60) % 60;
  let seconds = rel % 60;
  const formatted = [hours, minutes, seconds]
    .map((v) => ("" + v).padStart(2, "0"))
    .filter((v, i) => v !== "00" || i > 0)
    .join(":");
  return formatted ? formatted + " elapsed" : "";
};