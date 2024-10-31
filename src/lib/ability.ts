import { AbilityBuilder, Ability } from "@casl/ability";

export default function defineAbilityFor(user) {
  const { can, cannot, build } = new AbilityBuilder(Ability);

  if (user.role === "ADMIN") {
    can("manage", "all");
  }

  if (user.role === "MANAGER") {
    can("read", "all");
    can("create", "Invoice");
    can("update", "Invoice");
    can("create", "PurchaseOrder");
    can("update", "PurchaseOrder");
  }

  if (user.role === "WAITER") {
    can("read", "MenuItem");
    can("create", "KOT");
    can("update", "KOT");
  }

  if (user.role === "CHEF") {
    can("read", "KOT");
    can("update", "KOT");
  }

  if (user.role === "CASHIER") {
    can("read", "Invoice");
    can("create", "Invoice");
    can("update", "Invoice");
  }

  return build();
}
