export function isEmptyObj(obj)  {
  if (!obj) return true;
  if(obj.constructor === Object
     && Object.keys(obj).length === 0)  {
    return true;
  }
  
  return false;
}

export function increaseVersion(version: string): string {
  const parts = version.split('.');
  
  if (parts.length !== 3) {
    return "";
  }
  
  const patch = parseInt(parts[2], 10) + 1;
  
  return `${parts[0]}.${parts[1]}.${patch}`;
}