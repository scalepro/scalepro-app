export function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function getInitials(name: string): string {
  if (name) {
    const [firstName, lastName] = name.split(" ");
    if (firstName && lastName) {
      return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
    }
    return firstName.charAt(0).toUpperCase();
  }
}
