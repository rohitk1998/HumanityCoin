export function generateUserIcon(firstName, lastName) {
  const fullName = firstName + lastName;

  let hash = 0;
  for (let i = 0; i < fullName.length; i++) {
    hash = fullName.charCodeAt(i) + ((hash << 5) - hash);
  }

  // Generate the color using the hash value
  const color = "#" + ((hash & 0x00ffffff) | 0x800000).toString(16);

  // firstletterCap is custom prototype
  let fName = firstName?.charAt(0).toUpperCase();
  let lName = lastName?.charAt(0).toUpperCase();

  return {
    shortName: `${fName}${lName}`,
    backColor: color,
  };
}
