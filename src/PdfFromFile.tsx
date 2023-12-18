export const PdfFromFile = () => {
  const pdfPath = "https://arxiv.org/pdf/quant-ph/0410100.pdf#zoom=page-width&toolbar=0";

  return (
    <div>
      <embed
        src={pdfPath}
        type="application/pdf"
        width="600px"
        height="800px"
      />
    </div>
  );
};
