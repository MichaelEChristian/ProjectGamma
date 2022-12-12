def create_record(cur, row):
    record = {}
    print(cur, "cur")
    print(list(enumerate(cur.description)), "enumerating things", row, "row")
    for i, column in enumerate(cur.description):
        record[column.name] = row[i]
    return record
