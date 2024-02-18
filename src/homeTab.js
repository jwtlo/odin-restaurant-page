export default () => {
  const container = document.createElement("div");
  // Intro
  const sectionOne = document.createElement("section");

  const title = document.createElement("h1");
  title.textContent = "Jack's Diner";

  const subtitle = document.createElement("h3");
  subtitle.textContent =
    "A restaurant for breakfast, lunch, dinner, and anything in-between!";

  const intro = document.createElement("p");
  intro.textContent =
    "Indulge in a timeless dining experience at Jack's Diner, \
  a beloved establishment steeped in history and tradition. \
  Originally relocated from its family home in the 1940s, \
  this iconic diner has since become a cherished landmark, \
  serving up hearty comfort food and warm hospitality for generations. \
  With a menu that boasts classic American diner favorites, \
  Jack's Diner is the perfect place to savor a satisfying meal in a cozy, nostalgic atmosphere. \
  Step back in time and enjoy the simple pleasures of a bygone era at Jack's Diner.";

  sectionOne.appendChild(title);
  sectionOne.appendChild(subtitle);
  sectionOne.appendChild(intro);

  // Hours
  const sectionTwo = document.createElement("section");

  const hoursHeading = document.createElement("h2");
  hoursHeading.textContent = "Hours";

  const hoursContent = [];
  const hoursString =
    "Monday: 10am - 10pm,Tuesday: Closed,Wednesday: 9am-10pm,Thursday: 9am-10pm,Friday: 9am-11pm,Saturday: 9am-11pm,Sunday: 10am-10pm";
  hoursString.split(",").forEach((str) => {
    const day = document.createElement("p");
    day.textContent = str;
    hoursContent.push(day);
  });

  sectionTwo.appendChild(hoursHeading);
  hoursContent.forEach((day) => sectionTwo.appendChild(day));

  // Location
  const sectionThree = document.createElement("section");

  const locationHeading = document.createElement("h2");
  locationHeading.textContent = "Location";

  const locationContent = document.createElement("p");
  locationContent.textContent =
    "Come visit us at 888 Park Place, Grand Forks, ND 58203!";

  sectionThree.appendChild(locationHeading);
  sectionThree.appendChild(locationContent);

  // Image
  const image = document.createElement("img");
  image.setAttribute("src", "./decor.webp");
  image.setAttribute("alt", "Inside of the restaurant");
  image.setAttribute("width", "500");
  image.setAttribute("height", "500");

  // Add to container

  container.appendChild(sectionOne);
  container.appendChild(image);
  container.appendChild(sectionTwo);
  container.appendChild(sectionThree);

  return container;
};

// Intro generated with perplexity.ai

// Citations:
// [1] https://startribune.com/full_site_redirect/?rurl=http%3A%2F%2F%D0%B4%D0%B0%D1%83%D1%86%D1%80.%D1%80%D1%84%2Focmdq13fe43
// [2] https://diner349.rssing.com/chan-5140164/all_p4.html
// [3] https://breakfastwithnick.com/2017/12/29/2017-year-breakfast/
// [4] https://yelp.com/search?cflt=restaurants&find_loc=Hookstown%2C+PA+15050
// [5] https://yelp.com/search?cflt=diners&find_loc=Wakes+Colne+CO6+2DY"
