import React, { useMemo, useState } from "react";
import { Button, Card } from "../../ui";
import { services } from "../../../data";

type FormState = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

const initial: FormState = {
  name: "",
  phone: "",
  email: "",
  service: "",
  message: "",
};

export function ContactForm() {
  const serviceOptions = useMemo(
    () => ["", ...services.map((s) => s.title)],
    []
  );

  const [state, setState] = useState<FormState>(initial);
  const [sent, setSent] = useState(false);

  const onChange =
    (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setState((s) => ({ ...s, [key]: e.target.value }));
    };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Demo submit: create a mailto link (works without backend)
    const subject = encodeURIComponent(`Kërkesë oferte - ${state.service || "Shërbim"}`);
    const body = encodeURIComponent(
      `Emri: ${state.name}\nTel: ${state.phone}\nEmail: ${state.email}\nShërbimi: ${state.service}\n\nMesazhi:\n${state.message}`
    );

    window.location.href = `mailto:contact@agalliu2025.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <Card className="contactCard">
      <form className="form" onSubmit={onSubmit}>
        <div className="grid2">
          <div className="field">
            <label>Emri</label>
            <input value={state.name} onChange={onChange("name")} placeholder="Emër & mbiemër" required />
          </div>

          <div className="field">
            <label>Telefoni</label>
            <input value={state.phone} onChange={onChange("phone")} placeholder="+355 ..." required />
          </div>
        </div>

        <div className="grid2">
          <div className="field">
            <label>Email (opsionale)</label>
            <input type="email" value={state.email} onChange={onChange("email")} placeholder="email@..." />
          </div>

          <div className="field">
            <label>Shërbimi</label>
            <select value={state.service} onChange={onChange("service")} required>
              {serviceOptions.map((o) => (
                <option key={o} value={o}>
                  {o || "Zgjidh shërbimin"}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="field">
          <label>Detaje</label>
          <textarea
            value={state.message}
            onChange={onChange("message")}
            placeholder="Shkruaj shkurt çfarë kërkon, lokacionin dhe afatin..."
            rows={5}
            required
          />
        </div>

        <div className="form__actions">
          <Button type="submit">Dërgo kërkesën</Button>
          {sent ? <div className="muted">Nëse u hap email-i, dërgo mesazhin nga aty.</div> : null}
        </div>
      </form>
    </Card>
  );
}
