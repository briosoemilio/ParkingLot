import reactotron from 'reactotron-react-native';
import {largeSlots, mediumSlots, smallSlots} from '../data/parkingSlot';
import {distanceData} from '../data/distance';

// Debug log on reactotron
export const log = (...logs: any) => {
  reactotron.log?.(logs);
};

// Gives the nearest available parking slot
export const calculateNearestSlot = (
  occupiedSlots: any,
  size: string,
  entryPoint: string,
) => {
  const slotsToCheck: string[] =
    size === 'sm'
      ? [...smallSlots, ...mediumSlots, ...largeSlots]
      : size === 'md'
      ? [...mediumSlots, ...largeSlots]
      : [...largeSlots];

  const unoccupiedSlots = distanceData.filter((data: any) => {
    return (
      !occupiedSlots.includes(data.slot) && slotsToCheck.includes(data.slot)
    );
  });

  const initialValue = {slot: '', minDist: Infinity};
  const nearestSlotReducer = (
    acc: any,
    currentVal: {slot: any; distances: any},
  ) => {
    const {slot, distances} = currentVal;
    const distFromEntryPoint = distances[entryPoint];
    if (distFromEntryPoint < acc.minDist) {
      acc.slot = slot;
      acc.minDist = distFromEntryPoint;
    }
    return acc;
  };
  const nearestSlot = unoccupiedSlots.reduce(nearestSlotReducer, initialValue);
  return nearestSlot;
};

// Returns the exceeding hour rate
export const getExceedingHourRate = (slot: string) => {
  if (smallSlots.includes(slot)) {
    return 20;
  } else if (mediumSlots.includes(slot)) {
    return 60;
  } else if (largeSlots.includes(slot)) {
    return 100;
  }
};

// Formats time
export const formatTime = (dateTimeStamp: number) => {
  const date = new Date(dateTimeStamp);
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const month = months[date.getMonth()];
  const day = String(date.getDate()).padStart(2, '0');
  const year = date.getFullYear();
  const hour = date.getHours() % 12 || 12;
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const period = date.getHours() < 12 ? 'am' : 'pm';

  const formattedDateTime = `${month} ${day}, ${year} ${hour}:${minutes}${period}`;

  return formattedDateTime;
};

// Get total fare
export const getTotalFare = (timeIn: number, exceedingHourRate: number) => {
  const now = new Date().getTime();
  const timeInMiliseconds = now - timeIn;
  const millisecondsPerHour = 3600000; // Number of milliseconds in an hour
  const roundedHours = Math.ceil(timeInMiliseconds / millisecondsPerHour); // Rounded up number of hours

  let fare = 0;

  if (roundedHours <= 3) {
    fare = 40; // Fare for the first 3 hours
  } else {
    fare = 40 + (roundedHours - 3) * exceedingHourRate; // Fare for the first 3 hours plus additional rate per hour for the remaining hours
  }

  return `₱${fare}.00`;
};
