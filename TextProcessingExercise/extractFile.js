function extractFile(input) {
   let fileNameIndexStart = input.lastIndexOf("\\") + 1;
   let fileExtensionIndexStart = input.lastIndexOf(".") + 1;
   let fileNameIndexEnd = fileExtensionIndexStart - 1;
   let fileName = input.substring(fileNameIndexStart, fileNameIndexEnd);
   let fileExtension = input.substring(fileExtensionIndexStart);

console.log(`File name: ${fileName}`);
console.log((`File extension: ${fileExtension}`));
}

extractFile('C:\\Internal\\training-internal\\Template.hgf.pptx');
console.log(`---`);
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');