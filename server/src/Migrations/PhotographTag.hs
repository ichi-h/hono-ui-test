{-# LANGUAGE DeriveAnyClass #-}
{-# LANGUAGE DeriveGeneric #-}
{-# LANGUAGE TypeFamilies #-}
{-# LANGUAGE TypeSynonymInstances #-}

module Migrations.PhotographTag (PhotographTag, PhotographTagT (..)) where

import Data.Int (Int32)
import Database.Beam
import Migrations.Photograph (PhotographT)
import Migrations.Tag (TagT)

data PhotographTagT f = PhotographTag
  { photographTagId :: Columnar f Int32,
    photographTagPhotographId :: PrimaryKey PhotographT f,
    photographTagTagId :: PrimaryKey TagT f
  }
  deriving (Generic, Beamable)

type PhotographTag = PhotographTagT Identity

instance Table PhotographTagT where
  data PrimaryKey PhotographTagT f = PhotographTagId (Columnar f Int32) deriving (Generic, Beamable)
  primaryKey = PhotographTagId . photographTagId
