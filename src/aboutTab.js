export default () => {
  const container = document.createElement("div");

  // Summary, History, Today
  const sectionOne = document.createElement("section");
  const title = document.createElement("h1");
  title.textContent = "About";

  const summary = document.createElement("p");
  summary.textContent =
    "Jack's Diner serves classic American comfort food with a focus on genuine, old-school hospitality. The menu reflects founder Jack Holt’s Greek-American heritage and the natural bounty of their midwest home. The diner offers 24-hour breakfast and entrees ranging from roasted chicken to Cajun shrimp and chicken pasta. The menu also includes sandwiches, salads, sides, desserts, and beverages. The diner has been around since 1962 and has become a landmark greasy spoon in the heart of downtown Grand Forks, North Dakota.";

  const subtitle = document.createElement("h3");
  subtitle.textContent = "History";

  const historyOne = document.createElement("p");
  historyOne.textContent =
    "Although Jack’s Diner has not ever moved from its original location on Park Place, the building itself has been rebuild and renovated many times. One especially notable incident happened in 1987 when a devastating fire engulfed Jack’s diner burning the entire building down. With the help of determined townspeople, fundraisers were organised, and volunteers dedicated their time to support the rebuilding efforts. Within a year, Jack’s Diner reopened its doors, this time with a beautiful brick facade that you can still see today!";
  const historyTwo = document.createElement("p");
  historyTwo.textContent =
    "The rebuilt diner stood as a testament to the strength of the community and the enduring spirit of Greenfield. It became a place where new memories were made, and old traditions were honored. The fire of 1987 was a tragic chapter in the history of Jack's Diner, but the resilience and unity it inspired were a testament to the unwavering spirit of the town and its people.";

  sectionOne.appendChild(title);
  sectionOne.appendChild(summary);
  sectionOne.appendChild(subtitle);
  sectionOne.appendChild(historyOne);
  sectionOne.appendChild(historyTwo);
  container.appendChild(sectionOne);

  return container;
};
