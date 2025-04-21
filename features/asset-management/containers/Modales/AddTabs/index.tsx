'use client';

import React, { useState } from 'react';
import Modal from '@/shared/components/Modal';
import Text from '@/shared/components/Text';
import Icon from '@/shared/containers/Icons';
import TooltipBox from '@/shared/components/TooltipBox';
import InputText from '@/shared/components/InputText';
import Select from '@/shared/components/Select';
import {
  ModalContainer,
  TitleContainer,
  IconContainer,
  ContentWrapper,
  SelectedTabsHeader,
  TabsContainer,
  TabItem,
  AvailableTabsContainer,
  InputsContainer,
  TableContainer,
  CheckboxContainer
} from './styled';

interface AddTabsProps {
  isOpen: boolean;
  onClose: () => void;
}

interface WorkItem {
  id: number;
  name: string;
  category: string;
  isSelected: boolean;
}

const categories = [
  { value: 'preventivo', label: 'Preventivo' },
  { value: 'mantenimiento', label: 'Mantenimiento' },
  { value: 'arreglo', label: 'Arreglo' },
  { value: 'diagnostico', label: 'Diagnóstico' },
];

// Datos de prueba para la tabla
const mockWorkItems: WorkItem[] = [
  { id: 1, name: 'Carga del sistema de aire acondicionado', category: 'Mantenimiento', isSelected: false },
  { id: 2, name: 'Cambio de aceite y filtro', category: 'Preventivo', isSelected: false },
  { id: 3, name: 'Revisión de frenos', category: 'Diagnóstico', isSelected: false },
  { id: 4, name: 'Alineación y balanceo', category: 'Mantenimiento', isSelected: false },
  { id: 5, name: 'Cambio de bujías', category: 'Preventivo', isSelected: false },
  { id: 6, name: 'Revisión del sistema eléctrico', category: 'Diagnóstico', isSelected: false },
  { id: 7, name: 'Cambio de filtro de aire', category: 'Preventivo', isSelected: false },
  { id: 8, name: 'Reparación de suspensión', category: 'Arreglo', isSelected: false },
  { id: 9, name: 'Cambio de correa de distribución', category: 'Mantenimiento', isSelected: false },
  { id: 10, name: 'Diagnóstico de motor', category: 'Diagnóstico', isSelected: false },
  { id: 11, name: 'Cambio de amortiguadores', category: 'Arreglo', isSelected: false },
  { id: 12, name: 'Revisión de dirección hidráulica', category: 'Diagnóstico', isSelected: false },
  { id: 13, name: 'Cambio de líquido de frenos', category: 'Preventivo', isSelected: false },
  { id: 14, name: 'Reparación de alternador', category: 'Arreglo', isSelected: false },
  { id: 15, name: 'Cambio de termostato', category: 'Mantenimiento', isSelected: false },
  { id: 16, name: 'Revisión de inyectores', category: 'Diagnóstico', isSelected: false },
  { id: 17, name: 'Cambio de pastillas de freno', category: 'Preventivo', isSelected: false },
  { id: 18, name: 'Reparación de caja de cambios', category: 'Arreglo', isSelected: false },
  { id: 19, name: 'Cambio de refrigerante', category: 'Mantenimiento', isSelected: false },
  { id: 20, name: 'Revisión de emisiones', category: 'Diagnóstico', isSelected: false },
  { id: 21, name: 'Cambio de filtro de combustible', category: 'Preventivo', isSelected: false },
  { id: 22, name: 'Reparación de bomba de agua', category: 'Arreglo', isSelected: false },
  { id: 23, name: 'Cambio de batería', category: 'Mantenimiento', isSelected: false },
  { id: 24, name: 'Revisión de catalizador', category: 'Diagnóstico', isSelected: false },
  { id: 25, name: 'Cambio de correa de servicios', category: 'Preventivo', isSelected: false },
];

// Datos de prueba para los tabs seleccionados
const mockTabs = [
  'Cambio de aceite',
  'Revisión de frenos',
  'Alineación',
  'Diagnóstico general'
];

export default function AddTabs({ isOpen, onClose }: AddTabsProps) {
  const [workItems, setWorkItems] = useState<WorkItem[]>(mockWorkItems);

  const handleCheckboxChange = (id: number) => {
    setWorkItems(items =>
      items.map(item =>
        item.id === id ? { ...item, isSelected: !item.isSelected } : item
      )
    );
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalContainer>
        {/* Primer bloque: Título */}
        <TitleContainer>
          <IconContainer>
            <Icon icon="wrench" size={32} color="#083d69" />
          </IconContainer>
          <Text styleName="Heading 4">Trabajos</Text>
        </TitleContainer>

        {/* Segundo bloque: Tabs seleccionados */}
        <ContentWrapper>
          <SelectedTabsHeader>
            <Text styleName="Body Medium">Selección de trabajos</Text>
            <TooltipBox data="Selecciona los trabajos que deseas agregar" />
          </SelectedTabsHeader>
          
          <TabsContainer>
            {mockTabs.map((item, index) => (
              <TabItem key={index}>
                <span>{item}</span>
                <span className="close-icon">×</span>
              </TabItem>
            ))}
          </TabsContainer>
        </ContentWrapper>

        {/* Tercer bloque: Listado de trabajos disponibles */}
        <ContentWrapper>
          <AvailableTabsContainer>
            <InputsContainer>
              <InputText
                label="Nombre del trabajo"
                tooltipData="Ingresa el nombre del trabajo a buscar"
                placeholder="Buscar trabajo..."
              />
              <Select
                label="Categoría de trabajo"
                tooltipData="Selecciona la categoría del trabajo"
                optionSelect={categories}
                placeholder="Seleccionar categoría"
              />
            </InputsContainer>

            <TableContainer>
              <table>
                <thead>
                  <tr>
                    <th>Trabajo</th>
                    <th>Categoría</th>
                  </tr>
                </thead>
                <tbody>
                  {workItems.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <CheckboxContainer>
                          <input
                            type="checkbox"
                            checked={item.isSelected}
                            onChange={() => handleCheckboxChange(item.id)}
                          />
                          <span>{item.name}</span>
                        </CheckboxContainer>
                      </td>
                      <td>{item.category}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </TableContainer>
          </AvailableTabsContainer>
        </ContentWrapper>
      </ModalContainer>
    </Modal>
  );
}
