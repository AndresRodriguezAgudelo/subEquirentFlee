'use client'

import React, { useState } from 'react';
import {
    FormContainer,
    TitleSection,
    TitleContainer,
    IconContainer,
    ButtonGroup,
    FormSection,
    InputGroup,
    FutureTabsPlaceholder,
    ThirdSection,
    CircleSeparator,
    RowInputGroup,
    SectionTitle,
    SubSectionTitle,
    ActionButtons
} from './styled';
import Text from '@/shared/components/Text';
import Icon from '@/shared/containers/Icons';
import Input from '@/shared/components/InputText';
import Select from '@/shared/components/Select';
import CheckBoxGroup from '@/shared/components/CheckBoxGroup';
import Button from '@/shared/components/Button';

type RutinaType = 'basica' | 'personalizada' | 'marca';

type FormData = {
    nombre: string;
    marca: string;
    vigencia: string | null;
    inicioVigencia: {
        fechaMatricula: boolean;
        ultimoMantenimiento: boolean;
    };
    unidadMedida: {
        kilometros: boolean;
        horas: boolean;
    };
    periodicidad: string | null;
    alertaKilometraje: {
        inicioAlerta: string | null;
        segundaAlerta: string | null;
        tiempoCritico: string | null;
    };
    alertaTiempo: {
        inicioAlerta: string | null;
        segundaAlerta: string | null;
        tiempoCritico: string | null;
    };
};

export default function NuevaRutinaVista() {
    const [selectedType, setSelectedType] = useState<RutinaType>('basica');
    const [formData, setFormData] = useState<FormData>({
        nombre: '',
        vigencia: null,
        marca: '',
        inicioVigencia: {
            fechaMatricula: false,
            ultimoMantenimiento: false
        },
        unidadMedida: {
            kilometros: false,
            horas: false
        },
        periodicidad: null,
        alertaKilometraje: {
            inicioAlerta: null,
            segundaAlerta: null,
            tiempoCritico: null
        },
        alertaTiempo: {
            inicioAlerta: null,
            segundaAlerta: null,
            tiempoCritico: null
        }
    });

    const vigenciaOptions = [
        { value: '1', label: '1 año' },
        { value: '2', label: '2 años' },
        { value: '3', label: '3 años' },
        { value: '4', label: '4 años' },
        { value: '5', label: '5 años' },
    ];

    const kilometrajeOptions = [
        { value: '1000', label: '1.000 km' },
        { value: '2000', label: '2.000 km' },
        { value: '5000', label: '5.000 km' },
        { value: '10000', label: '10.000 km' },
    ];

    const tiempoOptions = [
        { value: '5', label: '5 días' },
        { value: '10', label: '10 días' },
        { value: '15', label: '15 días' },
        { value: '20', label: '20 días' },
    ];

    const handleInicioVigenciaChange = (tipo: 'fechaMatricula' | 'ultimoMantenimiento') => {
        setFormData(prev => ({
            ...prev,
            inicioVigencia: {
                fechaMatricula: tipo === 'fechaMatricula',
                ultimoMantenimiento: tipo === 'ultimoMantenimiento'
            }
        }));
    };

    const handleUnidadMedidaChange = (tipo: 'kilometros' | 'horas') => {
        setFormData(prev => ({
            ...prev,
            unidadMedida: {
                kilometros: tipo === 'kilometros',
                horas: tipo === 'horas'
            }
        }));
    };

    const handleSave = () => {
        // Aquí iría la lógica para guardar la rutina
        console.log('Guardando rutina:', formData);
    };

    const handleCancel = () => {
        // Aquí iría la lógica para cancelar
        console.log('Cancelando...');
    };

    return (
        <FormContainer>
            {/* Primera Sección - Título y Tipo */}
            <TitleSection>
                <TitleContainer>
                    <IconContainer>
                        <Icon icon="wrench" size={24} color="#083d69" />
                    </IconContainer>
                    <Input
                        value={formData.nombre}
                        onChange={async (e) => {
                            setFormData({...formData, nombre: e.target.value});
                            return true;
                        }}
                        placeholder="Nombre de la Rutina de Mantenimiento"
                    />
                </TitleContainer>

                <ButtonGroup>
                    <Button 
                        variant={selectedType === 'basica' ? 'primary' : 'secondary'}
                        onClick={() => setSelectedType('basica')}
                    >
                        Rutina Básica
                    </Button>
                    <CircleSeparator />
                    <Button 
                        variant={selectedType === 'personalizada' ? 'primary' : 'secondary'}
                        onClick={() => setSelectedType('personalizada')}
                    >
                        Rutina Personalizada
                    </Button>
                    <CircleSeparator />
                    <Button 
                        variant={selectedType === 'marca' ? 'primary' : 'secondary'}
                        onClick={() => setSelectedType('marca')}
                    >
                        Rutina de Marca
                    </Button>
                </ButtonGroup>
            </TitleSection>

            {/* Segunda Sección - Formulario */}
            <FormSection>
                <RowInputGroup>
                    <Input
                        label="Marca"
                        value={formData.marca}
                        onChange={async (e) => {
                            setFormData({...formData, marca: e.target.value});
                            return true;
                        }}
                        placeholder="Ingrese la marca"
                        tooltipData='Marca del vehículo'
                        description='enviaremos un correo de notificacion'
                    />
                    <Select
                        label="Vigencia"
                        value={formData.vigencia}
                        onChangeSelect={(selected) => setFormData({...formData, vigencia: selected.value})}
                        optionSelect={vigenciaOptions}
                        placeholder="Seleccione la vigencia"
                        tooltipData="Seleccione el período de vigencia"
                        description="Enviaremos un correo de notificacion"
                    />
                    <CheckBoxGroup
                        title="Inicio de Vigencia"
                        headers={["Fecha Matrícula", "Últ Mantenimiento"]}
                        tooltipData="Seleccione cuando inicia la vigencia"                        onChange={(selected) => {
                            const fechaMatricula = selected.includes("Fecha de Matrícula");
                            const ultimoMantenimiento = selected.includes("Último Mantenimiento");
                            setFormData(prev => ({
                                ...prev,
                                inicioVigencia: {
                                    fechaMatricula,
                                    ultimoMantenimiento
                                }
                            }));
                        }}
                    />
                    <CheckBoxGroup
                        title="Unidad de Medida"
                        headers={["Kilómetros", "Horas"]}
                        tooltipData="Seleccione la unidad de medida"                        onChange={(selected) => {
                            const kilometros = selected.includes("Kilómetros");
                            const horas = selected.includes("Horas");
                            setFormData(prev => ({
                                ...prev,
                                unidadMedida: {
                                    kilometros,
                                    horas
                                }
                            }));
                        }}
                    />
                </RowInputGroup>

            </FormSection>

            <FutureTabsPlaceholder>
                Futuros tabs components
            </FutureTabsPlaceholder>

            <FormSection>
                <SectionTitle>
                    <Text styleName="Content Accent">Configuración de Alertas</Text>
                </SectionTitle>

                <RowInputGroup>
                    <Input
                        label="Periodicidad"
                        value={formData.periodicidad || ''}
                        onChange={async (e) => {
                            setFormData({...formData, periodicidad: e.target.value});
                            return true;
                        }}
                        placeholder="Ingrese la periodicidad"
                    />
                    <FutureTabsPlaceholder>
                        Futuros tabs components
                    </FutureTabsPlaceholder>
                </RowInputGroup>

                <SubSectionTitle>
                    <Text styleName="Caption Standard">Alerta por variable de control</Text>
                </SubSectionTitle>

                <RowInputGroup>
                    <Select
                        label="Inicio de Alerta"
                        value={formData.alertaKilometraje.inicioAlerta}
                        onChangeSelect={(selected) => setFormData(prev => ({
                            ...prev,
                            alertaKilometraje: { ...prev.alertaKilometraje, inicioAlerta: selected.value }
                        }))}
                        optionSelect={kilometrajeOptions}
                        placeholder="Seleccione el kilometraje"
                        tooltipData="Primera notificación por kilometraje"
                        description="Se enviará una alerta cuando se alcance este kilometraje"
                    />
                    <Select
                        label="Segunda Alerta"
                        value={formData.alertaKilometraje.segundaAlerta}
                        onChangeSelect={(selected) => setFormData(prev => ({
                            ...prev,
                            alertaKilometraje: { ...prev.alertaKilometraje, segundaAlerta: selected.value }
                        }))}
                        optionSelect={kilometrajeOptions}
                        placeholder="Seleccione el kilometraje"
                        tooltipData="Segunda notificación por kilometraje"
                        description="Se enviará otra alerta en este kilometraje"
                    />
                    <Select
                        label="Tiempo Crítico para Gestión"
                        value={formData.alertaKilometraje.tiempoCritico}
                        onChangeSelect={(selected) => setFormData(prev => ({
                            ...prev,
                            alertaKilometraje: { ...prev.alertaKilometraje, tiempoCritico: selected.value }
                        }))}
                        optionSelect={kilometrajeOptions}
                        placeholder="Seleccione el kilometraje"
                        tooltipData="Alerta crítica por kilometraje"
                        description="Última alerta antes de alcanzar el límite"
                    />
                </RowInputGroup>

                <SubSectionTitle>
                    <Text styleName="Caption Standard">Alerta por Tiempo</Text>
                </SubSectionTitle>

                <RowInputGroup>
                    <Select
                        label="Inicio de Alerta"
                        value={formData.alertaTiempo.inicioAlerta}
                        onChangeSelect={(selected) => setFormData(prev => ({
                            ...prev,
                            alertaTiempo: { ...prev.alertaTiempo, inicioAlerta: selected.value }
                        }))}
                        optionSelect={tiempoOptions}
                        placeholder="Seleccione los días"
                        tooltipData="Primera notificación por tiempo"
                        description="Se enviará una alerta cuando falten estos días"
                    />
                    <Select
                        label="Segunda Alerta"
                        value={formData.alertaTiempo.segundaAlerta}
                        onChangeSelect={(selected) => setFormData(prev => ({
                            ...prev,
                            alertaTiempo: { ...prev.alertaTiempo, segundaAlerta: selected.value }
                        }))}
                        optionSelect={tiempoOptions}
                        placeholder="Seleccione los días"
                        tooltipData="Segunda notificación por tiempo"
                        description="Se enviará otra alerta cuando falten estos días"
                    />
                    <Select
                        label="Tiempo Crítico para Gestión"
                        value={formData.alertaTiempo.tiempoCritico}
                        onChangeSelect={(selected) => setFormData(prev => ({
                            ...prev,
                            alertaTiempo: { ...prev.alertaTiempo, tiempoCritico: selected.value }
                        }))}
                        optionSelect={tiempoOptions}
                        placeholder="Seleccione los días"
                        tooltipData="Alerta crítica por tiempo"
                        description="Última alerta antes de alcanzar la fecha límite"
                    />
                </RowInputGroup>
            </FormSection>

            {/* Tercera Sección - Placeholder */}
            <ActionButtons>
                <Button 
                    variant="secondary"
                    onClick={handleCancel}
                >
                    Cancelar
                </Button>
                <Button 
                    variant="primary"
                    onClick={handleSave}
                >
                    Guardar Rutina
                </Button>
            </ActionButtons>
            <ThirdSection />

        </FormContainer>
    );
}