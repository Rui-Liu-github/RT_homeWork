export function combineObjects(obj1, obj2) {
  // Combine the objects
  // if the objects have the same key, use the value from obj2
  // Example 1: const obj1 = {name: 'Alice', age: 25};
  // const obj2 = {job: 'teacher'};
  // Expected output: {name: 'Alice', age: 25, job: 'teacher'}
  // Example 2: const obj1 = {name: 'Alice', age: 25};
  // const obj2 = {name: 'John', age: 21};
  // Expected output: {name: 'John', age: 21}
}

export function changeValueOf(obj, key, value) {
  // update the obj in place, do not return a new obj
  // Change the value of the key in the object
  // Example 1: const obj = {name: 'Alice', age: 25};
  // changeValueOf(obj, 'age', 21);
  // Expected obj: {name: 'Alice', age: 21}
  // Example 2: const obj = {name: 'Alice', age: 25};
  // changeValueOf(obj, 'job', 'teacher');
  // Expected obj: {name: 'Alice', age: 25, job: 'teacher'}
}

export function cancelExpiredEvents(events) {
  // update the events in place, do not return a new obj

  // Cancel the expired events
  // Example: const events = [
  //   event1: {name: 'Birthday Party', date: '2020-01-01', isCanceled: false},
  //   event2: {name: 'New Year Party', date: '2021-01-01', isCanceled: false},
  //   event3: {name: 'Christmas Party', date: '2024-12-25', isCanceled: false}
  // ];
  // Expected events: // an array of events, but event1 and event2 are canceled, event3 is not canceled
}

export function findEventByType(events, type) {
  // Find the event by type
  // Example: const events = [
  //   event1: {name: 'Birthday Party', type: 'private'},
  //   event2: {name: 'New Year Party', type: 'public'},
  //   event3: {name: 'Christmas Party', type: 'private'}
  // ];
  // findEventByType(events, 'private');
  // Expected output: [{name: 'Birthday Party', type: 'private'}, {name: 'Christmas Party', type: 'private'}]
}
