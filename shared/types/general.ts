export interface AssetManagementFormValues
  extends AssetManagementFormInformationBasic,
    AssetManagementFormInformationDetailed,
    IAssetManagementFormExpirationsAndMaintenance {
  plate: string; // PLACA
  state_system: boolean; // ESTADO DEL SISTEMA
  state_physical: string; // ESTADO FÍSICO
}

export interface AssetManagementFormInformationBasic {
  transit_license: string; // LICENCIA DE TRÁNSITO
  brand: string; // MARCA
  line: string; // LÍNEA
  model: string; // MODELO
  displacement: string; // CILINDRAJE
  color: string; // COLOR
  service: string; // SERVICIO
  class: string; // CLASE
  body_type: string; // TIPO DE CARROCERÍA
  fuel_type: string; // TIPO DE COMBUSTIBLE
  capacity: string; // CAPACIDAD
  transmission: string; // TRANSMISIÓN
}

export interface AssetManagementFormInformationDetailed {
  number_engine: string; // NÚMERO DE MOTOR
  number_serial: string; // NÚMERO DE SERIE
  number_chassis: string; // NÚMERO DE CHASIS
  vin: string; // VIN (NÚMERO DE IDENTIDAD VEHICULAR)
  owner: string; // PROPIETARIO
  nit_owner: string; // NIT PROPIETARIO
  armor: string; // BLINDAJE
  power_hp: string; // POTENCIA HP
  doors: string; // PUERTAS
  import_declaration: string; // DECLARACIÓN DE IMPORTACIÓN
  import_date: string; // FECHA DE IMPORTACIÓN
  property_limitation: string; // LIMITACIÓN A LA PROPIEDAD
  registration_date: string; // FECHA DE MATRÍCULA
  transit_authority: string; // ORGANISMO DE TRÁNSITO
}

export interface IAssetManagementFormExpirationsAndMaintenance {
  unit: string; // UNIDAD DE MEDIDA
  measureType: string; // TIPO DE MEDIDA (KMS/HORAS)
}
