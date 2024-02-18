export default () => {
  const container = document.createElement("div");

  // Appetizers
  const sectionOne = document.createElement("section");

  // Mains
  const sectionTwo = document.createElement("section");

  // Beverages
  const sectionThree = document.createElement("section");

  container.appendChild(sectionOne);
  container.appendChild(sectionTwo);
  container.appendChild(sectionThree);

  return container;
};
