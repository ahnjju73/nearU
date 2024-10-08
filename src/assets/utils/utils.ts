import html2canvas from 'html2canvas';
import Compressor from 'compressorjs';

export function exportToCsv(filename: string, rows: any) {
  const processRow = function (row: any) {
    let finalVal = '';
    for (let j = 0; j < row.length; j++) {
      let innerValue = row[j] === null ? '' : row[j].toString();
      if (row[j] instanceof Date) {
        innerValue = row[j].toLocaleString();
      }
      let result = innerValue.replace(/"/g, '""');
      if (result.search(/("|,|\n)/g) >= 0) result = `"${result}"`;
      if (j > 0) finalVal += ',';
      finalVal += result;
    }
    return `${finalVal}\n`;
  };

  let csvFile = '';
  if (!rows) return;
  for (let i = 0; i < rows.length; i++) {
    csvFile += processRow(rows[i]);
  }

  const blob = new Blob([csvFile], { type: 'text/csv;charset=utf-8;' });
  if ((navigator as any)?.msSaveBlob) {
    // IE 10+
    (navigator as any)?.msSaveBlob(blob, filename);
  } else {
    const link = document.createElement('a');
    if (link.download !== undefined) {
      // feature detection
      // Browsers that support HTML5 download attribute
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', filename);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
}

export const imageSize = (url: string) => {
  const img = document.createElement('img');

  const promise = new Promise((resolve, reject) => {
    img.onload = () => {
      // Natural size is the actual image size regardless of rendering.
      // The 'normal' `width`/`height` are for the **rendered** size.
      const width = img.naturalWidth;
      const height = img.naturalHeight;

      // Resolve promise with the width and height
      resolve({ width, height });
    };

    // Reject promise on error
    img.onerror = reject;
  });

  // Setting the source makes it start downloading and eventually call `onload`
  img.src = url;

  return promise;
};

export const htmlToPng = async (id: string) => {
  // const element = document.getElementById(id); // 대상 HTML 요소의 ID를 지정합니다.
  // if (!element) return;
  // const style = document.createElement('style');
  // document.head.appendChild(style);
  // style.sheet?.insertRule('body > div:last-child img { display: inline-block; }');
  // html2canvas(element).then((canvas) => {
  //   const link = document.createElement('a');
  //   link.href = canvas.toDataURL(); // 캔버스를 데이터 URL로 변환합니다.
  //   link.download = 'screenshot.png'; // 다운로드될 파일의 이름을 지정합니다.
  //   link.click(); // 가상의 링크를 클릭하여 다운로드를 시작합니다.
  // });
  const element = document.getElementById(id);
  if (!element) {
    alert('Element not found!');
    return;
  }

  try {
    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL('image/png');
    const aTag = document.createElement('a');

    aTag.href = imgData;
    aTag.download = 'download.png';
    aTag.click();
  } catch (error) {
    console.error('Error capturing image:', error);
  }
};

export const isDeleteClient = (email: string) => {
  const pattern = /^\d+_.*_\d+$/;
  return pattern.test(email);
};

export const extractDeleteClientEmail = (email: string) => {
  const pattern = /(\d+_)|(_\d+)/g;
  return email.replace(pattern, '');
};

function isImageFile(file: File) {
  const acceptedImageTypes = [
    'image/gif',
    'image/jpeg',
    'image/png',
    'image/svg+xml',
    'image/webp',
    'image/bmp',
  ];

  return file && acceptedImageTypes.includes(file.type);
}

// export const imageFileCompressedUpload = (image: File) => {
//   new Compressor(image, {
//     quality: 0.8, // 0.6 can also be used, but its not recommended to go below.
//     success: (compressedResult) async => {
//       // compressedResult has the compressed file.
//       // Use the compressed file to upload the images to your server.
//       setCompressedFile(res)
//     },
//   });
// };

export const delay = (ms: number = 500) => new Promise((resolve) => setTimeout(resolve, ms));

export function getImageDimensions(url: string) {
  return new Promise((resolve, reject) => {
    const img = new Image();

    // 이미지 로딩이 성공하면 resolve를 호출
    img.onload = function () {
      resolve({ width: (this as any).width, height: (this as any).height });
    };

    // 오류가 발생하면 reject를 호출
    img.onerror = function () {
      reject(new Error('Failed to load image'));
    };

    img.src = url;
  });
}
