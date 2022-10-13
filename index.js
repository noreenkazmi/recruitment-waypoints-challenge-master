const data = [
  {
    timestamp: "2016-06-21T12:00:00.000Z",
    position: {
      latitude: 59.334,
      longitude: 18.0667,
    },
    speed: 6.3889,
    speed_limit: 8.33,
  },
  {
    timestamp: "2016-06-21T12:00:05.000Z",
    position: {
      latitude: 59.3337,
      longitude: 18.0662,
    },
    speed: 9.4,
    speed_limit: 8.33,
  },
  {
    timestamp: "2016-06-21T12:00:10.000Z",
    position: {
      latitude: 59.3331,
      longitude: 18.0664,
    },
    speed: 11.1,
    speed_limit: 8.33,
  },
  {
    timestamp: "2016-06-21T12:00:15.000Z",
    position: {
      latitude: 59.3327,
      longitude: 18.0665,
    },
    speed: 8.32,
    speed_limit: 8.33,
  },
  {
    timestamp: "2016-06-21T12:00:20.000Z",
    position: {
      latitude: 59.3323,
      longitude: 18.0666,
    },
    speed: 8.33,
    speed_limit: 8.33,
  },
];

const radians = (degrees) => {
  var TAU = 2 * Math.PI;
  return (degrees * TAU) / 360;
};

const getDistanceBetweenTwoPoints = (lat1, lon1, lat2, lon2) => {
  const R = 6373.0;
  lat1 = radians(lat1);
  lon1 = radians(lon1);
  lat2 = radians(lat2);
  lon2 = radians(lon2);
  const dlon = lon2 - lon1;
  const dlat = lat2 - lat1;
  const a =
    Math.pow(Math.sin(dlat / 2), 2) +
    Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(dlon / 2), 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance = R * c * 1000;

  return distance;
};

const getDuration = (date1, date2) => {
  const totalTime = new Date(date2).getSeconds() - new Date(date1).getSeconds();
  return totalTime;
};

const filteredData = data.filter((item) => item.speed > item.speed_limit);
//Problem 1
const distanceSpeedingPosition1 = filteredData[0].position;
const distanceSpeedingPosition2 = filteredData[1].position;

const distanceSpeeding = getDistanceBetweenTwoPoints(
  distanceSpeedingPosition1.latitude,
  distanceSpeedingPosition1.longitude,
  distanceSpeedingPosition2.latitude,
  distanceSpeedingPosition2.longitude
);
//Problem 2
const durationSpeeding = getDuration(
  filteredData[0].timestamp,
  filteredData[1].timestamp
);
//Problem 3
const veryFistPosition = data[0].position;
const lastPosition = data[data.length - 1].position;

const totalDistance = getDistanceBetweenTwoPoints(
  veryFistPosition.latitude,
  veryFistPosition.longitude,
  lastPosition.latitude,
  lastPosition.longitude
);
//Problem 4
const startingPosition = data[0].timestamp;
const endingPosition = data[data.length - 1].timestamp;
const totalDuration = getDuration(startingPosition, endingPosition);

console.log("Distance Speeding...", `${distanceSpeeding} m`);
console.log("Duration Speeding...", `${durationSpeeding} seconds`);
console.log("Total Distance...", `${totalDistance} m`);
console.log("Total Duration...", `${totalDuration} seconds`);