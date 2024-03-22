"use strict";

const userDb = [
  {
    id: 1,
    userName: "Hassan Sattar",
    isActive: true,
  },
  {
    id: 2,
    userName: "Bilal Shah",
    isActive: false,
  },
  {
    id: 3,
    userName: "Kamran Gul",
    isActive: false,
  },
  {
    id: 4,
    userName: "Ahmad Naseem",
    isActive: false,
  },
  {
    id: 5,
    userName: "Ahsan Naseem",
    isActive: true,
  },
  {
    id: 6,
    userName: "Khizar Iqbal",
    isActive: false,
  },
  {
    id: 7,
    userName: "Muavia Khan",
    isActive: true,
  },
  {
    id: 8,
    userName: "Zaid Khan",
    isActive: true,
  },
  {
    id: 9,
    userName: "Uzair Khan",
    isActive: true,
  },
  {
    id: 10,
    userName: "Ali Khan",
    isActive: false,
  },
];

const cardsContainer = document.querySelector(".cards-container");
const activeCardsContainer = document.querySelector(".active-cards");
const inactiveCardsContainer = document.querySelector(".inactive-cards");
const container = document.querySelector(".actives-container");

function cardRenderer(users) {
  return users
    .map((user) => {
      return `<div class="card">
              <div class="user-name">${user.userName}</div>
              <div class="${
                user.isActive ? "active-status" : "inactive-status"
              } user-status">${user.isActive ? "Active" : "Inactive"}</div>
              <button class="${
                user.isActive ? "btn btn-active" : "btn btn-inactive"
              }" data-card-id="${user.id}">${
        user.isActive ? "Deactivate the user!" : "Activate the user!"
      }</button>
            </div>`;
    })
    .join("");
}

const generateCard = (userDb) => {
  const activeUsers = userDb.filter((user) => user.isActive);
  const inactiveUsers = userDb.filter((user) => !user.isActive);

  const activeCards = cardRenderer(activeUsers);
  activeCardsContainer.innerHTML = activeCards;

  const inactiveCards = cardRenderer(inactiveUsers);
  inactiveCardsContainer.innerHTML = inactiveCards;

  activeCardsContainer.style.display = activeUsers.length > 0 ? "flex" : "none";
  inactiveCardsContainer.style.display =
    inactiveUsers.length > 0 ? "flex" : "none";

  addEventListenersToButtons();
};

function addEventListenersToButtons() {
  const buttons = document.querySelectorAll(".btn");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const cardId = parseInt(this.getAttribute("data-card-id"));
      const clickedCard = userDb.find((c) => c.id === cardId);

      clickedCard.isActive = !clickedCard.isActive;

      generateCard(userDb);
    });
  });
}
generateCard(userDb);
