const mainContent = document.getElementById("content");

export function createContact() {
  mainContent.style.height = "100vh";
  const wrapContent = document.createElement("div");

  const contantDiv = document.createElement("div");
  const contentTitle = document.createElement("div");
  const contentWrapper = document.createElement("div");
  const contactInfo = document.createElement("div");

  const addressWrapper = document.createElement("div");
  const addressTitle = document.createElement("div");
  const address = document.createElement("div");

  const numberWrapper = document.createElement("div");
  const numberTitle = document.createElement("div");
  const number = document.createElement("div");

  const img = document.createElement("img");

  mainContent.appendChild(wrapContent);
  wrapContent.appendChild(contantDiv);
  contantDiv.appendChild(contentTitle);
  contantDiv.appendChild(contentWrapper);

  contentWrapper.appendChild(contactInfo);
  contactInfo.appendChild(addressWrapper);

  addressWrapper.appendChild(addressTitle);
  addressWrapper.appendChild(address);

  contactInfo.appendChild(numberWrapper);

  numberWrapper.appendChild(numberTitle);
  numberWrapper.appendChild(number);

  contentWrapper.appendChild(img);

  wrapContent.classList.add("wrap-contact");

  contantDiv.classList.add("contact");
  contentTitle.classList.add("contact-title");

  contentWrapper.classList.add("content-wrapper");
  contactInfo.classList.add("contact-info");

  addressWrapper.classList.add("address-wrapper");
  addressTitle.classList.add("address-title");
  address.classList.add("address");

  numberWrapper.classList.add("number-wrapper");
  numberTitle.classList.add("number-title");
  number.classList.add("number");

  contentTitle.innerHTML = "Our Info!";

  addressTitle.innerHTML = "Address:";
  address.innerHTML = "308 Negra Arroyo Lane, Albuquerque, New York 87104";

  numberTitle.innerHTML = "Phone Number:";
  number.innerHTML = "505-503-4455";

  img.src = "/src/breaking-bad-house.jpg";
}
