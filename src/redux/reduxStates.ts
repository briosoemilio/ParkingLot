import {useSelector} from 'react-redux';

export const getParkingLot = () => {
  const entryPoints = useSelector((state: any) => state.parkingLot.entryPoints);
  const vacantSlots = useSelector((state: any) => state.parkingLot.vacantSlots);
  const occupiedSlots = useSelector(
    (state: any) => state.parkingLot.occupiedSlots,
  );

  return {
    entryPoints,
    vacantSlots,
    occupiedSlots,
  };
};

export const getVehicles = () => {
  const parkedVehicles = useSelector(
    (state: any) => state.vehicles.parkedVehicles,
  );
  return parkedVehicles;
};
