function printInvoice() {
    var printContents = document.getElementById("section-pdf").innerHTML;
    var originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
}


function downloadInvoice() {
    const invoiceElement = document.getElementById('section-pdf'); 

    const printDownloadButtons = invoiceElement.querySelector('.d-print-none');
    if (printDownloadButtons) {
        printDownloadButtons.remove();
    }

    const options = {
        margin: 10,
        filename: 'invoice.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().from(invoiceElement).set(options).save() 
    .then(() => {
        invoiceElement.insertAdjacentHTML('beforeend', `
            <div class="d-print-none">
                <div class="text-end">
                    <a href="#" onclick="printInvoice()" class="btn btn-dark waves-effect waves-light mt-0 mx-2"><i class="la la-print"></i></a>
                    <a href="#" onclick="downloadInvoice()" class="btn btn-dark waves-effect waves-light mt-0 mx-2 btn-download"><i class="la la-download"></i></a>
                </div>
            </div>
        `);
    });
}