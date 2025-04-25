# User Registration API Documentation

## Endpoint

`POST /users/register`

## Description

Registers a new user in the system. This endpoint validates the input, hashes the password, creates a user, and returns an authentication token along with the user data.

## Request Body

Send a JSON object with the following structure:

```json
{
  "email": "user@example.com",
  "password": "yourpassword",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  }
}
```

### Field Requirements

- `email` (string, required): Must be a valid email address.
- `password` (string, required): Must be at least 6 characters long.
- `fullname.firstname` (string, required): Must be at least 3 characters long.
- `fullname.lastname` (string, optional): If provided, must be at least 3 characters long.

## Responses

| Status Code | Description                                                                                  |
|-------------|----------------------------------------------------------------------------------------------|
| 201         | User registered successfully. Returns `{ token, user }`.                                     |
| 400         | Validation failed. Returns `{ errors: [...] }` with details about the validation errors.     |
| 500         | Internal server error.                                                                       |

## Example Success Response

```json
{
  "token": "jwt_token_here",
  "user": {
    "_id": "user_id_here",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "user@example.com"
    // other user fields
  }
}
```

## Example Error Response

```json
{
  "errors": [
    {
      "msg": "First name must be at least 3 characters long",
      "param": "fullname.firstname",
      "location": "body"
    }
  ]
}
```

## Notes

- The password is securely hashed before being stored.
- The returned token can be used for authenticated requests.
