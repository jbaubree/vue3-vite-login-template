export interface User {
  id: number
  token: string
  username: string
}
export interface UserCredentials {
  username: string
  password: string
}

export interface DecodedUserFromToken extends User {
  aud: string
  exp: EpochTimeStamp
  iat: EpochTimeStamp
  iss: string
  nbf: EpochTimeStamp
}
