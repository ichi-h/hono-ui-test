module Domain.Entities.Work (Work (..), ArticleWork) where

import Data.Text
import Data.Time (UTCTime)
import Domain.Entities.Article (Article)
import Domain.Entities.Tag (Tag)

data Work c = Work
  { workId :: Int,
    workCategory :: Text,
    workSlug :: Text,
    workTitle :: Text,
    workDescription :: Text,
    workThumbnailUrl :: Text,
    workIsDraft :: Bool,
    workCreatedAt :: UTCTime,
    workRevisedAt :: UTCTime,
    workPublishedAt :: Maybe UTCTime,
    workUnpublishedAt :: Maybe UTCTime,
    workTags :: [Tag],
    workContent :: c
  }

type ArticleWork = Work Article
