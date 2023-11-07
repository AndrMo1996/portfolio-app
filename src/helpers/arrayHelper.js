export const getSubArray = (originalArray, startIndex, endIndex) => {
  const subarray = [];

  for (let i = startIndex; i < endIndex; i++) {
    subarray.push(originalArray[i % originalArray.length]);
  }

  return subarray;
};
