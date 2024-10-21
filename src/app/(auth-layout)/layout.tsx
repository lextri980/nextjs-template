import styles from "@/assets/style/auth-layout.module.scss";
import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return <div className={styles["auth-layout-container"]}>{children}</div>;
}
