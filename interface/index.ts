// For pages/index.tsx
export interface PageRouteProps {
  pageRoute: string;
}

// For components/common/Button.tsx
export interface ButtonProps {
  action: () => void;
  buttonLabel: string;
  buttonBackgroundColor: string;
}

// For components/layouts/Layout.tsx
import { ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
}
