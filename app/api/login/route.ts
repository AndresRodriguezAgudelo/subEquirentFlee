import { NextRequest, NextResponse } from 'next/server';

import { verifyCredentials } from '../../../shared/data/services/authService';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { username, password } = body;

    // Usar el servicio de verificación de shared
    const result = verifyCredentials(username, password);
    
    if (result.success) {
      return NextResponse.json(result.data, { status: 200 });
    } else {
      return NextResponse.json(result.data, { status: 401 });
    }
  } catch (error) {
    console.error('Error en el login:', error);
    return NextResponse.json({ 
      message: 'Error en el servidor' 
    }, { status: 500 });
  }
}
