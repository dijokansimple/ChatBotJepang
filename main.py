from fastapi import FastAPI
import requests
import os
from dotenv import load_dotenv
from fastapi.middleware.cors import CORSMiddleware

load_dotenv()

app = FastAPI()

# CORS supaya bisa diakses dari Android
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

API_KEY = os.getenv("GEMINI_KEY")
GEMINI_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent"

@app.post("/ai/ai-sensei")
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
    
    reply = (
        data.get("candidates", [{}])[0]
        .get("content", {})
        .get("parts", [{}])[0]
        .get("text", "Maaf, sensei tidak mengerti 😅")
    )

    return {"reply": reply}
