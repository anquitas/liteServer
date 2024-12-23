

## auto table creation
`"sqams": "sequelize-auto -h localhost -d deneme -u yeni -x calis -p 1433 --dialect mssql -o './models'"`

`npx sequelize-auto -o "./models" -d "dev.sqlite" -h localhost -e sqlite -x "" -p 3306`
`npx sequelize-auto -o "./models" -d "dev.sqlite" -h localhost -e sqlite -x "" -p 3306`


## database object definition
Column - Description
`type` -	The type of database object (table, index, view, or trigger).
`name` -	The name of the object (e.g., table name).
`tbl_name` -	The name of the table associated with the object.
`rootpage` -	The page number of the root B-tree page for the object.
`sql` -	The SQL statement used to create the object.


## sequelize-auto options
-h, --host
-d, --database
-u, --user
-x, --pass
-p, --port
-c, --config
-o, --output
-e, --dialect