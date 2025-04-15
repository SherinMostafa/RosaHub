export default function ConfirmPasswordValidator(
  Password: string,
  ConfirmPassword: string
) {
  if (Password !== ConfirmPassword) {
    return "The passwords you entered do not match.";
  }
}
