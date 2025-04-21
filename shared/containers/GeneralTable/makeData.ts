export type CarRegister = {
  id: number;
  plate: string;
  brand: string;
  responsable: string;
  line: string;
  class: string;
  model: string;
  chassisNumber: string;
  status: string;
  administration: string;
};

export const makeCarRegisterData = (len: number): CarRegister[] => {
  const data: CarRegister[] = [];
  for (let i = 0; i < len; i++) {
    data.push({
      id: i + 1,
      plate: `ABC${i + 100}`,
      brand: ['Chevrolet', 'Toyota', 'Ford', 'Mazda'][i % 4],
      responsable: [
        'Sin Asignar',
        'Andres',
        'Laura',
        'Alejandro',
        'Alvaro',
        'Luis',
        'Mafe',
        'Mauricio',
      ][i % 8],
      line: ['Spark', 'Corolla', 'Fiesta', 'CX-5'][i % 4],
      class: ['Sedan', 'Hatchback', 'SUV', 'Pickup'][i % 4],
      model: ['2020', '2021', '2022', '2023'][i % 4],
      chassisNumber: `1234567890${i}`,
      status: ['active', 'inactive'][i % 2],
      administration: [
        'Administración 1',
        'Administración 2',
        'Administración 3',
        'Administración 4',
      ][i % 4],
    });
  }
  return data;
};
