# from dbqueries.helpers import create_record


# def create_mock(dict):
#     obj = type("", (object,), dict)()
#     return obj


# def test_create_record_successful():
#     cursor_mock = create_mock({"description": [
#       create_mock({"name": "username"}),
#       create_mock({"name": "spouse"}),
#       create_mock({"name": "budget"}),
#       create_mock({"name": "state"})]})
#     row = ("mike", "waifu", 0, "virginia")
#     record = create_record(cursor_mock, row)
#     compare = {
#       "username": "mike",
#       "spouse": "waifu",
#       "budget": 0,
#       "state": "virginia"}
#     assert record["username"] == compare["username"]
#     assert record["spouse"] == compare["spouse"]
#     assert record["budget"] == compare["budget"]
#     assert record["state"] == compare["state"]
