import { component$ } from "@builder.io/qwik";
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
          <div class="text-box">
            <label>Email</label>
            <input type="email" placeholder="Email" />
          </div>
          <div class="text-box">
            <label>Password</label>
            <input type="password" placeholder="Password" />
          </div>

          <Link href={pathNavigate}>{authLabel}</Link>
        </div>
      </div>
    );
  }
);
