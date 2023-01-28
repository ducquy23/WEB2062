'use strict';
const flights =
    '_Delayed_Departure;fao892183213;txl123712893;11:25+_Arrival;bru0921839123;fao921830218;11:45+_Delayed_Arrival;hel91208309123;fao812739;12:05+_Departure;fao082391830;lis8120932321312;12:30';
const getCode = str => str.slice(0, 3).toUpperCase();
for (const flight of flights.split("+")) {
    const [type, from, to, time] = flight.split(";");
    const output = `${type.replaceAll('_', " ")} from ${getCode(from)} to ${getCode(to)} (${time.replace(':', 'h')})`.padStart(35);
    console.log(output);

}