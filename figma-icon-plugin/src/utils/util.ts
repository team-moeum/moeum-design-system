export function isEmptyObj(obj)  {
  if (!obj) return true;
  if(obj.constructor === Object
     && Object.keys(obj).length === 0)  {
    return true;
  }
  
  return false;
}