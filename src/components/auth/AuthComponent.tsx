import { Slot, component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

interface Props {
  title: string;
  authLabel: string;
  pathNavigate: string;
}

export const AuthComponent = component$(
  ({ title, authLabel, pathNavigate }: Props) => {
    return (
      <div class="auth-container">
        <div class="auth-box">
          <h1>{title}</h1>
          <Slot name="input-action-slot" />
          <Link href={pathNavigate}>{authLabel}</Link>
        </div>
      </div>
    );
  }
);
