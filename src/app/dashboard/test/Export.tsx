"use client";

import axios from "axios";

const Export = ({ token }: { token: string }) => {
  const handleExport = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/dashboard/contacts/export", {
        responseType: "arraybuffer",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const blob = new Blob([response.data], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });

      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "contacts.xlsx";
      link.click();
    } catch (error) {
      console.error("Error exporting contacts:", error);
      alert("Failed to export contacts. Please try again later.");
    }
  };

  return (
    <div>
      <button onClick={handleExport}>Export Contacts</button>
    </div>
  );
};

export default Export;
