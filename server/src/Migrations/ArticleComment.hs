{-# LANGUAGE DeriveAnyClass #-}
{-# LANGUAGE DeriveGeneric #-}
{-# LANGUAGE TypeFamilies #-}
{-# LANGUAGE TypeSynonymInstances #-}

module Migrations.ArticleComment (ArticleComment, ArticleCommentT (..)) where

import Data.Int (Int32)
import Database.Beam
import Migrations.Article (ArticleT)
import Migrations.Comment (CommentT)

data ArticleCommentT f = ArticleComment
  { articleCommentId :: Columnar f Int32,
    articleCommentArticleId :: PrimaryKey ArticleT f,
    articleCommentCommentId :: PrimaryKey CommentT f
  }
  deriving (Generic, Beamable)

type ArticleComment = ArticleCommentT Identity

instance Table ArticleCommentT where
  data PrimaryKey ArticleCommentT f = ArticleCommentId (Columnar f Int32) deriving (Generic, Beamable)
  primaryKey = ArticleCommentId . articleCommentId
