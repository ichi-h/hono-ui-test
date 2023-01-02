{-# LANGUAGE OverloadedStrings #-}

module Domain.Infrastructures.Repository.Operators.Migrations.Base
  ( insertMigration_,
    deleteMigration_,
    readAllMigrations_,
    readLatestMigration_,
  )
where

import Database.SQLite.Simple (Connection, Only, execute, query_)
import Domain.Entities.Migration (Migration (..))
import Domain.Infrastructures.Repository.Tables.Migrations (MigrationT (..))

insertMigration_ :: Connection -> (String, Int) -> IO ()
insertMigration_ conn (target, nextBatch) = execute conn "INSERT INTO migrations (name, batch) VALUES (?, ?)" (target :: String, nextBatch :: Int)

deleteMigration_ :: Connection -> Only Int -> IO ()
deleteMigration_ conn id' = execute conn "DELETE FROM migrations WHERE id = ?" (id' :: Only Int)

readAllMigrations_ :: Connection -> IO [Migration]
readAllMigrations_ conn = do
  migrationRecords <- query_ conn "SELECT * from migrations" :: IO [MigrationT]
  let migrations =
        Prelude.map
          ( \m ->
              Migration
                { migrationId = migrationTId m,
                  migrationName = migrationTName m,
                  migrationBatch = migrationTBatch m
                }
          )
          migrationRecords
  pure migrations

readLatestMigration_ :: Connection -> IO (Maybe Migration)
readLatestMigration_ conn = do
  migrations <- query_ conn "SELECT * from migrations order by batch desc limit 1" :: IO [MigrationT]
  case migrations of
    [] -> pure Nothing
    (m : _) ->
      pure $
        Just
          ( Migration
              { migrationId = migrationTId m,
                migrationName = migrationTName m,
                migrationBatch = migrationTBatch m
              }
          )
