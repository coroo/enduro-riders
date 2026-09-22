"use client";

import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import { useState, type FormEvent } from "react";
import Plate from "@/components/Plate";

const empty = { name: "", email: "", city: "", chapter: "", message: "", company: "" };

export default function ContactForm({ chapters }: { chapters: string[] }) {
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [notice, setNotice] = useState("");

  function setField(key: keyof typeof empty, value: string) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  async function submit(event: FormEvent) {
    event.preventDefault();
    setStatus("loading");
    setNotice("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = (await response.json()) as { error?: string };
      if (!response.ok) {
        setStatus("error");
        setNotice(data.error ?? "Pesan belum terkirim.");
        return;
      }
      setStatus("done");
      setNotice("Pesan sudah masuk. Chapter terdekat akan membalas lewat email.");
      setForm(empty);
    } catch {
      setStatus("error");
      setNotice("Jaringan sedang bermasalah. Coba kirim lagi.");
    }
  }

  return (
    <Plate sx={{ p: { xs: 2, md: 4 } }}>
      <Box component="form" onSubmit={submit} sx={{ display: "grid", gap: 2 }}>
        <TextField label="Nama" value={form.name} onChange={(event) => setField("name", event.target.value)} required />
        <TextField label="Email" type="email" value={form.email} onChange={(event) => setField("email", event.target.value)} required />
        <TextField label="Kota" value={form.city} onChange={(event) => setField("city", event.target.value)} />
        <TextField
          select
          label="Chapter"
          value={form.chapter}
          onChange={(event) => setField("chapter", event.target.value)}
        >
          <MenuItem value="">Belum punya chapter</MenuItem>
          {chapters.map((chapter) => (
            <MenuItem key={chapter} value={chapter}>
              {chapter}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          label="Pesan"
          value={form.message}
          onChange={(event) => setField("message", event.target.value)}
          multiline
          minRows={4}
          required
        />
        <Box sx={{ position: "absolute", left: -9999 }} aria-hidden>
          <input tabIndex={-1} autoComplete="off" value={form.company} onChange={(event) => setField("company", event.target.value)} />
        </Box>
        {notice ? <Alert severity={status === "done" ? "success" : "error"}>{notice}</Alert> : null}
        <Button type="submit" variant="contained" disabled={status === "loading"} sx={{ justifySelf: "start" }}>
          {status === "loading" ? "Mengirim..." : "Kirim pesan"}
        </Button>
      </Box>
    </Plate>
  );
}
