import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      status: {
        pending:
          "border-transparent bg-warning text-gray-50 ",
        processing:
          "border-transparent bg-primary text-primary-foreground ",
        success:
          "border-transparent bg-green-600 text-gray-50 ",
        failed:
          "border-transparent bg-red-600 text-gray-50 ",
      },
    },
    defaultVariants: {
      status: "pending",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  status: "pending" | "processing" | "success" | "failed";
}

function Badge({ className, status, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ status }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
