const res = await fetch("http://10.36.246.170:3000/ai/ai-sensei", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    message: userMsg.text
  }),
});
