'use client';

import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

import AuthContainer from '@/shared/containers/AuthContainer';

import { LoginForm, Form, Input, SubmitButton } from './styled';

export const ChangePassword = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);

    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handlePasswordChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword2(e.target.value);
    };

    return (
        <>
            <AuthContainer>
                <LoginForm>
                    <h2 style={{ fontStyle: 'bold' }}>Escribe tu nueva contraseña</h2>
                    <br />
                    <p style={{ fontSize: '0.9rem' }}>Para mayor seguridad te recomendamos que tu contraseña contenga mayúsculas,
                        minúsculas, números y caracteres especiales</p>
                    <br />
                    <Form>
                        
                        <div style={{ position: 'relative' }}>
                            <Input
                                type={showPassword ? 'text' : 'password'}
                                id='password'
                                name='password'
                                placeholder='Escribe tu nueva contraseña'
                                value={password}
                                onChange={handlePasswordChange}
                                required
                                />
                            <div
                                onClick={() => setShowPassword(!showPassword)}
                                style={{
                                    position: 'absolute',
                                    top: '35%',
                                    right: '10px',
                                    transform: 'translateY(-50%)',
                                    cursor: 'pointer',
                                }}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </div>
                        </div>

                        <div style={{ position: 'relative' }}>
                            <Input
                                type={showPassword2 ? 'text' : 'password'}
                                id='password2'
                                name='password2'
                                placeholder='Confirma tu nueva contraseña'
                                value={password2}
                                onChange={handlePasswordChange2}
                                required
                            />
                            <div
                                onClick={() => setShowPassword2(!showPassword2)}
                                style={{
                                    position: 'absolute',
                                    top: '35%',
                                    right: '10px',
                                    transform: 'translateY(-50%)',
                                    cursor: 'pointer',
                                }}
                            >
                                {showPassword2 ? <FaEyeSlash /> : <FaEye />}
                            </div>
                        </div>
                        <SubmitButton type='submit'>Enviar</SubmitButton>
                    </Form>
                </LoginForm>
            </AuthContainer>
        </>
    );
};
