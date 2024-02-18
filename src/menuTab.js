export default () => {
  const container = document.createElement("div");

  const menuItems = {
    appetizers: [
      {
        name: "Artichoke & Pepper Sauté",
        description:
          "Boiled artichokes with pepper, oregano, and Italian spices.",
        price: "$10",
      },
      {
        name: "Mushroom Sizzler",
        description:
          "Sautéed mushrooms with a mixture of King Crab and garlic.",
        price: "$12",
      },
      {
        name: "Escargot & Garlic Bread",
        description:
          "Escargot in butter, garlic, and parmesan cheese, served with garlic bread.",
        price: "$15",
      },
    ],
    mains: [
      {
        name: "Grilled Chicken New Orleans",
        description:
          "Grilled chicken breast with mixed greens, Monterey Jack, cheddar, bacon, tomatoes, and almonds.",
        price: "$20",
      },
      {
        name: "Cajun Shrimp & Chicken Pasta",
        description:
          "Cajun grilled shrimp or chicken with andouille sausage, roasted red peppers, onions, and spicy Cajun cream sauce over fusilli pasta.",
        price: "$24",
      },
      {
        name: "Steak & Mushroom Skillet",
        description:
          "A hearty skillet with tender steak, sautéed mushrooms, and a rich red wine sauce.",
        price: "$29",
      },
    ],
    beverages: [
      {
        name: "Jack's Lemonade",
        description: "A refreshing blend of lemon juice, sugar, and ice.",
        price: "$4",
      },
      {
        name: "Strawberry Basil Lemonade",
        description:
          "A twist on the classic with fresh strawberries and basil.",
        price: "$5",
      },
      {
        name: "Cherry Limeade",
        description: "A sweet and tangy combination of cherry and lime juices.",
        price: "$5",
      },
    ],
  };

  function createMenuItem({ name, description, price }) {
    const card = document.createElement("div");
    card.className = "menu-item";

    const itemName = document.createElement("h3");
    itemName.textContent = name;
    itemName.className = "menu-item-name";

    const itemDescription = document.createElement("p");
    itemDescription.textContent = description;
    itemDescription.className = "menu-item-description";

    const itemPrice = document.createElement("p");
    itemPrice.textContent = price;
    itemPrice.className = "menu-item-price";

    card.appendChild(itemName);
    card.appendChild(itemDescription);
    card.appendChild(itemPrice);
    return card;
  }

  // Appetizers
  const sectionOne = document.createElement("section");
  const title = document.createElement("h1");
  title.textContent = "Menu";
  const sectionOneTitle = document.createElement("h2");
  sectionOneTitle.className = "menu-heading";
  sectionOneTitle.textContent = "Appetizers";
  sectionOne.appendChild(title);
  sectionOne.appendChild(sectionOneTitle);
  menuItems.appetizers.forEach((item) =>
    sectionOne.appendChild(createMenuItem(item))
  );

  // Mains
  const sectionTwo = document.createElement("section");
  const sectionTwoTitle = document.createElement("h2");
  sectionTwoTitle.className = "menu-heading";
  sectionTwoTitle.textContent = "Mains";
  sectionTwo.appendChild(sectionTwoTitle);
  menuItems.appetizers.forEach((item) =>
    sectionTwo.appendChild(createMenuItem(item))
  );

  // Beverages
  const sectionThree = document.createElement("section");
  const sectionThreeTitle = document.createElement("h2");
  sectionThreeTitle.className = "menu-heading";
  sectionThreeTitle.textContent = "Beverages";
  sectionThree.appendChild(sectionThreeTitle);
  menuItems.appetizers.forEach((item) =>
    sectionThree.appendChild(createMenuItem(item))
  );

  container.appendChild(sectionOne);
  container.appendChild(sectionTwo);
  container.appendChild(sectionThree);

  return container;
};

// Menu generated with the help of perplexity.ai
