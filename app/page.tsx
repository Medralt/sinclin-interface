"use client";

export default function Home() {

async function testar() {
try {
const res = await fetch("/api/generate", {
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify({
prompt: "responda apenas OK"
})
});

`
  const data = await res.json();
  alert(data.output || data.error);

} catch (err) {
  alert("Erro ao conectar com API");
}
`

}

return (
<main style={{ padding: 40 }}> <h1>SINCLIN</h1>
<p onClick={testar} style={{ cursor: "pointer", color: "blue" }}>
Testar IA </p> </main>
);
}