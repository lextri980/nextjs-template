import styles from "@/assets/style/main-layout.module.scss";
import { ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
  return <div className={styles["main-layout-container"]}>{children}</div>;
}
