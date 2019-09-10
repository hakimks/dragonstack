#!/bin/bash
export PGPASSWORD="node_password";
echo "Configuring the dragonstackdb"
dropdb -U node_user -h localhost dragonstackdb
createdb -U node_user -h localhost dragonstackdb
psql -U node_user -h localhost dragonstackdb < ./bin/sql/generation.sql
psql -U node_user -h localhost dragonstackdb < ./bin/sql/dragon.sql
psql -U node_user -h localhost dragonstackdb < ./bin/sql/trait.sql

node ./bin/insertTraits.js

echo "dragonstackdb was configured"
