import type { Service } from "../../../types";
import { Card } from "../../ui";
import { Icon } from "../../icons";

type Props = {
  service: Service;
};

export function ServiceCard({ service }: Props) {
  return (
    <Card className="serviceCard">
      <div className="serviceCard__head">
        {service.icon ? <Icon name={service.icon as any} className="icon serviceCard__icon" /> : null}
        <div>
          <div className="serviceCard__title">{service.title}</div>
          <div className="muted">{service.description}</div>
        </div>
      </div>

      {service.bullets?.length ? (
        <ul className="list list--compact">
          {service.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      ) : null}
    </Card>
  );
}
