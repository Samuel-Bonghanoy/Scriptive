import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export async function createPDF(username: string, letter: string) {
  const pdf = new jsPDF("portrait", "px", [1056, 816]); // A4 paper sizing in pixels "portrait", "px", [1056, 816]
  const data = await html2canvas(document.querySelector(`.${letter}`));
  const img = data.toDataURL("image/png");
  const imgProperties = pdf.getImageProperties(img);
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
  pdf.addImage(img, "PNG", 0, 0, pdfWidth, pdfHeight);
  pdf.save(`${username}.pdf`);
}
