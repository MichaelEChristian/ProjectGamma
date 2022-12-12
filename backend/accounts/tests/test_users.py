from library.auth import verify_password


def test_verify_password_valid():

    input = "password"
    input2 = "$2b$12$lS57fBpYGs5sNZrUJkMtCuwiNfDZyxjpDT5sUP7kvLJfNTJUAwkxq"
    result = verify_password(input, input2)

    assert result


def test_verify_password_invalid():

    input = "Password"
    input2 = "$2b$12$lS57fBpYGs5sNZrUJkMtCuwiNfDZyxjpDT5sUP7kvLJfNTJUAwkxq"
    result = verify_password(input, input2)

    assert not result
