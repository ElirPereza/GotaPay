export {}

// Create a type for the roles
export type Roles = 'admin' | 'owner' | 'member'

declare global {
 interface CustomJwtSessionClaims {
 metadata: {
 role?: Roles
 }
 }
}