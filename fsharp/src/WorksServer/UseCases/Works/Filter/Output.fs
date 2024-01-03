module WorksServer.UseCases.Works.Filter.Output

type SummarizedWork =
    { slug: string
      category: string
      title: string
      description: string
      thumbnailUrl: string
      publishedAt: string
      updatedAt: string }

type FilterWorksOutput =
    { total: int
      works: SummarizedWork seq }
