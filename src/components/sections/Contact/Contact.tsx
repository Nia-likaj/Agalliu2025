import { company } from "../../../data";
import { Card } from "../../ui";
import { Icon } from "../../icons";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <section id="contact" className="section section--alt">
      <div className="container">
        <div className="sectionHead">
          <h2 className="h2">Kontakt & Kërkesë Oferte</h2>
          <p className="muted">
            Na dërgo detajet dhe të kontaktojmë me ofertë të personalizuar.
          </p>
        </div>

        <div className="grid2">
          <ContactForm />

          <div className="stack">
            <Card className="contactInfo">
              <div className="contactInfo__row">
                <Icon name="phone" className="icon" />
                <div>
                  <div className="contactInfo__label">Telefon</div>
                  <a href={`tel:${company.contacts.phone}`}>{company.contacts.phone}</a>
                </div>
              </div>

              <div className="contactInfo__row">
                <Icon name="mail" className="icon" />
                <div>
                  <div className="contactInfo__label">Email</div>
                  <a href={`mailto:${company.contacts.email}`}>{company.contacts.email}</a>
                </div>
              </div>

              <div className="contactInfo__row">
                <Icon name="pin" className="icon" />
                <div>
                  <div className="contactInfo__label">Adresa</div>
                  <div>{company.contacts.address}</div>
                </div>
              </div>

              <div className="contactInfo__row">
                <div className="muted">Orari: {company.contacts.hours}</div>
              </div>
            </Card>

            <Card className="note">
              <div className="note__title">Çfarë na duhet për ofertë të saktë</div>
              <ul className="list list--compact">
                <li>Lokacioni i punës</li>
                <li>Lloji i shërbimit</li>
                <li>Përafërsisht sipërfaqja / volumi</li>
                <li>Afati i dëshiruar</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
