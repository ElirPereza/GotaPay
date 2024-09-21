import { SignIn, useSignIn } from "@clerk/nextjs";
import { useEffect } from "react";

export default function Page() {
  const { isLoaded, signIn } = useSignIn();

  useEffect(() => {
    const createUserInDB = async () => {
      if (signIn && signIn.status === "complete") {
        const user = signIn.user; // Obtenemos el usuario autenticado

        if (user) {
          const response = await fetch('/api/user', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: user.primaryEmailAddress.emailAddress,
              clerkId: user.id,
              role: 'USER',
            }),
          });

          if (!response.ok) {
            const errorData = await response.json();
            console.error('Error creating user in DB:', errorData);
          }
        }
      }
    };

    if (isLoaded) {
      createUserInDB();
    }
  }, [isLoaded, signIn]); // Se ejecuta cuando se carga el estado o cambia el estado de inicio de sesión

  if (!isLoaded) {
    // Puedes mostrar un cargador o nada mientras se carga
    return <div>Loading...</div>;
  }

  return <SignIn />;
}
