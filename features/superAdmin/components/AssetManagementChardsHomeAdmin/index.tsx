'use client';

import { useState, useMemo, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Icon from '@/shared/containers/Icons';
import Text from '@/shared/components/Text';
import ChartCard from '@/shared/components/ChartCard';
import Modal from '@/shared/components/Modal';
import CenteredButtonsModal from './CenteredButtonsModal';
import {
  ContChard,
  ContChards,
  ContTitle,
  EditBlocker,
  EditOverlay,
  ModalButtons,
  ModalContainer,
  ModalList,
  ModalOverlay,
  ModalTitle,
  ActionModalTitle,
} from './styled';
import testData from './testData.json';
import { ChartItem } from './types';
import { DragDropContext, Draggable } from 'react-beautiful-dnd';
import { Pencil, X } from 'lucide-react';
import StrictModeDroppable from './StrictModeDroppable';

// Importar el componente completo de recharts de forma dinámica
const RechartsComponent = dynamic(() => import('./RechartsWrapper'), {
  ssr: false,
});

interface AssetManagementChardsProps {
  title: string;
  icon: string;
}

export default function AssetManagementChardsHomeAdmin({
  title,
  icon,
}: AssetManagementChardsProps) {
  const [isClient, setIsClient] = useState(false);
  const [selectedTime, setSelectedTime] = useState<string>('6 meses');
  const [selectedStatus, setSelectedStatus] = useState<string>('actual');
  const [selectedDistribution, setSelectedDistribution] =
    useState<string>('2024-01');
  const [chartItems, setChartItems] = useState<ChartItem[]>([]);

  const [editMode, setEditMode] = useState(false); // Estado para modo edición
  const [showModal, setShowModal] = useState(false);
  const [showActionModal, setShowActionModal] = useState(false);
  const [selectedChartItem, setSelectedChartItem] = useState<ChartItem | null>(
    null
  );

  const [allCharts, setAllCharts] = useState<ChartItem[]>([]);
  const [selectedChartIds, setSelectedChartIds] = useState<string[]>([]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSelectChange =
    (setter: (value: string) => void) =>
    (option: { value: string; label: string }) => {
      setter(option.value);
    };

  const chartsData = useMemo(
    () => ({
      subscriptions:
        testData.pieGaugeChartDataBySemester[
          selectedStatus as keyof typeof testData.pieGaugeChartDataBySemester
        ] || testData.pieGaugeChartDataBySemester['6-meses'],
      companies:
        testData.pieGaugeChart2Data[
          selectedStatus as keyof typeof testData.pieGaugeChart2Data
        ] || testData.pieGaugeChart2Data['30-dias'],
      distribution:
        testData.horizontalChartDataByMonth[
          selectedDistribution as keyof typeof testData.horizontalChartDataByMonth
        ] || testData.horizontalChartDataByMonth['2024-01'],
    }),
    [selectedStatus, selectedDistribution]
  );

  useEffect(() => {
    if (chartsData) {
      const generatedChartItems: ChartItem[] = [
        {
          id: 'chart-1',
          type: 'gauge',
          title: 'Suscripciones',
          data: chartsData.subscriptions,
          options: testData.options.timeOptions,
          selectedValue: selectedStatus,
          centerText: '1500',
          subText: 'Total suscripciones',
        },
        {
          id: 'chart-2',
          type: 'pie',
          title: 'Empresas registradas',
          data: chartsData.companies,
          options: testData.options.timeOptions2,
          selectedValue: selectedStatus,
          centerText: '1200',
          subText: 'Total empresas registradas',
        },
        {
          id: 'chart-3',
          type: 'bar',
          title: 'Suscripciones por vencer',
          data: chartsData.subscriptions,
          options: testData.options.timeOptions,
          selectedValue: selectedDistribution,
          xDataKey: 'name',
          yDataKey: 'value',
        },
        {
          id: 'chart-4',
          type: 'pie',
          title: 'Estado de ordenes y reservas',
          data: chartsData.companies,
          options: testData.options.timeOptions2,
          selectedValue: selectedTime,
          xDataKey: '120',
          yDataKey: 'value',
        },
        {
          id: 'chart-5',
          type: 'area',
          title: 'Crecimiento de clientes',
          data: chartsData.subscriptions,
          options: testData.options.timeOptions,
          selectedValue: selectedTime,
          xDataKey: 'name',
          yDataKey: 'value',
          footerText: 'Pepsi ha incrementado un 13% sus ventas',
        },
        {
          id: 'chart-6',
          type: 'pie',
          title: 'Venta de Software',
          data: chartsData.companies,
          options: testData.options.timeOptions2,
          selectedValue: selectedTime,
          innerRadius: 0,
          outerRadius: 120,
        },
        {
          id: 'chart-7',
          type: 'pie',
          title: 'Venta de Software II',
          data: chartsData.subscriptions,
          options: testData.options.timeOptions,
          selectedValue: selectedTime,
          innerRadius: 0,
          outerRadius: 120,
        },
        {
          id: 'chart-8',
          type: 'area',
          title: 'Venta de Software III',
          data: chartsData.companies,
          options: testData.options.timeOptions2,
          selectedValue: selectedTime,
          innerRadius: 0,
          outerRadius: 120,
        },
      ];
      setAllCharts(generatedChartItems);
    }
  }, [chartsData, selectedStatus, selectedTime, selectedDistribution]);

  useEffect(() => {
    if (allCharts.length === 0) return;

    const savedSelectedIds = localStorage.getItem('selectedChartIds');
    const savedChartOrder = localStorage.getItem('chartItemsOrder');

    if (savedSelectedIds && savedChartOrder) {
      const ids: string[] = JSON.parse(savedSelectedIds);
      const order: string[] = JSON.parse(savedChartOrder);

      const filtered = order
        .map((id) => allCharts.find((item) => item.id === id))
        .filter((item): item is ChartItem => !!item)
        .filter((item) => ids.includes(item.id));

      setSelectedChartIds(ids);
      setChartItems(filtered);
    } else {
      const defaultIds = allCharts.slice(0, 8).map((item) => item.id);
      setSelectedChartIds(defaultIds);
      setChartItems(allCharts.filter((item) => defaultIds.includes(item.id)));
    }
  }, [allCharts]);

  const onDragEnd = (result: any) => {
    if (!result.destination) return;
    if (result.destination.index === result.source.index) return;

    const items = Array.from(chartItems);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setChartItems(items);
  };

  if (!isClient) return null;

  return (
    <>
      <ContTitle>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Icon icon={icon} size={32} />
          <Text styleName="Heading 4">{title}</Text>
        </div>
        <button
          onClick={() => {
            const nextEditMode = !editMode;
            setEditMode(!editMode);
            // Ya no mostramos el modal al salir del modo edición
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.5rem 1rem',
            backgroundColor: '#F8F8F8',
            color: 'gray',
            border: '1px solid #ccc',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
        >
          {editMode ? <X size={16} /> : <Pencil size={16} />}
          {editMode ? 'Salir de edición' : 'Modo edición'}
        </button>
      </ContTitle>

      <DragDropContext onDragEnd={onDragEnd}>
        <StrictModeDroppable
          droppableId="droppable"
          isDropDisabled={!editMode}
          isCombineEnabled={false}
          ignoreContainerClipping={false}
        >
          {(provided) => (
            <ContChards {...provided.droppableProps} ref={provided.innerRef}>
              {chartItems.map((item, index) => (
                <Draggable
                  key={item.id}
                  draggableId={item.id}
                  index={index}
                  isDragDisabled={!editMode}
                >
                  {(provided) => (
                    <ContChard
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      $editMode={editMode}
                    >
                      {editMode && (
                        <>
                          <EditBlocker />
                          <EditOverlay
                            onClick={(e) => {
                              // Detener la propagación para evitar conflictos con el drag and drop
                              e.stopPropagation();
                              setSelectedChartItem(item);
                              setShowActionModal(true);
                            }}
                            style={{ cursor: 'pointer' }}
                          >
                            <Pencil />
                            <span>Editar</span>
                          </EditOverlay>
                        </>
                      )}

                      <ChartCard
                        title={item.title}
                        options={item.options}
                        selectedValue={item.selectedValue}
                        onSelectChange={handleSelectChange(
                          item.id === 'chart-1' || item.id === 'chart-2'
                            ? setSelectedStatus
                            : item.id === 'chart-3'
                              ? setSelectedDistribution
                              : setSelectedTime
                        )}
                        footerText={item.footerText}
                      >
                        <div suppressHydrationWarning>
                          <RechartsComponent
                            type={item.type}
                            data={item.data}
                            centerText={item.centerText}
                            subText={item.subText}
                            xDataKey={item.xDataKey}
                            yDataKey={item.yDataKey}
                            innerRadius={item.innerRadius}
                            outerRadius={item.outerRadius}
                            height={index === 5 ? 400 : 300}
                          />
                        </div>
                      </ChartCard>
                    </ContChard>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ContChards>
          )}
        </StrictModeDroppable>
      </DragDropContext>

      {/* Codigo para renderizar el modal  */}

      {showModal && (
        <>
          <ModalOverlay onClick={() => setShowModal(false)} />
          <ModalContainer>
            <ModalTitle>Selecciona entre 3 y 6 gráficas</ModalTitle>
            <ModalList>
              {[
                ...chartItems,
                ...allCharts.filter(
                  (item) => !chartItems.some((i) => i.id === item.id)
                ),
              ].map((item) => (
                <li key={item.id}>
                  <label>
                    <input
                      type="checkbox"
                      checked={selectedChartIds.includes(item.id)}
                      onChange={() => {
                        const isSelected = selectedChartIds.includes(item.id);
                        const nextIds = isSelected
                          ? selectedChartIds.filter((id) => id !== item.id)
                          : [...selectedChartIds, item.id];

                        if (nextIds.length >= 3 && nextIds.length <= 7) {
                          setSelectedChartIds(nextIds);
                        }
                      }}
                    />
                    {item.title}
                  </label>
                </li>
              ))}
            </ModalList>
            <ModalButtons>
              <button onClick={() => setShowModal(false)}>Cancelar</button>
              <button
                disabled={
                  selectedChartIds.length < 3 || selectedChartIds.length > 7
                }
                onClick={() => {
                  const filtered = chartItems.filter((item) =>
                    selectedChartIds.includes(item.id)
                  );

                  const newSelectedCharts = selectedChartIds
                    .filter((id) => !filtered.some((item) => item.id === id))
                    .map((id) => allCharts.find((item) => item.id === id))
                    .filter((item): item is ChartItem => !!item);

                  const finalCharts = [...filtered, ...newSelectedCharts];

                  setChartItems(finalCharts);
                  localStorage.setItem(
                    'selectedChartIds',
                    JSON.stringify(selectedChartIds)
                  );
                  localStorage.setItem(
                    'chartItemsOrder',
                    JSON.stringify(finalCharts.map((i) => i.id))
                  );
                  setShowModal(false);
                }}
              >
                Guardar
              </button>
            </ModalButtons>
          </ModalContainer>
        </>
      )}

      {/* Modal de acciones (Eliminar/Cambiar) con botones centrados */}
      <CenteredButtonsModal
        isOpen={showActionModal && selectedChartItem !== null}
        onClose={() => setShowActionModal(false)}
        button1="ELIMINAR"
        button2="CAMBIAR"
        button1Style={true}
        button2Style={false}
        onButton1Click={() => {
          if (!selectedChartItem) return;
          const updatedChartItems = chartItems.filter(
            (item) => item.id !== selectedChartItem.id
          );
          const updatedSelectedIds = selectedChartIds.filter(
            (id) => id !== selectedChartItem.id
          );

          // Solo actualizar si quedan al menos 3 gráficas
          if (updatedSelectedIds.length >= 3) {
            setChartItems(updatedChartItems);
            setSelectedChartIds(updatedSelectedIds);
            localStorage.setItem(
              'selectedChartIds',
              JSON.stringify(updatedSelectedIds)
            );
            localStorage.setItem(
              'chartItemsOrder',
              JSON.stringify(updatedChartItems.map((i) => i.id))
            );
          }

          setShowActionModal(false);
        }}
        onButton2Click={() => {
          setShowActionModal(false);
          setShowModal(true);
        }}
      >
        <div style={{ textAlign: 'center', padding: '1rem 0 2rem' }}>
          <ActionModalTitle>
            ¿Quieres cambiar o eliminar el módulo?
          </ActionModalTitle>
        </div>
      </CenteredButtonsModal>
    </>
  );
}
