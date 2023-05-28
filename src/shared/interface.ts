export interface Vehicle {
  id: number;
  size: 'sm' | 'md' | 'lg';
  plate: string;
}

export interface ParkingLot {
  entryPoints: 3 | 4;
  vacantSlots: number;
}

export interface ParkingSlot {
  vehicle: string;
  location: string;
  timeIn: number;
  exceedingHourRate: number;
  baseFare: number;
}

export interface DistanceData {
  slot: string;
  distances: {NE: number; NW: number; SE: number; SW: number};
}
