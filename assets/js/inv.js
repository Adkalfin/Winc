function downloadInvoice() {
  // Mengambil elemen dengan ID 'invoice-section'
  const section = document.getElementById("invoice-section");

  // Menyimpan status awal dari ikon "Print" dan "Download"
  const printIcon = document.querySelector(".btn-print");
  const downloadIcon = document.querySelector(".btn-download");
  const printIconDisplayStyle = printIcon.style.display;
  const downloadIconDisplayStyle = downloadIcon.style.display;

  // Menyembunyikan ikon "Print" dan "Download" saat pembuatan file PDF
  printIcon.style.display = "none";
  downloadIcon.style.display = "none";

  // Menggunakan html2pdf untuk membuat file PDF dari bagian invoice-section
  html2pdf()
    .from(section)
    .save("invoice.pdf")
    .then(function () {
      // Mengembalikan tampilan awal dari ikon "Print" dan "Download" setelah pembuatan file PDF selesai
      printIcon.style.display = printIconDisplayStyle;
      downloadIcon.style.display = downloadIconDisplayStyle;
    });
}
