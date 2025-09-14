
const getDate = () => {
  const d = new Date();
  const year = String(d.getFullYear()).slice(-2); // last 2 digits
  const month = String(d.getMonth() + 1).padStart(2, '0'); // months 0-11
  const day = String(d.getDate()).padStart(2, '0');

  return `${year}/${month}/${day}`;
}

export { getDate } 