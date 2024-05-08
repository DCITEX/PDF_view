// PDF.jsの初期化
const pdfjsLib = window['pdfjs-dist/build/pdf'];

// PDFビューアーのコンテナ
const container = document.getElementById('pdf-viewer');

// PDFファイルのURL
// const url = 'https://example.com/path/to/your/pdf/file.pdf';
const url = '_LOGO_Guideline_2210.pdf';

// PDFを表示するためのオプション
const options = {
  // 表示倍率
  scale: 1.5,
};

// PDFを表示
pdfjsLib.getDocument(url).promise.then(pdf => {
  // PDFのページ数
  const numPages = pdf.numPages;

  // 最初のページを表示
  pdf.getPage(1).then(page => {
    const viewport = page.getViewport({ scale: options.scale });

    // canvasを作成してページをレンダリング
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.height = viewport.height;
    canvas.width = viewport.width;
    container.appendChild(canvas);

    const renderContext = {
      canvasContext: context,
      viewport: viewport
    };
    page.render(renderContext);
  });
});
