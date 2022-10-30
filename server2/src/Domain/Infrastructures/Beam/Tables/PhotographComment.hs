{-# LANGUAGE DeriveAnyClass #-}
{-# LANGUAGE DeriveGeneric #-}
{-# LANGUAGE TypeFamilies #-}
{-# LANGUAGE TypeSynonymInstances #-}

module Domain.Infrastructures.Beam.Tables.PhotographComment (PhotographComment, PhotographCommentT (..)) where

import Domain.Infrastructures.Beam.Tables.Comment (CommentT)
import Domain.Infrastructures.Beam.Tables.Photograph (PhotographT)
import Database.Beam

data PhotographCommentT f = PhotographComment
  { photographCommentPhotographId :: PrimaryKey PhotographT f,
    photographCommentCommentId :: PrimaryKey CommentT f
  }
  deriving (Generic, Beamable)

type PhotographComment = PhotographCommentT Identity

instance Table PhotographCommentT where
  data PrimaryKey PhotographCommentT f
    = PhotographCommentId (PrimaryKey PhotographT f) (PrimaryKey CommentT f)
    deriving (Generic, Beamable)
  primaryKey =
    PhotographCommentId
      <$> photographCommentPhotographId
      <*> photographCommentCommentId