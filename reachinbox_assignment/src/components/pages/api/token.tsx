// pages/api/token.js
import axios from "axios";

export default async function handler(req, res) {
  try {
    const url =
      "https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=https://frontend.com";
    const response = await axios.get(url, {
      maxRedirects: 2,
      validateStatus: (status) =>
        (status >= 200 && status < 400) || status === 302,
    });

    if (response.status === 302) {
      const redirectUrl = response.headers.location;
      const urlParams = new URLSearchParams(new URL(redirectUrl).search);
      const token = urlParams.get("token");

      res.status(200).json({ token });
    } else {
      res.status(404).json({ error: "No redirect URL found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
