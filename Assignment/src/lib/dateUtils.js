/**
 * @param {string} date
 */
export function formatDate(date, formatType = "dd-MM-yyyy") {
  // Ensure the input date is in YYYY-MM-DD format.
  if (!/^(\d{4})-(\d{2})-(\d{2})$/.test(date)) {
    throw new Error("Invalid date format. Expected YYYY-MM-DD.");
  }

  const [year, month, day] = date.split('-');

  const formatMap = {
    "dd-MM-yyyy": `${day}-${month}-${year}`,
    "dd/MM/yyyy": `${day}/${month}/${year}`,
  };

  // Check if the format type exists in the map.
  if (!formatMap[formatType]) {
    throw new Error("Unsupported format type.");
  }

  return formatMap[formatType];
}
