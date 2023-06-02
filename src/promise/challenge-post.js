import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

function postData(urlAPI, data) {
  const response = fetch(urlAPI, {
    method: "POST",
    mode: "cors",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response;
}

const data = {
  title: "Mouse Logitech G502",
  price: 255,
  description:
    "The Logitech G502 is a reliable and comfortable gaming mouse, perfect for all types of gamers. It features a 16000 DPI sensor for precision in your movement and 3 Customisable buttons that give you the power to take control of your game. The polyphered cable ensures durability and long-lasting use, while the pixel-precise optical sensor provides smooth cursor movement on any surface.",
  categoryId: 2,
  images: [
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.mos.cms.futurecdn.net%2FcDzSssejpRA4RFbapWV5KY-1200-80.jpg&f=1&nofb=1&ipt=275e7a171501917d4682cee3f49f8e90ef0545c6ea7bfdab77619e8b4a0e39e8&ipo=images",
  ],
};
// ID 8095💚

postData(`${API}/products`, data)
  .then((response) => response.json())
  .then((data) => console.log(data));
