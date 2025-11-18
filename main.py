from fastapi import FastAPI
import requests
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

API_KEY = os.getenv("GEMINI_API_KEY")
GEMINI_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent"


@app.post("/chat")
def chat(payload: dict):
    message = payload.get("message", "")

    body = {
        "contents": [
            {
                "parts": [{"text": message}]
            }
        ]
    }

    res = requests.post(
        f"{GEMINI_URL}?key={API_KEY}",
        json=body,
        headers={"Content-Type": "application/json"}
    )

    data = res.json()

    reply = data["candidates"][0]["content"]["parts"][0]["text"]

    return {"reply": reply}
