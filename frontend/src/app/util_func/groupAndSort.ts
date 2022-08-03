export function groupbyKeys(data:any[], keyFields, accumulator) {
    var createNewObj = (ref, fields) => {
      return fields.reduce((result, key) => {
        return Object.assign(result, { [key] : ref[key] });
      }, {});
    }
    return Object.values(data.reduce((result, object, index, ref) => {
      let key = keyFields.map(key => object[key]).join('');
      let val = result[key] || createNewObj(object, keyFields);
      val[accumulator] = (val[accumulator] || 0) + object[accumulator];
      return Object.assign(result, { [key] : val });
    }, {}));
  }

export function sortByKey(data:any[],keyField){
    data=data.sort((a, b) => (a[keyField] > b[keyField] ? -1 : 1));
    return data;
}

export function countbyKeys(data:any[], keyFields, accumulator) {
  var createNewObj = (ref, fields) => {
    return fields.reduce((result, key) => {
      return Object.assign(result, { [key] : ref[key] });
    }, {});
  }
  return Object.values(data.reduce((result, object, index, ref) => {
    let key = keyFields.map(key => object[key]).join('');
    let val = result[key] || createNewObj(object, keyFields);
    val[accumulator] = (val[accumulator] || 0) + 1;
    return Object.assign(result, { [key] : val });
  }, {}));
}

export function getDayOfWeek(date) {
  const dayOfWeek = new Date(date).getDay();    
  return isNaN(dayOfWeek) ? null : 
    ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'][dayOfWeek];
}