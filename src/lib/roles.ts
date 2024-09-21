import { Roles } from '@/types/globals'
import { auth } from '@clerk/nextjs/server'

//funtion for verification roles

export const checkRole = (role: Roles) => {
 const { sessionClaims } = auth()

 return sessionClaims?.metadata.role === role
}
