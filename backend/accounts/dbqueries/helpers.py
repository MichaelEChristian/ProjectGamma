def create_record(cur, row):
    record = {}
    for i, column in enumerate(cur.description):
        record[column.name] = row[i]
    return record
