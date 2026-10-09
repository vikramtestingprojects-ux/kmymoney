// Fix CSV export encoding
function exportCSV(data) {
  const csv = data.map(row => row.join(",")).join("\n");
  return csv;
}