export function searchApi(query) {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (!query) {
        resolve([])
        return
      }

      const data = Array.from({ length: 5 }, (_, i) => ({
        id: `${query}-${i}`,
        title: `${query} result ${i + 1}`,
        description: `This is a description for ${query} result ${i + 1}`
      }))

      resolve(data)
    }, 600)
  })
}
