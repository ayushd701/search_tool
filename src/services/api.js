const TOTAL_RESULTS = 30

export function searchApi(query, page = 1, limit = 5) {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (!query) {
        resolve([])
        return
      }

      const startIndex = (page - 1) * limit

      if (startIndex >= TOTAL_RESULTS) {
        resolve([])
        return
      }

      const remaining = TOTAL_RESULTS - startIndex
      const currentLimit = Math.min(limit, remaining)

      const data = Array.from({ length: currentLimit }, (_, i) => ({
        id: `${query}-${page}-${i}`,
        title: `${query} – Complete Guide (${startIndex + i + 1})`,
        description: `Learn everything about ${query}, including core concepts, real-world use cases, and practical examples. This section covers topic ${
          startIndex + i + 1
        } in detail.`,
      }))

      resolve(data)
    }, 600)
  })
}
