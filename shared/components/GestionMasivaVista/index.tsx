'use client';

import React from 'react';
import Text from '@/shared/components/Text';
import Icon from '@/shared/containers/Icons';
import InputUploadDocument from '@/shared/components/InputUploadDocument';
import TableList from '@/shared/components/TableList';
import { 
    GeneralContainer, 
    Container, 
    TopBlock, 
    UploadSection, 
    ButtonsSection, 
    DownloadButton, 
    UpdateButton, 
    BottomBlock,
    TitleSection 
} from './styled';

export default function VistaGestionMasiva() {
    const vehicleColumns = [
        { header: 'Placa', accessor: 'placa' as const },
        { header: 'Marca', accessor: 'marca' as const },
        { header: 'Línea', accessor: 'linea' as const },
        { header: 'Clase', accessor: 'clase' as const },
        { header: 'Modelo', accessor: 'modelo' as const },
        { header: 'Chasis', accessor: 'chasis' as const },
        { header: 'Estado', accessor: 'estado' as const },
        { header: 'Administración', accessor: 'administracion' as const },
    ];

    const mockData = [
        {
            id: 1,
            placa: 'ABC123',
            marca: 'Toyota',
            linea: 'Hilux',
            clase: 'Camioneta',
            modelo: '2023',
            chasis: 'CHT123456789',
            estado: 'Activo',
            administracion: 'En Administración',
        },
        {
            id: 2,
            placa: 'XYZ789',
            marca: 'Chevrolet',
            linea: 'Captiva',
            clase: 'SUV',
            modelo: '2022',
            chasis: 'CHC987654321',
            estado: 'Inactivo',
            administracion: 'Sin Administración',
        },
    ];

    return (
        <GeneralContainer>
            <Container>
                <TopBlock>
                    <UploadSection>
                        <InputUploadDocument 
                            title="Cargar Archivo"
                            tooltipData="Selecciona un archivo para actualizar la información"
                        />
                    </UploadSection>
                    <ButtonsSection>
                        <DownloadButton>
                            <Icon icon="download" size={20} />
                            <Text styleName="Content Accent">Descargar Plantilla</Text>
                        </DownloadButton>
                        <UpdateButton>
                            <Text styleName="Content Accent">Actualizar Datos</Text>
                        </UpdateButton>
                    </ButtonsSection>
                </TopBlock>

                <BottomBlock>
                    <TitleSection>
                        <Text styleName="Highligth Standard">Referencia para carga de datos</Text>
                        <Text styleName="Body Medium">Verifica la información antes de actualizar la base de datos</Text>
                    </TitleSection>
                    <TableList
                        customColumns={vehicleColumns}
                        data={mockData}
                    />
                </BottomBlock>
            </Container>
        </GeneralContainer>
    );
}