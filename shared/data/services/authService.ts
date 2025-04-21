// Función para verificar credenciales directamente
export const verifyCredentials = (username: string, password: string) => {

  if (username === 'admin' && password === '123123') {
    return {
      success: true,
      data: {
        message: 'Login exitoso',
        user: { username }
      }
    };
  } else {
    return {
      success: false,
      data: {
        message: 'Credenciales incorrectas'
      }
    };
  }
};

// Función para login mediante API
export const loginUser = async (username: string, password: any) => {
  try {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (response.ok) {
      return { success: true, data }; 
    } else {
      throw new Error(data.message || 'Error en el login');
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { success: false, message: error.message };
    } else {
      return { success: false, message: 'Error desconocido' };
    }
  }
};