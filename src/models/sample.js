export const sampleAsync = () => {
   return new Promise((resolve, reject) => {
    return setTimeout(() => resolve({sample: 'Sample'}), 5)
  })
}