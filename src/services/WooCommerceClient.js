// src/services/WooCommerceClient.js
import axios from "axios";
import base64 from "base-64";

const consumerKey = "ck_235201b9d775a0a14b7e4c617eeb5fe478db63eb"; // Αντικαταστήστε με το consumer key σας
const consumerSecret = "cs_822702d903e6edeeefdbf759929a950ad832a9af"; // Αντικαταστήστε με το consumer secret σας
const authString = base64.encode(`${consumerKey}:${consumerSecret}`);

const WooCommerceClient = axios.create({
  baseURL: "https://www.castine.gr/wp-json/wc/v3",
  headers: {
    Authorization: `Basic ${authString}`,
    "Content-Type": "application/json",
  },
});

export default WooCommerceClient;
