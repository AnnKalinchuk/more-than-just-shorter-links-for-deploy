import React from "react";
import Config from "../config/config";
import axios from "axios";

const token = Config.token;

const createShortLink = async (longUrl) => {
  try {
    const apiUrl = `https://api.tinyurl.com/create?api_token=${token}`;
    const response = await axios.post(
      apiUrl,
      { url: longUrl },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data.data.tiny_url;
  } catch (e) {
    console.error("Error:", e);
    return null;
  }
};

export default createShortLink;
